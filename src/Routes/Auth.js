import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 80vh;
  display: block;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
`;

export default () => {
  const [action, setAction] = useState("login");

  return (
    <Wrapper>
      {action === "logIn" ? <Box>Log in</Box> : <Box>Sign Up</Box>}
    </Wrapper>
  );
};
