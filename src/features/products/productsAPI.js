import axios from "../../utils/axios.config";

export const fetchProducts = async () => {
  const res = await fetch("products.json");
  const data = await res.json();
  return data;
};
