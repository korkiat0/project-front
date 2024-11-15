import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import authApi from "../apis/auth";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function UserPage() {
  const [getUserRepair, setUserRepair] = useState([]);
  const { setEditRepair } = useAuth();
  const navigate = useNavigate();

  const UserRepair = async () => {
    const res = await authApi.getUserRepair();
    setUserRepair(res.data.userRepair);
  };
  console.log(getUserRepair);

  const handleClickDelete = async (id) => {
    try {
      await authApi.deleteRepair(id);
      const data = getUserRepair.filter((item) => item.id !== id);
      setUserRepair(data);
      toast.success("ลบสำเร็จ");
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickEdit = (item) => {
    setEditRepair(item);
    navigate("/edit");
  };

  useEffect(() => {
    UserRepair();
  }, []);

  return (
    <div className="flex flex-col w-full ">
      <div className=" relative h-1/6 w-5/6 mx-auto  items-center  flex justify-end ">
        <Link to="/create-repair">
          <i className="fa-solid fa-circle-plus fa-2xl text-[#1879C3] cursor-pointer hover:text-blue-800"></i>
        </Link>
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
              <th scope="col" className="px-6 py-3">
                ลบ/แก้ไข
              </th>
            </tr>
          </thead>

          {getUserRepair.map((item) => (
            <tbody key={item.id}>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.createDate.slice(0, 10).split("-").reverse().join("-")}
                </th>
                <td className="px-6 py-4"> {item.createDate.slice(11, 16)}</td>
                <td className="px-6 py-4">{item.room.roomId}</td>
                <td className="px-6 py-4">{item.title}</td>
                <td className="px-6 py-4">{item.status}</td>
                <td className=" flex px-6 py-4 gap-2 ">
                  <button
                    onClick={() => handleClickDelete(item.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold
                    py-2 px-4 rounded"
                  >
                    ลบ
                  </button>
                  <button
                    onClick={() => handleClickEdit(item)}
                    className="bg-yellow-300 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
                  >
                    แก้ไข
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
