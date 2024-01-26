import Cookies from "js-cookie";

export const regestar = async (username, password) => {
  const req = await fetch(`http://localhost:3001/api/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: username, psd: password }),
  });
};

export const login = async (username, password) => {
  const response = await fetch(`http://localhost:3001/api/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: username, psd: password }),
  });

  const result = await response.json();
  Cookies.set("authToken", result.token);
};

export const post = async () => {
  const post = await fetch("http://localhost:3001/api/post", {
    method: "GET",
    headers: { "auth-token": Cookies.get("authToken") },
  });
};
