import { useMutation } from "react-query";

export const useTest = () =>
  useMutation(["test"], async () => {
    const response = await fetch("/api/test");
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  });
