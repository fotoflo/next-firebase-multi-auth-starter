import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { lightTheme, darkTheme } from "./Themes";

function ToggleSwitch({ className, defaultValue, toggleFn, ...props }) {
  const [checked, setChecked] = useState(defaultValue || false);

  const handleChange = () => {
    setChecked(!checked);
    toggleFn();
  };

  return (
    <CheckboxContainer className={className} onClick={handleChange}>
      <HiddenCheckbox checked={checked} readOnly />
      <StyledCheckbox checked={checked} readOnly />
    </CheckboxContainer>
  );
}

ToggleSwitch.propTypes = {
  defaultValue: PropTypes.bool,
};

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  width: 16px;
  height: 16px;
  background: ${(props) =>
    props.checked ? darkTheme.background : lightTheme.background};
  border-radius: 3px;
`;

export default ToggleSwitch;
