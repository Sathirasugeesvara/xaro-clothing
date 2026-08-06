// Rs 4500 -> Rs 4,500
export const formatPrice = (value: number | string): string => {
  const n = Number(value) || 0;
  return `Rs ${n.toLocaleString("en-LK")}`;
};
