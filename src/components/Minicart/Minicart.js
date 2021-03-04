import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiTrash } from 'react-icons/fi';
import formatCurrency from '../../helpers/formatCurrency';
import Wrapper from './styles';
import * as constants from '../../store/constants/modules/minicartConstants';

const Minicart = () => {
  const dispatch = useDispatch();
  const { amount, products, totals, opened } = useSelector(({ minicart }) => ({
    ...minicart,
  }));

  const closeMinicart = () => {
    dispatch({
      type: constants.MINICART_CLOSE,
    });
  };

  const increment = id => {
    dispatch({
      type: constants.MINICART_INCREMENT,
      payload: { id },
    });
  };

  const decrement = id => {
    dispatch({
      type: constants.MINICART_DECREMENT,
      payload: { id },
    });
  };

  const removeProduct = id => {
    dispatch({
      type: constants.MINICART_REMOVE,
      payload: { id },
    });
  };

  return (
    <Wrapper className={opened ? 'is--active' : ''}>
      <div className="minicart__top">
        <h3>Meu carrinho ({amount})</h3>
        <button
          type="button"
          className="minicart__close"
          onClick={closeMinicart}
        >
          X
        </button>
      </div>
      <div className="minicart__content">
        {products && products.length > 0 && (
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <div className="minicart__content-left">
                  <img src={product.picture} alt={product.title} />
                </div>
                <div className="minicart__content-center">
                  <p>{product.title}</p>
                  <form>
                    <button type="button" onClick={() => decrement(product.id)}>
                      -
                    </button>
                    <input value={product.quantity} readOnly />
                    <button type="button" onClick={() => increment(product.id)}>
                      +
                    </button>
                  </form>
                  {product.quantity === product.stock && (
                    <p className="minicart__item-limit">
                      Infelizmente esse é todo nosso estoque
                    </p>
                  )}
                </div>
                <div className="minicart__content-right">
                  <FiTrash onClick={() => removeProduct(product.id)} />
                </div>
              </li>
            ))}
          </ul>
        )}
        {products && !products.length > 0 && <h4>Seu Carrinho está vazio!</h4>}
      </div>
      {totals > 0 && (
        <div className="minicart__bottom">
          <p className="minicart__total">
            Total: <strong>{formatCurrency(totals)}</strong>
          </p>
        </div>
      )}
    </Wrapper>
  );
};

export default Minicart;
