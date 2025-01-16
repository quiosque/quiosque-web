const currencyToNumber = (formattedValue: string): number => {
  const numericValue = formattedValue
    .replace(/[^\d,.-]/g, "")
    .replace(",", ".");

  return parseFloat(numericValue);
};

export default currencyToNumber;