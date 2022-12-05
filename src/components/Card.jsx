import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="card w-80 flex flex-col gap-2">
        <div className="images w-full h-96 relative group">
          {item.isNew && (
            <span className="absolute z-[3] uppercase text-sm font-semibold tracking-widest bg-white text-rose-500 py-1 px-3 top-2 left-2">
              New Arrival
            </span>
          )}
          <img
            src={item.img1}
            alt={item.title}
            className="image-1 w-full h-full object-cover absolute z-[1]"
          />
          <img
            src={item.img2}
            alt={item.title}
            className="image-2 w-full h-full object-cover absolute group-hover:z-[2]"
          />
        </div>
        <h2 className="text-lg">{item.title}</h2>
        <div className="prices flex gap-3 text-lg">
          <h3 className="text-gray-500 line-through">${item.oldPrice}</h3>
          <h3 className="text-rose-500 font-semibold">${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
