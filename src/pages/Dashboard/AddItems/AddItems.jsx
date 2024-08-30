import { FaUtensilSpoon } from "react-icons/fa";
import SectionHeading from "../../../Components/SectionHeading";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="p-10" >
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
              {...register("name")}
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
                {...register("category")}
                className="select select-bordered w-full"
              >
                <option disabled selected>
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
                {...register("price")}
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
              {...register("details")}
              type="text"
              placeholder="details"
              className="textarea textarea-bordered"
              required
            />
          </div>
          <div className="my-5">
            <input type="file" className="file-input w-full max-w-xs" />
          </div>

          <div className="">
            <button className="btn btn-outline capitalize"> add item <FaUtensilSpoon/> </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
