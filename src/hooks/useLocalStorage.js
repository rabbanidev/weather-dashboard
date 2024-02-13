import { useState, useEffect } from "react";

const useLocalStorage = (storageKay, defaultValue) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKay)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(storageKay, JSON.stringify(value));
  }, [storageKay, value]);

  return [value, setValue];
};

export default useLocalStorage;
