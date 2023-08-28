import "./searchItem.css";
import { Link } from "react-router-dom";

function SearchItem() {
  return (
    <div className="searchItem">
      <img
        src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Central Breeze inn</h1>
        <span className="siDistance">2Km from main city</span>
        <span className="siTaxiOp">Affordable taxis and auto</span>
        <span className="siSubtitle">
          Enjoy the cool embrace of air-conditioning
        </span>
        <span className="siFeatures">
          • Big Balcony • 2 bathrooms • 2 Bedrooms • 1 Kitchen
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, So unlock a world of savings with our great deal
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">₹8450</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to="/hotels/booking">
            <button className="siCheckButton">Book now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
