import styled from 'styled-components';

export default styled.section`
  h1 {
    font-size: 36px;
    margin: 40px 0;
    text-transform: uppercase;
    color: #4b3c80;
    text-align: center;
  }
  ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    li {
      width: 30%;
      margin: 0 3% 20px 0;
      box-shadow: 0px 0px 5px #ccc;
      border-radius: 10px;
    }
  }
  article {
    padding: 20px;

    img {
      display: block;
      width: 60%;
      margin: 10px auto;
    }

    h2 {
      font-size: 16px;
      margin: 10px 0;
      color: #222;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      cursor: pointer;
    }

    .product__price {
      font-weight: bold;
      color: #4b3c80;
      margin-bottom: 15px;
      font-size: 14px;
    }
  }
`;
