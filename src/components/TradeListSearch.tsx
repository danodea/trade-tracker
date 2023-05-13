export interface TradeListSearchProps {
  updateDisplayOptions: (action: string, value: string | boolean) => void;
}

export function TradeListSearch(props: TradeListSearchProps) {
  const { updateDisplayOptions } = props;

  return (
    <form className="mb-4 rounded bg-white p-8 shadow-md">
      <label>
        Username Search
        <input
          className="focus:shadow-outline w-1/4 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          name="search"
          type="text"
          onBlur={(e) => updateDisplayOptions("searchString", e.target.value)}
        />
        <input
          className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="submit"
          onClick={(e) => e.preventDefault()}
          value="Search"
        />
      </label>
      <label>
        Show archived
        <input
          name="archived"
          type="checkbox"
          onChange={(e) =>
            updateDisplayOptions("showArchived", e.target.checked)
          }
        />
      </label>
      <label>
        Show shipped
        <input
          name="shipped"
          type="checkbox"
          onChange={(e) =>
            updateDisplayOptions("showShipped", e.target.checked)
          }
        />
      </label>
    </form>
  );
}
