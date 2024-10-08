import useGetMenuData from "../../Hooks/useGetMenuData";
import SectionHeading from "../SectionHeading";
import FoodCard from "./RecommendationCard";

const Recommendation = () => {
  const { menus, isLoading, error } = useGetMenuData();
  if (isLoading) return <progress className="progress w-56"></progress>;
  if(error) return <h2>data not found</h2>

  function getRandomValues(arr, num) {
    let array = arr.slice();

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.slice(0, num);
  }

  const randomData = getRandomValues(menus, 3);

  return (
    <div>
      <SectionHeading
        heading="chef Recommends"
        subHeading="- - - should try- - - "
      />
      <div className="flex flex-col md:flex-row items-stretch gap-5  ">
        {randomData.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
