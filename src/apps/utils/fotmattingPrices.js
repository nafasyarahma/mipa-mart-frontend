const formatingPrices = (price) => {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  })
    .format(price)
    .replace(/,00/g, "");
  
  return formattedPrice;
}

export default formatingPrices;
