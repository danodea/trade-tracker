import { TradeType } from "../data/data.interface";

export interface TradeDetailsProps {
  trade: TradeType;
}

export function TradeDetails(props: TradeDetailsProps) {
  const { trade } = props;
  const createdDate = new Date(Number(trade.date.created));

  return (
    <div>{`${trade.id} - ${trade.username} - ${
      trade.source
    } - ${createdDate.toLocaleDateString()}`}</div>
  );
}
