const currencyToNumber = (formattedValue: string): number => {
  const numericValue = formattedValue.replace(/[^\d,.-]/g, "").replace(/\./g, "").replace(",", ".");     

  return parseFloat(numericValue);
};

export default currencyToNumber;