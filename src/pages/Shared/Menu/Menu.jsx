import RecipeCompo from '../../../Components/RecipeCompo/RecipeCompo';
import SectionHeading from '../../../Components/SectionHeading';
import useGetMenuData from '../../../Hooks/useGetMenuData';

const Menu = () => {
  const data = useGetMenuData();
  console.log(import.meta.env.VITE_BASE_URL,'fucken menu data');
  const popularItem = data?.filter(item => item.category === 'popular');
  return (
    <section className="my-10">
      <SectionHeading heading={'From our menu'} subHeading={'check it out'} />
      <RecipeCompo recipeData={popularItem} button={"View full menu"}/>
    </section>
  );
};

export default Menu;
