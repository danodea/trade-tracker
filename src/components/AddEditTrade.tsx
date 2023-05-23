import { TradeType } from "../data/data.interface";

export interface AddEditTradeProps {
  trade?: TradeType;
}

export function AddEditTrade(props: AddEditTradeProps) {
  const { trade } = props;
  const createdDate = new Date(Number(trade?.date.created));

  return (
    <div className="overflow-scroll">
      <h1 className="m-8 text-2xl font-bold">Add Trade</h1>
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
            className="block text-sm font-medium text-gray-900"
            htmlFor="source"
          >
            Source
          </label>
          <input
            className="w-full appearance-none rounded border p-2 text-gray-700 shadow focus:outline-none"
            type="text"
            id="source"
          />
        </div>

        <div className="col-span-full">
          <label
            htmlFor="cards-in"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Cards In
          </label>
          <div className="mt-2">
            <textarea
              id="cards-in"
              name="cards-in"
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Cards you are receiving in the trade.
          </p>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="cards-out"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Cards Out
          </label>
          <div className="mt-2">
            <textarea
              id="cards-out"
              name="cards-out"
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Cards you are sending in the trade.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Country
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="street-address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Street address
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="street-address"
                id="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              City
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="city"
                id="city"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="region"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              State / Province
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="region"
                id="region"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="postal-code"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ZIP / Postal code
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
