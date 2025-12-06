import { useState } from "react";
import { fakeLoginApi } from "../fakeServer/fakeAuth";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loginRequest = async (email, password) => {
    setError("");
    setLoading(true);

    try {
      const data = await fakeLoginApi(email, password);
      return data;
    } catch (err) {
      setError(err.message || "Login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { loginRequest, loading, error };
};
