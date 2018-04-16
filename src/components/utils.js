export const filterFunc = (filterOptions, price) => {
  const low = filterOptions[0];
  const high = filterOptions[1];

  if (low && !high) return price <= low;
  if (high && !low) return price >= high;

  return price >= low && price <= high;
};
