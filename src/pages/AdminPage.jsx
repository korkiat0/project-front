import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import authApi from "../apis/auth";
import Axios from "../config/axios";

export default function AdminPage() {
  const [getAdminRepair, setAdminRepair] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState();

  //  get Admin

  const AdminRepair = async () => {
    const res = await authApi.getAdminRepair();
    setAdminRepair(res.data.userRepair);
  };

  //ฟังชั้น search
  const filter = getAdminRepair.filter((item) =>
    String(item.room.roomId).includes(search)
  );

  const repair = search === "" ? getAdminRepair : filter;

  const handleClickEdit = async (id, newStatus) => {
    try {
      setLoading(true);
      await Axios.patch(`/request-repair/editStatus`, {
        id,
        status: newStatus,
      });
      toast.success("Edit success");
      setAdminRepair((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status: newStatus } : item
        )
      );
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
    //   console.log(item);
    //   const success = confirm("Repair success? ");
    //   console.log(success);
    //   if (!success) {
    //     return;
    //   }
    //   const updateRepair = { ...item, status: "Completed" };
    //   setAdminRepair([...getAdminRepair, updateRepair]);
  };
  useEffect(() => {
    AdminRepair();
  }, []);

  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className="flex flex-col w-full ">
          <div className=" relative h-1/6 w-5/6 mx-auto  items-center  flex justify-end ">
            <input
              className="p-2 rounded-md "
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search room"
            />
          </div>

          <div className="relative overflow-x-auto">
            <table className=" mx-auto  w-5/6  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    วันที่
                  </th>
                  <th scope="col" className="px-6 py-3">
                    เวลา
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ห้อง
                  </th>
                  <th scope="col" className="px-6 py-3">
                    รายการซ่อม
                  </th>
                  <th scope="col" className="px-6 py-3">
                    สถานะการซ่อม
                  </th>
                </tr>
              </thead>

              {repair.map((item) => (
                <tbody key={item.id}>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.createDate
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("-")}
                    </th>
                    <td className="px-6 py-4">
                      {" "}
                      {item.createDate.slice(11, 16)}
                    </td>
                    <td className="px-6 py-4">{item.room.roomId}</td>
                    <td className="px-6 py-4">{item.title}</td>
                    <select
                      onChange={(e) => handleClickEdit(item.id, e.target.value)}
                      value={item.status}
                      className="px-6 py-4"
                    >
                      {" "}
                      <option value={"Pending"}>Pending</option>
                      <option value={"Inprogress"}>Inprogress</option>
                      <option value={"Completed"}>Completed</option>
                    </select>
                    {/* <button onClick={() => handleClickEdit(item)}>
                  <td className="px-6 py-4">{item.status}</td>
                </button> */}
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      )}
    </>
  );
}
