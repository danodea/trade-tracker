import tradeData from "../data/MOCK_DATA.json";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { AddEditTrade } from "./AddEditTrade";
import { TradeList } from "./TradeList";
import { TradeListMenu } from "./TradeListMenu";
import { ITrade } from "../data/data.interface";

export function TradeListContainer() {
  const [displayOptions, setDisplayOptions] = useState({
    searchString: "",
    showShipped: false,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTrade, setSelectedTrade] = useState<ITrade>();

  const toggleDialog = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleTradeClick = (trade: ITrade) => {
    setSelectedTrade(trade);
    toggleDialog();
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
      <Dialog open={isOpen}>
        {<AddEditTrade trade={selectedTrade} onClose={toggleDialog} />}
      </Dialog>
    </div>
  );
}
