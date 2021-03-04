import styled from 'styled-components';

export default styled.article`
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
`;

export const Title = styled.h2`
  display: block;
`;
