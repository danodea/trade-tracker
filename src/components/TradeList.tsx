import DataTable, { TableColumn } from "react-data-table-component";
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

  const columns: TableColumn<TradeType>[] = [
    {
      name: "ID",
      selector: (row) => row.id,
      omit: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Created",
      selector: (row) => row.date.created,
      sortable: true,
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={data.filter((trade) => {
        return (
          (!searchString.length || trade.username.includes(searchString)) &&
          (!showArchived || trade.date.archived) &&
          (!showShipped || trade.date.shipped)
        );
      })}
      striped
      pointerOnHover
      defaultSortFieldId={3}
      onRowClicked={(row) => handleSelection(row)}
    />
  );
}
