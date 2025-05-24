import axios, { AxiosError, AxiosResponse } from "axios";
import { router } from "../router/Routes";
import { toast } from "react-toastify";
import basketService from "./basketService";
import { Dispatch } from "redux";
import { Product } from "../models/product";
import type { Basket } from "../models/basket";

axios.defaults.baseURL = "http://localhost:8081/api/";

const idle = () => new Promise(resolve => setTimeout(resolve, 100));
const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(
  async response => {
    await idle();
    return response;
  },
  (error: AxiosError) => {
    const status = error.response?.status;
    switch (status) {
      case 404:
        toast.error("Resource not found");
        router.navigate("/not-found");
        break;
      case 500:
        toast.error("Internal server error occurred");
        router.navigate("/server-error");
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: object) => axios.post(url, body).then(responseBody),
  put: (url: string, body: object) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Store = {
  apiUrl: "http://localhost:8081/api/products",

  list: (
    page: number = 1,
    size: number = 10,
    brandId?: number,
    typeId?: number,
    sortField: string = "name",
    sortOrder: string = "asc"
  ) => {
    let requestUrl = `products?page=${Math.max(0, page - 1)}&size=${size}`;

    if (brandId !== undefined && brandId !== 0) {
      requestUrl += `&brandId=${brandId}`;
    }
    if (typeId !== undefined && typeId !== 0) {
      requestUrl += `&typeId=${typeId}`;
    }

    requestUrl += `&sort=${sortField}&order=${sortOrder}`;

    return requests.get(requestUrl);
  },

  details: (id: number) => requests.get(`products/${id}`),

  types: () =>
    requests.get("products/types").then(types => [{ id: 0, name: "All" }, ...types]),

  brands: () =>
    requests.get("products/brands").then(brands => [{ id: 0, name: "All" }, ...brands]),

  search: (keyword: string) => requests.get(`products?keyword=${keyword}`),
};

const Basket = {
  get: () => basketService.getBasket(),
  addItem: (product: Product, dispatch: Dispatch) =>
    basketService.addItemToBasket(product, 1, dispatch),
  removeItem: (itemId: number, dispatch: Dispatch) =>
    basketService.remove(itemId, dispatch),
  incrementItemQuantity: (itemId: number, quantity = 1, dispatch: Dispatch) =>
    basketService.incrementItemQuantity(itemId, quantity, dispatch),
  decrementItemQuantity: (itemId: number, quantity = 1, dispatch: Dispatch) =>
    basketService.decrementItemQuantity(itemId, quantity, dispatch),
  setBasket: (basket: Basket, dispatch: Dispatch) =>
    basketService.setBasket(basket, dispatch),
  deleteBasket: (basketId: string) => basketService.deleteBasket(basketId),
};

const Account = {
  login: (values: any) => requests.post("auth/login", values),
};

const Orders = {
  list: () => requests.get("orders"),
  fetch: (id: number) => requests.get(`orders/${id}`),
  create: (values: any) => requests.post("orders", values),
};

const agent = {
  Store,
  Basket,
  Account,
  Orders,
};

export default agent;
