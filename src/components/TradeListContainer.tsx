import tradeData from "../data/MOCK_DATA.json";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Trade } from "./Trade";
import { TradeList } from "./TradeList";
import { TradeListSearch } from "./TradeListSearch";
import { TradeType } from "../data/data.interface";

export function TradeListContainer() {
  const [displayOptions, setDisplayOptions] = useState({
    searchString: "",
    showArchived: false,
    showShipped: false,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTrade, setSelectedTrade] = useState<TradeType>();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleTradeClick = (trade: TradeType) => {
    setSelectedTrade(trade);
    toggleDrawer();
  };

  const updateDisplayOptions = (key: string, value: any) => {
    setDisplayOptions({ ...displayOptions, [key]: value });
  };

  return (
    <div>
      <TradeListSearch updateDisplayOptions={updateDisplayOptions} />
      <TradeList
        data={tradeData}
        displayOptions={displayOptions}
        handleSelection={handleTradeClick}
      />
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
