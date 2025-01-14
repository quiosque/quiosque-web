const currencyToNumber = (formattedValue: string): number => {
  const numericValue = formattedValue
    .replace(/[^\d,.-]/g, "")
    .replace(",", ".");

    console.log(numericValue)
  return parseFloat(numericValue);
};

export default currencyToNumber;