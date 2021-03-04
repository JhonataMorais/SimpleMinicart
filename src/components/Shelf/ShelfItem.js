import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import formatCurrency from '../../helpers/formatCurrency';
import Article, { Title } from './styles';
import Button from '../Button';
import * as constants from '../../store/constants/modules/minicartConstants';

const ShelfItem = props => {
  const dispatch = useDispatch();
  const { product, onClick } = props;
  const { fetching } = useSelector(({ minicart }) => ({
    ...minicart,
  }));
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    setFetched(fetching);
  }, [fetching]);

  const addProduct = payload => {
    if (!fetched) {
      dispatch({
        type: constants.MINICART_ADD,
        payload,
      });
    }
  };

  return (
    <Article>
      <figure>
        <img src={product.picture} alt={product.title} />
      </figure>

      <Title onClick={onClick} title={product.title}>
        {product.title}
      </Title>
      <p className="product__price">{formatCurrency(product.price)}</p>
      {product.quantity ? (
        <Button type="button" primary onClick={() => addProduct(product)}>
          Comprar
        </Button>
      ) : (
        <Button type="button" disabled>
          Indisponivel no momento
        </Button>
      )}
    </Article>
  );
};

ShelfItem.propTypes = {
  product: PropTypes.shape.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ShelfItem;
