// import { Link } from "react-router-dom";
// import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Waifu } from "../store/features/waifuSlice";
// import { toast } from "react-toastify";
// import { deleteWaifu } from "../store/features/waifuSlice";
// import { useAppDispatch } from "../hooks/hooks";

const WaifusList = ({ id, name, from, imageURL }: Waifu) => {
  // const dispatch = useAppDispatch();

  // const handleDeleteWaifu = async (id: number) => {
  //   try {
  //     // dispatch deleteWaifu thunk
  //     await dispatch(deleteWaifu(id));
  //     toast.success("Waifu deleted successfully!", {
  //       autoClose: 1500,
  //       position: toast.POSITION.TOP_CENTER,
  //       theme: "dark",
  //     });
  //     // reload the page after deleting
  //     window.location.reload();
  //   } catch (error) {
  //     toast.error(String(error), {
  //       autoClose: 1500,
  //       position: toast.POSITION.TOP_CENTER,
  //       theme: "dark",
  //     });
  //   }
  // };

  return (
    <div
      key={id}
      className="border-2 overflow-hidden border-gray-600 rounded-lg text-center "
    >
      <div>
        <h1 className="flex items-center justify-center gap-3">
          Name:
          <span className="font-semibold text-pink-500 font-xl">
            {name.length > 20 ? name.substring(0, 20) + "..." : name}
          </span>
        </h1>
        <h1 className="flex items-center justify-center gap-3">
          From:
          <span className="font-semibold text-pink-600 font-xl">
            {from.length > 20 ? from.substring(0, 20) + "..." : from}
          </span>{" "}
        </h1>
        <img
          className="w-80 h-80 mt-2  object-cover"
          src={imageURL}
          alt={name}
        />
      </div>
      {/* <div className="flex mt-1 justify-between">
        <Link to={`/waifus/${id}/update`}>
          <button>
            <AiFillEdit className="text-blue-500 text-2xl" />
          </button>
        </Link>

        <button onClick={() => handleDeleteWaifu(id)}>
          <AiFillDelete className="text-red-500 text-2xl" />
        </button>
      </div> */}
    </div>
  );
};

export default WaifusList;
