import Card from "../Card/Card";
import "./Featured.scss";

const data = [
  {
    id: 1,
    img1: "https://images.pexels.com/photos/1475418/pexels-photo-1475418.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/1852300/pexels-photo-1852300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Lorem ipsum dolor sit amet.",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2,
    img1: "https://images.pexels.com/photos/2692554/pexels-photo-2692554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/2005744/pexels-photo-2005744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Lorem ipsum dolor sit amet.",
    isNew: false,
    oldPrice: 26,
    price: 14,
  },
  {
    id: 3,
    img1: "https://images.pexels.com/photos/2323094/pexels-photo-2323094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/2330152/pexels-photo-2330152.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Lorem ipsum dolor sit amet.",
    isNew: true,
    oldPrice: 18,
    price: 16,
  },
  {
    id: 4,
    img1: "https://images.pexels.com/photos/1925135/pexels-photo-1925135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/1921947/pexels-photo-1921947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Lorem ipsum dolor sit amet.",
    isNew: false,
    oldPrice: 25,
    price: 18,
  },
];

const Featured = ({ type }) => {
  return (
    <div className="featured">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          dolores sed ipsum dolor recusandae ad magnam sint ipsam, iure eum sit
          fuga, facilis maxime ex possimus quidem quas earum perspiciatis?
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
