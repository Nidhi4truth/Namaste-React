import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState } from 'react';
const Body = () => {
//Local state variable - Super powerful variable
const [listOfRestaurants,setListOfRestaurants] = useState(resList);

    return (
      <div className="body">
        <div className="filter">
          <button className='filter-btn'
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            )
            setListOfRestaurants(filteredList);
          }}
          >Top Rated Restaurants</button>
        </div>
        <div class="resContainer">
        {
          listOfRestaurants.map(res => <RestaurantCard key={res.data.id} resObj={res} />)
        }

        </div>
      </div>
    );
  };

  export default Body;