import styled from 'styled-components';

export default styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  img {
    width: 140px;
  }

  .minicart__open {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;

    .minicart__amount {
      position: absolute;
      top: 0;
      left: 15px;
      border: none;
      width: 15px;
      height: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: red;
      color: white;
      font-size: 12px;
      border-radius: 50%;
      pointer-events: none;
    }
    .minicart__totals {
      margin-left: 10px;
      cursor: default;
    }
  }
`;
