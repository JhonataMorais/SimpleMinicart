import styled from 'styled-components';

export default styled.div`
  background-color: #ededed;
  transition: all 300ms ease;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  max-height: 70vh;
  overflow-y: auto;
  z-index: 9;
  padding: 50px 20px 20px;
  width: 960px;
  max-width: 90vw;
  box-shadow: 0 0 0 999em rgba(0, 0, 0, 0.2);
  display: flex;

  button {
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    font-size: 20px;
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .quick__left {
    width: 30%;

    img {
      display: block;
      width: 100%;
    }
  }
  .quick__right {
    width: 65%;
    padding: 20px;

    h2 {
      font-size: 20px;
      margin-bottom: 5px;
    }

    p {
      margin: 10px 0;
    }
  }
`;
