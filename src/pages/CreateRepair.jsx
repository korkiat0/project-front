import { useRef, useState } from "react";
// import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import Axios from "../config/axios";
import { useNavigate } from "react-router-dom";
import authApi from "../apis/auth";
import { useEffect } from "react";

export default function CreateRepair() {
  const [rooms, setRooms] = useState([]);
  const getUserRooms = async () => {
    const res = await authApi.getUserRoom();
    setRooms(res.data.room);
  };
  useEffect(() => {
    getUserRooms();
  }, []);
  // console.log(rooms);
  // const { authUser } = useAuth();
  const fileEl = useRef();
  const navigate = useNavigate();
  const [topic, setTopic] = useState("");
  const [details, setDetails] = useState("");
  const [roomAt, setRoomAt] = useState("");
  const [file, setFile] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState();

  const hdlCreateRepair = async () => {
    try {
      const formData = new FormData();
      if (topic) {
        formData.append("topic", topic);
      }

      if (details) {
        formData.append("details", details);
      }
      if (roomAt) {
        formData.append("roomAt", roomAt);
      }

      if (file) {
        formData.append("image", file);
      }
      if (phoneNumber) {
        formData.append("phoneNumber", phoneNumber);
      }
      setLoading(true);
      console.log("formData", formData.getAll("roomAt"));
      await Axios.post("/request-repair", formData);

      toast.success("create repair report");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className="flex flex-col w-full ">
          <div className=" relative h-1/6 w-5/6 mx-auto  items-center  flex justify-end ">
            {/* <Link to="/create-repair"> */}
            {/* <i className="fa-solid fa-circle-plus fa-2xl text-[#1879C3] cursor-pointer hover:text-blue-800"></i> */}
            {/* </Link> */}
          </div>

          <div className="relative overflow-x-auto  ">
            <div className=" mx-auto w-2/5 flex flex-col border-2 gap-10 bg-slate-50  p-5 ">
              <textarea
                className="block w-2/3 focus:outline-none resize-none border-2 border-gray-300 p-2 "
                rows={1}
                placeholder={`Repair report topic`}
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              ></textarea>
              <textarea
                className="block w-2/3 focus:outline-none resize-none border-2 border-gray-300 p-2"
                rows={3}
                placeholder={`Repair details`}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              ></textarea>
              <select
                value={roomAt}
                onChange={(e) => setRoomAt(e.target.value)}
                className="select select-bordered w-full max-w-xs p-2 "
              >
                <option>Choose your room</option>
                {rooms.map(
                  (room) => (
                    console.log(room),
                    (
                      <option value={room.id} key={room.id}>
                        {room.roomId}
                      </option>
                    )
                  )
                )}
              </select>
              <input
                ref={fileEl}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setFile(e.target.files[0]);
                  }
                }}
                type="file"
              />
              <input
                type="text"
                placeholder={`PhoneNumber`}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="block w-2/3 focus:outline-none resize-none border-2 border-gray-300 p-2"
              />
              <button
                onClick={hdlCreateRepair}
                className="tracking-wider text-lg font-semibold 
            shadow-[10px_10px_7px_1px_rgba(0,0,0)] text-white 
            border-2 rounded-lg p-2  w-[200px]
            bg-[#1879C3] opacity-70 hover:opacity-100 border-[#1879C3]"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
