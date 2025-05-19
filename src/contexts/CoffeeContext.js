import { useContext } from "react";
import { createContext } from "react";


export const CoffeeContext=createContext(null)


export const useCoffees=()=>{
    return useContext(CoffeeContext)
}
