import fetch from "node-fetch";
export const getNews = async () => {
  const apiKey = "31175ef97605440b9e1115c3d8736ba2";
  const url = `https://newsapi.org/v2/top-headlines?country=ng&apiKey=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.articles;
};
