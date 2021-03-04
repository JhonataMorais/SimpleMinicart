import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi';
import Header from './styles';
import logoImg from '../../assets/img/logo.png';
import Minicart from '../Minicart';
import * as constants from '../../store/constants/modules/minicartConstants';
import formatCurrency from '../../helpers/formatCurrency';

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const { amount, totals } = useSelector(({ minicart }) => ({
    ...minicart,
  }));
  const openMinicart = () => {
    dispatch({
      type: constants.MINICART_OPEN,
    });
  };

  return (
    <>
      <Header>
        <div>
          <img src={logoImg} alt="Logo" />
        </div>
        <div className="minicart__open">
          <FiShoppingCart size={24} onClick={openMinicart} />
          <span className="minicart__amount">{amount}</span>
          {totals > 0 && (
            <p className="minicart__totals">{formatCurrency(totals)}</p>
          )}
        </div>
      </Header>
      <Minicart />
    </>
  );
};

export default HeaderComponent;
