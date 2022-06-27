import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Avatar = ({ src }: { src: string }): JSX.Element => {
  if (!src) return <></>;

  return <AvatarImage src={src} alt="user avatar" height="48px" width="48px" />;
};

const AvatarImage = styled(Image)`
  border-radius: 24px;
`;

export default Avatar;
