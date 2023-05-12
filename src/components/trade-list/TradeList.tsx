import { Trade } from "../trade/Trade";
import tradeData from "../../data/MOCK_DATA.json";

export function TradeList() {
  return (
    <div>
      {tradeData.map((trade) => {
        return <Trade trade={trade} />;
      })}
    </div>
  );
}
