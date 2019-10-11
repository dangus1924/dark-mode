import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setStoredValue] = useState(() => {
    const item = JSON.parse(window.localStorage.getItem(key));
    return item || initialValue;
  });

  const customSetter = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [value, customSetter];
}