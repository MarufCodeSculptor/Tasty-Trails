import RecipeCompo from '../../Components/RecipeCompo/RecipeCompo';
import SectionHeading from '../../Components/SectionHeading';
import useGetMenuData from '../../Hooks/useGetMenuData';

const MenusHeading = () => {
  const { menus:recipesAll, isLoading, error } = useGetMenuData();
  if (isLoading) return <progress className="progress w-56"></progress>;
  if (error) return <h2>data not found</h2>;
  const shortedRecipies = recipesAll.slice(0, 4);

  return (
    <div className="md:my-20">
      <SectionHeading
        heading="todays's offer "
        subHeading="- - -don't miss - - -"
      />
      <RecipeCompo recipeData={shortedRecipies} />
    </div>
  );
};

export default MenusHeading;
