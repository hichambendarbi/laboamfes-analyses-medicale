import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
  display: flex;
  flex-flow: ${props => (props.flow ? props.flow : "")};
  flex-direction: ${props => (props.row ? "row" : "column")};
  flex-wrap: ${props => (props.wrap ? "wrap" : "nowrap")};
  justify-content: center;
  justify-content: flex-start;
  justify-content: space-around;
  align-items: center;
  align-content: space-between;
`;

export const Flex = ({
  children,
  row,
  flow,
  flexDirextion,
  wrap,
  ...props
}) => (
  <BoxContainer
    row={row}
    flow={flow}
    flexDirextion={flexDirextion}
    wrap={wrap}
    {...props}
  >
    {children}
  </BoxContainer>
);
