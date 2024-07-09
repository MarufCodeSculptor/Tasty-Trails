import FoodCard from "../Recommendation/RecommendationCard";

const CatagoriesContainer = ({catagoriesData}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-5  ">
      {catagoriesData.map(item => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default CatagoriesContainer;
