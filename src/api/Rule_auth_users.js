import API from "./Rule_API";

export const loginSesion = async (usuario) => {
  let url = "/api/login";
  return await API.post(url, usuario)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};

export const registerNewUser = async (usuario) => {
  let url = "/api/registro";
  return await API.post(url, usuario)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};

export const isAuth = () => {
  if (typeof window !== "undefined") {
    const tokenChecked = localStorage.getItem("token"); //compruebo que el usuario esté autenticado
    if (tokenChecked) {
      return true;
    } else {
      return false;
    }
  }
};
