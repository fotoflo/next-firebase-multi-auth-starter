import React from "react";
import Image from "next/image";
import styled from "styled-components";

function Avatar({ image }: { image: string }) {
  if (!image) return;

  return (
    <AvatarImage src={image} alt="user avatar" height="48px" width="48px" />
  );
}

const AvatarImage = styled(Image)`
  border-radius: 24px;
`;

export default Avatar;
