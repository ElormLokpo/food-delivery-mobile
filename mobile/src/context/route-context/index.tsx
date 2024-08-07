import {createContext} from "react";
import { NavigationContextType } from "./types";


export const NavigationContext = createContext<NavigationContextType|undefined>(undefined);

