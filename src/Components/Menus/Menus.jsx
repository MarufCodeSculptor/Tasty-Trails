import RecipeCompo from '../RecipeCompo/RecipeCompo';
import Cover from '../Shared/Cover';

const Menus = ({coverData,recipeData,button}) => {
  console.log(button,'fucken buttons');
  return (
    <div className='flex flex-col gap-5'>
      <Cover {...coverData} />
      <RecipeCompo recipeData={recipeData} button={button}/>
    </div>
  );
};

export default Menus;
