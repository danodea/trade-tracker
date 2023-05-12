import { Trade } from "../trade/Trade";
import tradeData from "../../data/MOCK_DATA.json";
import { useState } from "react";

export function TradeList() {
  const [searchString, setSearchString] = useState("");
  const [archived, setArchived] = useState(false);
  const [shipped, setShipped] = useState(false);

  const searchUsernames = () => {
    console.log(searchString);
  };

  return (
    <div>
      <menu>
        <label htmlFor="search">
          Username Search
          <input
            name="search"
            type="text"
            onBlur={(e) => setSearchString(e.target.value)}
          />
          <button onClick={() => searchUsernames()}>Search</button>
        </label>
        <label htmlFor="archived">
          Show archived
          <input
            name="archived"
            type="checkbox"
            onChange={(e) => setArchived(e.target.checked)}
          />
        </label>
        <label htmlFor="shipped">
          Show shipped
          <input
            name="shipped"
            type="checkbox"
            onChange={(e) => setShipped(e.target.checked)}
          />
        </label>
      </menu>
      {/* {tradeData.map((trade) => {
        if (!searchString.length || trade.username.includes(searchString)) {
          return <Trade trade={trade} />;
        }
      })} */}
      {tradeData
        .filter((trade) => {
          return (
            (!searchString.length || trade.username.includes(searchString)) &&
            (!archived || trade.date.archived) &&
            (!shipped || trade.date.shipped)
          );
        })
        .map((trade) => {
          return <Trade trade={trade} />;
        })}
    </div>
  );
}
