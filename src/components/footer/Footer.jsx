import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Hotels</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Homes</li>
          <li className="fListItem">Apartments</li>
          <li className="fListItem">Resorts</li>
          <li className="fListItem">Guest houses</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Unique places to stay </li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Travel communities </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Car rental</li>
          <li className="fListItem">Restaurant booking</li>
          <li className="fListItem">Travel Agents </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Terms & conditions</li>
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Safety Resource Center</li>
        </ul>
      </div>
      <div className="fText">
        Copyright © 2023 by Krish. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
