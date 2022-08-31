export const getAuthenticate = () => {
  let user = localStorage.getItem("token");

  if (user) {
    return true;
  } else {
    return false;
  }
};

const authenticate = ({ token }: any) => {
  localStorage.setItem("token", token);
};

const getToken = () => {
  return localStorage.getItem("token");
};

export {authenticate, getToken}