import { Login } from "../types/types";

export function login({ email, password }: Login) {
  const delay = (0.7 + Math.random() * 2) * 1000;

  return new Promise<void>((resolve, reject) => {
    setTimeout(function () {
      if (password === "password123" && !!email) {
        resolve();
      } else {
        reject({ message: "E-mail or password wrong." });
      }
    }, delay);
  });
}
