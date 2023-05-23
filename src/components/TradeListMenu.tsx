export interface TradeListMenuProps {
  updateDisplayOptions: (action: string, value: string | boolean) => void;
  handleAddTradeButtonClick: () => void;
}

export function TradeListMenu(props: TradeListMenuProps) {
  const { updateDisplayOptions, handleAddTradeButtonClick } = props;

  return (
    <form className="mb-4 flex flex-row gap-4 rounded bg-white px-8 py-6 shadow-md">
      <input
        className="w-1/6 cursor-pointer rounded bg-cyan-300 px-4 py-2 font-bold hover:bg-cyan-200 active:bg-cyan-600"
        type="button"
        onClick={handleAddTradeButtonClick}
        value="Add Trade"
      />
      <input
        className="ml-auto w-1/4 appearance-none rounded border p-2 text-gray-700 shadow focus:outline-none"
        name="search"
        type="text"
        onChange={(e) => updateDisplayOptions("searchString", e.target.value)}
        placeholder="Filter Usernames"
      />
      <label className="rounded border p-2 shadow">
        Show archived
        <input
          className="ml-4"
          name="archived"
          type="checkbox"
          onChange={(e) =>
            updateDisplayOptions("showArchived", e.target.checked)
          }
        />
      </label>
      <label className="rounded border p-2 shadow">
        Show shipped
        <input
          className="ml-4"
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
