import { Category } from '../state/types/category.type';
import axios from 'axios';

// const url = "https://localhost:44397/api/categories";
const url = 'https://stockmanagement2018.azurewebsites.net/api/categories';

const headers = {
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json',
  },
};
const getCategories = async () => {
  const categories = await axios.get<Category[]>(url);
  return categories.data;
};

const getCategory = (id: number) => {
  let categoryUrl = `${url}/${id}`;
  return axios.get<Category>(categoryUrl, headers);
};

const addCategory = async (category: Category) => {
  const newCategory = (await axios.post<Category>(url, category, headers)).data;
  return newCategory;
};

const updateCategory = async (id: number, category: Category) => {
  const categoryUrl = `${url}/${id}`;
  await axios.put<Category>(categoryUrl, category, headers);
  return console.log(`category updated with id ${category.id}`);
};

const deleteCategory = async (id: number) => {
  const categoryUrl = `${url}/${id}`;
  await axios.delete<Category>(categoryUrl);
};

export const CategoryServices = {
  getCategories,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
};
