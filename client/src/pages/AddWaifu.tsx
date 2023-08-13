import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { createWaifu } from "../store/features/waifuSlice";
import { useNavigate } from "react-router-dom";
import { formFailure, formSuccess, formValidation } from "../hooks/form";

const AddWaifu = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.waifu);
  const navigate = useNavigate();

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

    const waifuData = {
      name,
      from,
      imageURL,
      _id: "",
    };

    if (!formValidation(name, from, imageURL)) {
      return;
    }

    try {
      await dispatch(createWaifu(waifuData));
      formSuccess("Waifu was added!");
    } catch (err) {
      console.error(err);
      formFailure(String(err));
    } finally {
      // reset the form fields after successful submission
      setFormData({
        name: "",
        from: "",
        imageURL: "",
      });
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center pt-12 items-center flex-col">
      <h2 className="text-2xl mb-4">Add Waifu</h2>
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
          {loading ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default AddWaifu;
