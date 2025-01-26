import React, { createContext, useState } from "react";
const currencies = {
  euro: {
    symbol: "€",
    label: "EUR",
    conversionRate: 1,
  },
  usd: {
    symbol: "$",
    label: "USD",
    conversionRate: 1.19,
  },
  forint: {
    symbol: "Ft",
    label: "HUF",
    conversionRate: 380,
  },
};
export const CurrencyContext = createContext();
export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState(currencies.euro);
  const changeCurrency = (currencyKey) => {
    setCurrency(currencies[currencyKey]);
  };
  return (
    <CurrencyContext.Provider value={{ currency, changeCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}
