import { Stock } from "../state/types/stock.type";
import axios from "axios";

const url = "https://localhost:44397/api/stock";
const headers = {
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
  },
};
const getStock = async () => {
  const stock = await axios.get<Stock[]>(url);
  return stock.data;
};

const getStockById = async (id: number) => {
  let stockUrl = `${url}/${id}`;
  const stock = await axios.get<Stock>(stockUrl, headers);
  return stock;
};

const getStockByProductSku = async (productSku: string) => {
  let stockUrl = `${url}/StockByProduct/${productSku}`;
  const stock = await axios.get<Stock>(stockUrl, headers);
  return stock;
};

const addStock = async (stock: Stock) => {
  const newStock = (await axios.post<Stock>(url, stock, headers)).data;
  return newStock;
};

const updateStock = async (id: number, stock: Stock) => {
  const stockUrl = `${url}/${id}`;
  await axios.put<Stock>(stockUrl, stock, headers);
  return console.log(`stock updtated with id ${stock.id}`);
};

const deleteStock = async (id: number) => {
  const stockUrl = `${url}/${id}`;
  await axios.delete<Stock>(stockUrl);
};

export const StockServices = {
  getStock,
  getStockById,
  getStockByProductSku,
  addStock,
  updateStock,
  deleteStock,
};
