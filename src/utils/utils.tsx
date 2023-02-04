export function login(
  email: string,
  password: string,
  setLoading: (loading: boolean) => void
) {
  const delay = (0.7 + Math.random() * 2) * 1000;

  return new Promise<void>((resolve, reject) => {
    setLoading(true);

    setTimeout(function () {
      if (password === "password123" && !!email) {
        resolve();
      } else {
        reject({ message: "e-mail or password wrong." });
      }
      setLoading(false);
    }, delay);
  });
}
