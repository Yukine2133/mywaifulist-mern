import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateWaifu } from "../store/features/waifuSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { formFailure, formSuccess, formValidation } from "../hooks/form";

const UpdateWaifu = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.waifu);

  const [formData, setFormData] = useState({
    name: "",
    from: "",
    imageURL: "",
  });

  const { name, from, imageURL } = formData;

  const onTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formValidation(name, from, imageURL)) {
      return;
    }

    try {
      await dispatch(
        updateWaifu({
          id,
          updatedData: { name, from, imageURL },
        })
      );
      formSuccess("Waifu was updated!");
    } catch (err) {
      console.error(err);
      formFailure(String(err));
    } finally {
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center pt-12 items-center flex-col">
      <h2 className="text-2xl mb-4">Update Waifu</h2>
      <form className="flex flex-col gap-8" onSubmit={onSubmit}>
        <div className="flex flex-col">
          <label className="text-xl ">Name:</label>
          <input
            className="p-1  text-black outline-none mt-3 rounded-md placeholder:text-violet-800 "
            type="text"
            name="name"
            onChange={onTextInputChange}
            value={name}
            placeholder="Enter a name of the character"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl ">From:</label>
          <input
            className="p-1  text-black outline-none mt-3 rounded-md placeholder:text-violet-800 "
            type="text"
            name="from"
            onChange={onTextInputChange}
            value={from}
            placeholder="Enter from where this character is"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl ">Image:</label>
          <input
            className="p-1  text-black outline-none mt-3 rounded-md placeholder:text-violet-800 "
            type="text"
            name="imageURL"
            value={imageURL}
            onChange={onTextInputChange}
          />
        </div>
        <button
          className="py-3 px-4 bg-gradient-to-r from-violet-700  hover:opacity-75 transition-opacity duration-300 to-purple-600 text-white rounded-md"
          type="submit"
        >
          {loading ? "Loading..." : "Update"}
        </button>
      </form>
    </div>
  );
};

export default UpdateWaifu;
