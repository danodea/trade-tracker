import { TradeType } from "../data/data.interface";

export interface AddEditTradeProps {
  trade?: TradeType;
}

export function AddEditTrade(props: AddEditTradeProps) {
  const { trade } = props;
  const createdDate = new Date(Number(trade?.date.created));

  return (
    <form className="m-4 flex flex-row flex-wrap gap-4 rounded p-8 shadow">
      <div>
        <label
          className="block text-sm font-medium text-gray-900"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="w-full appearance-none rounded border p-2 text-gray-700 shadow focus:outline-none"
          type="text"
          id="username"
        />
      </div>
      <div>
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-900"
        >
          Country
        </label>

        <select
          id="country"
          name="country"
          className="block w-full rounded-md border-0 p-2 text-gray-900 shadow ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>
    </form>
  );
}
