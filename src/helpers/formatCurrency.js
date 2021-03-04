const formatCurrency = value => {
  if (!value) {
    return '-';
  }
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export default formatCurrency;
