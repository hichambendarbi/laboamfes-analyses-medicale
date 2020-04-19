import React from "react";
import styled from "styled-components";

const StyledElement = styled.div`
  flex: ${props => props.flex};
  grow: ${props => props.grow};
  shrink: ${props => props.shrink};
  basis: ${props => props.basis};
  order: ${props => props.order};
  self: ${props => props.self};
  color: ${props => props.color};
  padding: ${props => props.padding};
  justify-content: ${props => props.justC};
`;

export const Box = ({
  children,
  grow,
  shrink,
  basis,
  order,
  flex,
  self,
  ...props
}) => (
  <StyledElement
    grow={grow}
    shrink={shrink}
    basis={basis}
    order={order}
    flex={flex}
    self={self}
    {...props}
  >
    {children}
  </StyledElement>
);
