import styled, { css } from 'styled-components';

export default styled.button`
  display: block;
  border-radius: 10px;
  padding: 10px 0;
  margin: 0px auto;
  width: 180px;
  text-transform: uppercase;
  max-width: 100%;
  background: transparent;
  color: #4b3c80;
  border: 2px solid #4b3c80;

  &:disabled {
    cursor: default;
  }

  ${props =>
    props.primary &&
    css`
      background: #4b3c80;
      color: white;
      border: none;
    `}
`;
