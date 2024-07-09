import RecipeCompo from '../RecipeCompo/RecipeCompo';
import Cover from '../Shared/Cover';

const Menus = ({coverData,recipeData}) => {
  return (
    <div className='flex flex-col gap-5'>
      <Cover {...coverData} />
      <RecipeCompo recipeData={recipeData}/>
    </div>
  );
};

export default Menus;
