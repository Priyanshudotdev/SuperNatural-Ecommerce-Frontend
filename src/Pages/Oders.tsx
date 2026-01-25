// import { ReactElement } from "react";

// type DataType = {
//   id: string;
//   amount: number;
//   quantity: number;
//   discount: number;
//   status: ReactElement;
//   action: ReactElement;
// };

// const column: Column<DataType>[] = [
//   {
//     Header: "ID",
//     accessor: "id",
//   },
//   {
//     Header: "Quantity",
//     accessor: "quantity",
//   },
//   {
//     Header: "Discount",
//     accessor: "discount",
//   },
//   {
//     Header: "Amount",
//     accessor: "amount",
//   },
//   {
//     Header: "Status",
//     accessor: "status",
//   },
//   {
//     Header: "Action",
//     accessor: "action",
//   },
// ];

const Oders = () => {
  return (
    <div className="w-full min-h-screen pt-[6rem] md:pt-[8rem] lg:pt-[10rem] bg-green-100 px-5 md:px-[3rem] lg:px-[5rem] font-space ">
      <h1 className="uppercase font-semibold text-xl mb-8">My Orders</h1>
      <table className="w-full border-collapse bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border">Order ID</th>
            <th className="p-3 border">Quantity</th>
            <th className="p-3 border">Discount</th>
            <th className="p-3 border">Amount</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {[{ id: "ORD001", amount: 8900, quantity: 2, discount: 500, status: "Delivered" },
            { id: "ORD002", amount: 7500, quantity: 1, discount: 0, status: "Pending" }].map(order => (
            <tr key={order.id} className="text-center">
              <td className="p-2 border">{order.id}</td>
              <td className="p-2 border">{order.quantity}</td>
              <td className="p-2 border">₹{order.discount}</td>
              <td className="p-2 border">₹{order.amount}</td>
              <td className="p-2 border">{order.status}</td>
              <td className="p-2 border">
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Oders;
