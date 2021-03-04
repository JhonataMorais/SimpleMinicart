import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as constants from '../../store/constants/modules/productsConstants';
import SectionHome from './styles';
import ShelfItem from '../../components/Shelf';
import Quickview from '../../components/QuickView';

const Home = () => {
  const dispatch = useDispatch();
  const { data, success, fetching } = useSelector(({ products }) => ({
    ...products,
  }));
  const [listProducts, setListProducts] = useState([]);
  const [modalOpned, setModalOpened] = useState(false);
  const [productSelected, setProduct] = useState({});

  const onClose = () => {
    setModalOpened(false);
  };

  const onClick = product => {
    setModalOpened(true);
    setProduct(product);
  };

  useEffect(() => {
    if (!success && !fetching) {
      dispatch({
        type: constants.FETCH_PRODUCTS,
      });
    }
  }, [dispatch, success, fetching]);

  useEffect(() => {
    setListProducts(data?.products);
  }, [data]);

  return (
    <SectionHome>
      <h1>Lançamentos</h1>
      {listProducts && (
        <ul>
          {listProducts.map(product => (
            <li key={product.id}>
              <ShelfItem product={product} onClick={() => onClick(product)} />
            </li>
          ))}
        </ul>
      )}
      <Quickview
        open={modalOpned}
        onClose={onClose}
        product={productSelected}
      />
    </SectionHome>
  );
};

export default Home;
