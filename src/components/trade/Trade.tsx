import { TradeType } from "../../data/data.interface";

export interface TradeProps {
  trade: TradeType;
}

export function Trade(props: TradeProps) {
  const { trade } = props;
  const createdDate = new Date(Number(trade.date.created));

  return (
    <div>{`${trade.id} - ${trade.username} - ${
      trade.source
    } - ${createdDate.toLocaleDateString()}`}</div>
  );
}
