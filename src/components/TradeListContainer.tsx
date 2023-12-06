import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { AddEditTrade } from "./AddEditTrade";
import { TradeList } from "./TradeList";
import { TradeListMenu } from "./TradeListMenu";
import { ITrade } from "../data/data.interface";
import { ref } from "firebase/database";
import { useList } from "react-firebase-hooks/database";
import { database } from "../firebase/firebase";

interface ITradeListContainerProps {
  userId: string;
}

export function TradeListContainer(props: ITradeListContainerProps) {
  const { userId } = props;
  const [displayOptions, setDisplayOptions] = useState({
    searchString: "",
    showShipped: false,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTrade, setSelectedTrade] = useState<ITrade>();
  const trades = ref(database, `trades/${userId}`);

  const [snapshot, loading, error] = useList(trades);

  console.log(snapshot?.map((v) => v.val()));

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
        data={snapshot?.map((v) => v.val()) as ITrade[]}
        displayOptions={displayOptions}
        handleSelection={handleTradeClick}
      />
      <Dialog open={isOpen}>
        {<AddEditTrade trade={selectedTrade} onClose={toggleDialog} db={trades}/>}
      </Dialog>
    </div>
  );
}
