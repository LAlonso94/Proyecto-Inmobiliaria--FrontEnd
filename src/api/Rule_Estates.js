import API from "./Rule_api";

const Rule_Estates = {
  getEstates: async () => {
    const url = "/api/inmuebles";
    return await API.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data.error;
      });
  },
  getSearchId: async (id) => {
    const url = `/api/publicacion/${id}`;
    return await API.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data.error;
      });
  },
  getFilterEstates: async (credentials) => {
    const url = "/api/inmuebles/filtro";
    return await API.post(url, credentials)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data.error;
      });
  },
  postAdd: async (credentials, config) => {
    const url = `/api/inmuebles/nuevo`;
    return await API.post(url, credentials, config)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data.error;
      });
  },
  putEdit: async (credentials, id) => {
    const url = `/api/inmuebles/editar/${id}`;
    return await API.put(url, credentials)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data.error;
      });
  },
  deleteDelete: async (id) => {
    const url = `/api/inmuebles/borrar/${id}`;
    return await API.delete(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data.error;
      });
  },
};

export default Rule_Estates;
