import tradeData from "../../../data/MOCK_DATA.json";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Trade } from "../../trade/Trade";
import { TradeType } from "../../../data/data.interface";

export function TradeList() {
  const [searchString, setSearchString] = useState("");
  const [archived, setArchived] = useState(false);
  const [shipped, setShipped] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTrade, setSelectedTrade] = useState<TradeType>();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const searchUsernames = () => {
    console.log(searchString);
  };

  const handleTradeClick = (trade: TradeType) => {
    setSelectedTrade(trade);
    toggleDrawer();
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
        <button onClick={toggleDrawer}>Show</button>
      </menu>
      {tradeData
        .filter((trade) => {
          return (
            (!searchString.length || trade.username.includes(searchString)) &&
            (!archived || trade.date.archived) &&
            (!shipped || trade.date.shipped)
          );
        })
        .map((trade) => {
          const createdDate = new Date(Number(trade.date.created));
          return (
            <div onClick={() => handleTradeClick(trade)} key={trade.id}>{`${
              trade.id
            } - ${trade.username} - ${
              trade.source
            } - ${createdDate.toLocaleDateString()}`}</div>
          );
        })}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        size="50vw"
        lockBackgroundScroll
      >
        {selectedTrade && <Trade trade={selectedTrade} />}
      </Drawer>
    </div>
  );
}
