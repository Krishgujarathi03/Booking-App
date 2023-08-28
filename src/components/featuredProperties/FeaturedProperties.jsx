import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1567552379232-c32f3d41d353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGx1eHVyeSUyMGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Serene Haven Suites</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from ₹9600</span>
        <div className="fpRating">
          <button>8.9</button>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwaG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Opulent Oasis Hotel</span>
        <span className="fpCity">Bengaluru</span>
        <span className="fpPrice">Starting from ₹11200</span>
        <div className="fpRating">
          <button>9.3</button>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Tranquil Horizon Inn</span>
        <span className="fpCity">Pune</span>
        <span className="fpPrice">Starting from ₹7920</span>
        <div className="fpRating">
          <button>8.7</button>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Central Breeze Inn</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from ₹8450</span>
        <div className="fpRating">
          <button>8.9</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
