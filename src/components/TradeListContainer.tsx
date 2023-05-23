import tradeData from "../data/MOCK_DATA.json";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { AddEditTrade } from "./AddEditTrade";
import { TradeList } from "./TradeList";
import { TradeListMenu } from "./TradeListMenu";
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

  const handleAddTradeButtonClick = () => {
    setSelectedTrade(undefined);
    setIsOpen(true);
  };

  const updateDisplayOptions = (key: string, value: string | boolean) => {
    setDisplayOptions({ ...displayOptions, [key]: value });
  };

  return (
    <div>
      <TradeListMenu
        updateDisplayOptions={updateDisplayOptions}
        handleAddTradeButtonClick={handleAddTradeButtonClick}
      />
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
        {<AddEditTrade trade={selectedTrade} />}
      </Drawer>
    </div>
  );
}
