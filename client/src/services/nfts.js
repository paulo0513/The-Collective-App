import api from "./api-config";

export const getAllNFTs = async () => {
  const resp = await api.get("/nfts");
  return resp.data;
};

export const getOneNFT = async (id) => {
  const resp = await api.get(`/nfts/${id}`);
  return resp.data;
};

export const postNFT = async (data) => {
  const resp = await api.post("/nfts", { food: data });
  return resp.data;
};

export const putNFT = async (id, data) => {
  const resp = await api.put(`/nfts/${id}`, { food: data });
  return resp.data;
};

export const deleteNFT = async (id) => {
  const resp = await api.delete(`/nfts/${id}`);
  return resp;
};

export const addComment = async (nftId, commentId) => {
  const resp = await api.put(`nfts/${nftId}/comments/${commentId}`);
  return resp.data;
};
