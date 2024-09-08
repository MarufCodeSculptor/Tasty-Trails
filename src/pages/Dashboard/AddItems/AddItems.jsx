import { FaUtensilSpoon } from "react-icons/fa";
import SectionHeading from "../../../Components/SectionHeading";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";
import ProgrecBar from "../../../Components/Progress/ProgrecBar";

  const image_hosting_key = import.meta.env.VITE_IMAGEBB_API;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const AddItems = () => {
  const { register, handleSubmit,reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (formData) => {
    setProccesing(true);
    const imagefile = { image: formData.image[0] };
    // posting image to imagebb=>
    try {
      const res = await axios.post(image_hosting_api, imagefile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        const finalData = {
          name: formData.name,
          category: formData.category,
          price: formData.price,
          image: res.data.data.display_url,
          recipe: formData.recipe,

          // Add more fields as needed...
        };
        const { data } = await axiosSecure.post("/menus/add", finalData);
        console.log(data, "menu added successfully");
        if (data.insertedId) {
          Toast.fire({
            icon: "success",
            title: `${formData.name} added successfully`,
          });
          reset();
          setProccesing(false);

        }
      }
    } catch (err) {
      console.log(err, "the error");
      setProccesing(false);
      Toast.fire({
        icon: "error",
        title: `${formData.name} failed to add`,
        text: err.message
      });
    }
    // ----------------------------
  };

  const [proccesing, setProccesing] = useState(false);
  if (proccesing) return <ProgrecBar/>;
  return (
    <div className="p-10">
      <SectionHeading
        heading={"add an item"}
        subHeading={"----whats new ---? "}
      />
      <div className="p-10 bg-[#F3F3F3] rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* flex used here  */}
          <div className="flex gap-5 items-center">
            <div className="form-control mb-5 w-1/2">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>

              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full"
                defaultValue={"default"}
              >
                <option disabled value={"default"}>
                  Select an item
                </option>

                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="dessert">Dessert</option>
                <option value="soup">Soup</option>
                <option value="popular">Popular</option>
                <option value="drinks">Drinks</option>
                <option value="offered">offered</option>
              </select>
            </div>

            <div className="form-control mb-5 w-1/2">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="text"
                placeholder="price"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control mb-5 w-1/2">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              type="text"
              placeholder="recipe"
              className="textarea textarea-bordered"
              required
            />
          </div>
          <div className="my-5">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <div className="">
            <button className="btn btn-outline capitalize">
              add item <FaUtensilSpoon />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
