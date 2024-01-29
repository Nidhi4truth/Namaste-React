import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resObj }) => {
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + resObj.data.cloudinaryImageId} />
      <h5>{resObj.data.name}</h5>
      <h5>{resObj.data.cuisines.join(",")}</h5>
      <h5>{resObj.data.avgRating} stars</h5>
      <h5>{resObj.data.costForTwo / 100} FOR TWO</h5>
      <h5>{resObj.data.deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
