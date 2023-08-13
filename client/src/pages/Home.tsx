import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchWaifu } from "../store/features/waifuSlice";
import WaifusList from "../components/WaifusList";
import { toast } from "react-toastify";

const Home = () => {
  const { waifus, error } = useAppSelector((state) => state.waifu);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWaifu());
  }, [dispatch]);

  if (error)
    return toast.error(String(error) + ". Please Try refreshing the page", {
      autoClose: 2000,
      position: toast.POSITION.TOP_CENTER,
      theme: "dark",
    });
  return (
    <div className="px-12 pt-8">
      <div className="flex flex-wrap gap-12">
        {waifus &&
          waifus.map((waifu) => {
            return (
              <WaifusList
                key={waifu._id}
                name={waifu.name}
                imageURL={waifu.imageURL}
                from={waifu.from}
                _id={waifu._id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
