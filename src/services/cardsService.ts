import axios from "axios";
import { Card } from "../interfaces/Card";
import _ from "lodash";

const api: string = process.env.REACT_APP_API || "";

export const addCard = (newCard: Card): Promise<any> => {
  return axios.post(`${api}cards`, newCard, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};

export const getMyCards = (): Promise<any> => {
  return axios.get(`${api}cards/my-cards`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};

export const getAllCards = (): Promise<any> => {
  return axios.get(`${api}cards`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};

export const getCard = (id: string): Promise<any> => {
  return axios.get(`${api}cards/${id}`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};

export const editCard = (card: Card): Promise<any> => {
  let body = _.omit(card, ["_id"]);
  return axios.put(`${api}cards/${card._id}`, body, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};

export const deleteCard = (card: Card): Promise<any> => {
  return axios.delete(`${api}cards/${card._id}`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};
