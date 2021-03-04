import * as constants from '../constants/modules/minicartConstants';

const initialState = {
  amount: 0,
  products: [],
  totals: 0,
  opened: false,
  success: false,
  fetching: false,
};

const updateAmount = payload => {
  let amount = 0;
  payload.forEach(product => {
    amount += product.quantity;
  });

  return amount;
};

const calculateTotals = payload => {
  let totals = 0;
  payload.forEach(product => {
    totals += product.quantity * product.price;
  });

  return totals;
};

const addProduct = (state, payload) => {
  const { products } = state;

  if (products.length > 0) {
    products.forEach((product, index) => {
      if (product.id === payload.id) {
        products[index] = { ...payload, quantity: product.quantity + 1 };
      } else if (
        !products.find(productFinded => productFinded.id === payload.id)
      ) {
        products.push({ ...payload, stock: payload.quantity, quantity: 1 });
      }
    });
  } else if (!products.find(product => product.id === payload.id)) {
    products.push({ ...payload, stock: payload.quantity, quantity: 1 });
  }

  const amount = updateAmount(products);
  const totals = calculateTotals(products);

  return { ...state, products, amount, totals };
};

const increment = (state, payload) => {
  const { products } = state;
  const { id } = payload;

  const index = products.findIndex(product => product.id === id);
  const product = products[index];

  if (product.stock !== product.quantity) {
    products[index] = {
      ...product,
      quantity: product.quantity + 1,
    };
  }

  const amount = updateAmount(products);
  const totals = calculateTotals(products);

  return { ...state, products, amount, totals };
};

const decrement = (state, payload) => {
  const { products } = state;
  const { id } = payload;

  const index = products.findIndex(product => product.id === id);
  const product = products[index];

  if (product.quantity > 1) {
    products[index] = {
      ...product,
      quantity: product.quantity - 1,
    };
  }

  const amount = updateAmount(products);
  const totals = calculateTotals(products);

  return { ...state, products, amount, totals };
};

const removeProduct = (state, payload) => {
  const { products } = state;
  const { id } = payload;

  const productsUpdated = products.filter(product => product.id !== id);

  const amount = updateAmount(productsUpdated);
  const totals = calculateTotals(productsUpdated);

  return { ...state, products: productsUpdated, amount, totals };
};

export const minicartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.MINICART_OPEN:
      return { ...state, ...payload, opened: true };
    case constants.MINICART_CLOSE:
      return { ...state, ...payload, opened: false };
    case constants.MINICART_INCREMENT:
      return increment(state, payload);
    case constants.MINICART_DECREMENT:
      return decrement(state, payload);
    case constants.MINICART_ADD:
      return addProduct(state, payload);
    case constants.MINICART_REMOVE:
      return removeProduct(state, payload);
    default:
      return state;
  }
};
