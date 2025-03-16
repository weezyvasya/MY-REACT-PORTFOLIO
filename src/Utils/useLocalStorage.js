import { useState, useEffect } from "react";


export function getItemLocalStorage (key, defaultValue) {
    return JSON.parse(localStorage.getItem(key)) || defaultValue;
}

export function useLocalStorage (key, defaultValue) {
 const [value, setValue] = useState(getItemLocalStorage(key, defaultValue))

 useEffect(() => {
     localStorage.setItem(key, JSON.stringify(value) );
   }, [value, setValue]);

  return [value, setValue]

}

