import RecipeCompo from "../../../Components/RecipeCompo/RecipeCompo";
import SectionHeading from "../../../Components/SectionHeading";
import useGetMenuData from "../../../Hooks/useGetMenuData";

const Menu = () => {
  const { menus, isLoading, error } = useGetMenuData();
  if (isLoading) return <progress className="progress w-56"></progress>;
  if (error) return <h2>data not found</h2>;

  const popularItems = menus?.filter((item) => item.category === "popular");

  return (
    <section className="my-10">
      <SectionHeading heading={"From our menu"} subHeading={"check it out"} />
      <RecipeCompo recipeData={popularItems} button={"View full menu"} />
    </section>
  );
};

export default Menu;
