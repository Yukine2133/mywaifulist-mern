import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchWaifu } from "../store/features/waifuSlice";
import WaifusList from "../components/WaifusList";

const Home = () => {
  const { waifus } = useAppSelector((state) => state.waifu);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWaifu());
  }, [dispatch]);
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
