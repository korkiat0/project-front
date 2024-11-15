import { useEffect, useState } from "react";
import authApi from "../apis/auth";
// import useAuth from "../hooks/useAuth";

export default function HistoryPage() {
  const [history, setHistory] = useState([]);
  const getHistory = async () => {
    const res = await authApi.getHistory();
    setHistory(res.data.userRepair);
  };
  useEffect(() => {
    getHistory();
  }, []);

  console.log(history);
  // const { authUser } = useAuth();

  return (
    <div className="flex flex-col w-full ">
      <div className=" relative size-1/6  "></div>

      <div className="relative overflow-x-auto">
        <table className=" mx-auto  w-5/6  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                วันที่
              </th>

              <th scope="col" className="px-6 py-3">
                ห้อง
              </th>
              <th scope="col" className="px-6 py-3">
                รายการซ่อม
              </th>
            </tr>
          </thead>

          {history.map((item) => (
            <tbody key={item.id}>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.createDate.slice(0, 10).split("-").reverse().join("-")}
                </th>

                <td className="px-6 py-4">{item.room.roomId}</td>
                <td className="px-6 py-4">{item.title}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
