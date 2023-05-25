import DataTable, { TableColumn } from "react-data-table-component";
import { TradeType } from "../data/data.interface";
import { StatusPill } from "./StatusPill";
import * as dayjs from "dayjs";

export interface TradeListProps {
  data: TradeType[];
  displayOptions: {
    searchString: string;
    showShipped: boolean;
  };
  handleSelection: (trade: TradeType) => void;
}

export function TradeList(props: TradeListProps) {
  const {
    data,
    displayOptions: { searchString, showShipped },
    handleSelection,
  } = props;

  const createStatusCell = (row: TradeType) => {
    return (
      <div className="flex flex-row gap-2">
        {row.date.shipped ? <StatusPill value="Shipped" /> : ""}
      </div>
    );
  };

  const columns: TableColumn<TradeType>[] = [
    {
      name: "ID",
      selector: (row) => row.id,
      // omit: true,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Created",
      selector: (row) => row.date.created,
      format: (row) => dayjs(Number(row.date.created)).format("MM / DD / YYYY"),
      sortable: true,
    },
    { name: "Status", cell: (row) => createStatusCell(row) },
  ];

  return (
    <div className="rounded p-2">
      <DataTable
        columns={columns}
        data={data.filter((trade) => {
          return (
            (!searchString.length || trade.username.includes(searchString)) &&
            (!trade.date.shipped || showShipped)
          );
        })}
        // striped
        dense
        pointerOnHover
        highlightOnHover
        defaultSortFieldId={3}
        onRowClicked={(row) => handleSelection(row)}
      />
    </div>
  );
}
