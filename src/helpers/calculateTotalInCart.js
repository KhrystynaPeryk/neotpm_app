export const calculateTotalInCart = (products) => {
  const initialValue = 0;
  return products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, initialValue);
};