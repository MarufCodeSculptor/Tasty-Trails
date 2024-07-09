import useGetMenuData from '../../Hooks/useGetMenuData';
import SectionHeading from '../SectionHeading';
import RecommendationCard from './RecommendationCard';

const Recommendation = () => {
  const data = useGetMenuData();

  function getRandomValues(arr, num) {
    let array = arr.slice();

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.slice(0, num);
  }
  const randomData = getRandomValues(data, 3);
  console.log(randomData,'from randomData');

  return (
    <div>
      
      <SectionHeading
        heading="chef Recommends"
        subHeading="- - - should try- - - "
      />
      <div className='grid grid-cols-1 md:grid-cols-3'>
        {randomData.map(item => (
          <RecommendationCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
