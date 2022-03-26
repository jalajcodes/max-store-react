export const sortProducts = (
  productsList,
  sortByHighLow,
  priceRange,
  sortByRating
) => {
  let products = productsList;

  switch (sortByHighLow) {
    case "LOW_TO_HIGH":
      products = products.sort((a, b) => a.price - b.price);
      break;
    case "HIGH_TO_LOW":
      products = products.sort((a, b) => b.price - a.price);
      break;
    default:
      products = productsList;
  }

  if (sortByRating) {
    products = products.filter((product) => product.rating >= sortByRating);
  }

  if (priceRange) {
    products = products.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );
  }

  return products;
};

export const filterByCategory = (productsList, categoriesList) => {
  const noCategorySelected = Object.values(categoriesList).every(
    (value) => value === false
  );

  if (noCategorySelected) return productsList;

  return productsList.reduce((acc, product) => {
    if (
      categoriesList.hasOwnProperty(product.category) &&
      categoriesList[product.category]
    ) {
      acc.push(product);
    }
    return acc;
  }, []);
};
