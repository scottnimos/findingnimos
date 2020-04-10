//Credit: https://github.com/Snazzyham/snazzyham.com/blob/2020/src/helpers/index.js
import Prismic from "prismic-javascript";

export const getData = async (page, key) => {
  const API_ENDPOINT = process.env.API_ENDPOINT;
  const api = await Prismic.api(API_ENDPOINT, {
    accessToken: process.env.API_SECRET
  });
  const res = await api.query(Prismic.Predicates.at(page, key));
  return { data: res };
};