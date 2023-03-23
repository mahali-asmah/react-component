import { createContext } from "react";

const TranslationsContext = createContext<{ [K: string]: string }>({});
export default TranslationsContext;

export const TranslationsProvider = TranslationsContext.Provider;
