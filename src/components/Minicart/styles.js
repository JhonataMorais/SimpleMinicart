import styled from 'styled-components';

export default styled.div`
  background-color: #ededed;
  transition: all 300ms ease;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  z-index: 9;
  padding: 20px 20px 30px;
  width: 650px;
  max-width: 100%;
  transform: translateX(100%);

  &.is--active {
    box-shadow: 0 0 20px #2e2e2e;
    transform: translateX(0);
  }

  .minicart__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    height: 40px;

    button {
      width: 40px;
      height: 40px;
      background-color: transparent;
      border: none;
      font-size: 20px;
    }
  }

  .minicart__content {
    margin-bottom: 40px;
    height: calc(100vh - 240px);
    overflow-y: auto;
    ul {
      li {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
      }
    }

    .minicart__item-limit {
      color: red;
      font-size: 12px;
      margin-top: 5px;
    }

    &-left {
      padding-right: 10px;

      img {
        display: block;
        max-width: 75px;
      }
    }
    &-center {
      padding-right: 10px;

      p {
        margin-bottom: 10px;
      }

      form {
        display: flex;
        border: 1px solid black;
        width: 90px;

        input {
          text-align: center;
          display: block;
          width: 30px;
          height: 40px;
          pointer-events: none;
          border-top: 0;
          border-bottom: 0;
          border-color: black;
          background-color: #fff;
        }
        button {
          background-color: #fff;
          border: none;
          text-align: center;
          display: block;
          width: 30px;
          height: 40px;
        }
      }

      img {
        display: block;
        max-width: 75px;
      }
    }

    &-right {
      display: flex;
      align-items: center;
    }
  }
`;
