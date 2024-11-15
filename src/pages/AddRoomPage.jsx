export default function AddRoomPage() {
  return (
    <div className="flex flex-col w-full ">
      <div className=" relative size-1/6  "></div>

      <div className="relative overflow-x-auto ">
        <table className=" mx-auto  w-96  ">
          <thead className="text-xs text-gray-700 bg-slate-50   ">
            <tr className=" flex flex-col p-4">
              <th
                scope="col"
                className="p-2  text-[#1879C3] font-bold text-2xl"
              >
                Room
              </th>
              <select className="select select-bordered border-2 rounded-lg w-full max-w-xs mx-auto p-2 ">
                <option disabled selected>
                  Choose your room
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </tr>
            <div className="flex justify-center items-center m-6 ">
              <button
                className="tracking-wider text-sm font-semibold 
            shadow-[15px_15px_7px_1px_rgba(0,0,0)] text-white 
            border-2 rounded-lg p-2  
            bg-[#1879C3] opacity-70 hover:opacity-100 border-[#1879C3] "
              >
                AddRoom
              </button>
            </div>
          </thead>
        </table>
      </div>
    </div>
  );
}
