import { Link } from "react-router-dom";
import MenuItem from "../../pages/Shared/Menu/MenuItem";

const RecipeCompo = ({ recipeData, button }) => {
  const singleItem = recipeData[0];
  if (!recipeData.length)
    return (
      <div className="bg-red-500 p-5 text-white font-bold uppercase text-center rounded-lg">
        error from server
      </div>
    );

  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center">
          {recipeData?.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
        {button && (
          <div className="flex items-center justify-center">
            <Link
              to={`/order/${singleItem?.category}`}
              className="btn mt-2 bg-transparent outline-none border-0 border-b-4 border-gray-300  hover:text-blue-600 hover:bg-transparent"
            >
              {button}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCompo;
