import MenuItem from '../../pages/Shared/Menu/MenuItem';

const RecipeCompo = ({ recipeData }) => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center">
          {recipeData.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCompo;
