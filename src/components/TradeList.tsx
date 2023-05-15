import { TradeType } from "../data/data.interface";

export interface TradeListProps {
  data: TradeType[];
  displayOptions: {
    searchString: string;
    showArchived: boolean;
    showShipped: boolean;
  };
  handleSelection: (trade: TradeType) => void;
}

export function TradeList(props: TradeListProps) {
  const {
    data,
    displayOptions: { searchString, showArchived, showShipped },
    handleSelection,
  } = props;
  return (
    <>
      {data
        .filter((trade) => {
          return (
            (!searchString.length || trade.username.includes(searchString)) &&
            (!showArchived || trade.date.archived) &&
            (!showShipped || trade.date.shipped)
          );
        })
        .map((trade) => {
          const createdDate = new Date(Number(trade.date.created));
          return (
            <div onClick={() => handleSelection(trade)} key={trade.id}>{`${
              trade.id
            } - ${trade.username} - ${
              trade.source
            } - ${createdDate.toLocaleDateString()}`}</div>
          );
        })}
    </>
  );
}
