import PropTypes from 'prop-types';
import formatCurrency from '../../helpers/formatCurrency';
import Wrapper from './styles';

const Quickview = props => {
  const { product, open, onClose } = props;
  return (
    <>
      {open && (
        <Wrapper>
          <button type="button" className="quick__close" onClick={onClose}>
            X
          </button>
          <div className="quick__left">
            <figure>
              <img src={product?.picture} alt={product?.title} />
            </figure>
          </div>
          <div className="quick__right">
            <h2 title={product?.title}>{product?.title}</h2>
            <p className="product__brand">
              Marca: <strong>{product?.brand}</strong>
            </p>
            {product?.chipType ||
              (product?.memory && (
                <p className="product__specification">
                  {`${product?.chipType} - `}
                  {product?.memory}
                </p>
              ))}
            <p className="product__price">
              <strong>{formatCurrency(product?.price)}</strong>
            </p>
            <p className="product__description">{product?.description}</p>
          </div>
        </Wrapper>
      )}
    </>
  );
};

Quickview.propTypes = {
  product: PropTypes.shape.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Quickview;
