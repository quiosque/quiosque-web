const defaultCurrencyFormat = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const formatter = (value: number, format = defaultCurrencyFormat) => {
  return format.format(value);
};

export default formatter;