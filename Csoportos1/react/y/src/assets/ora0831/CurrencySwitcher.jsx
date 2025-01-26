import React, { useContext } from "react";
import { CurrencyContext } from "./CurrencyContext";
function CurrencySwitcher() {
  const { currency, changeCurrency } = useContext(CurrencyContext);
  return (
    <div>
      <h2>Select Currency</h2>
      <select onChange={(e) => changeCurrency(e.target.value)} value={currency.label}>
        <option value="euro">EUR</option>
        <option value="usd">USD</option>
        <option value="forint">HUF</option>
      </select>
    </div>
  );
}
export default CurrencySwitcher;