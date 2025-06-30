import { api } from "../Config/Api";

export const getOrders = async () => {
  const token = localStorage.getItem("jwt");
  const res = await api.get("/api/orders", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
