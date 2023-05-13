export interface TradeListSearchProps {
  updateDisplayOptions: (action: string, value: string | boolean) => void;
}

export function TradeListSearch(props: TradeListSearchProps) {
  const { updateDisplayOptions } = props;

  return (
    <div>
      <label htmlFor="search">
        Username Search
        <input
          name="search"
          type="text"
          onBlur={(e) => updateDisplayOptions("searchString", e.target.value)}
        />
        <button>Search</button>
      </label>
      <label htmlFor="archived">
        Show archived
        <input
          name="archived"
          type="checkbox"
          onChange={(e) =>
            updateDisplayOptions("showArchived", e.target.checked)
          }
        />
      </label>
      <label htmlFor="shipped">
        Show shipped
        <input
          name="shipped"
          type="checkbox"
          onChange={(e) =>
            updateDisplayOptions("showShipped", e.target.checked)
          }
        />
      </label>
    </div>
  );
}
