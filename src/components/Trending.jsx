import Card from "./Card";

const data = [
  {
    id: 1,
    img1: "https://images.pexels.com/photos/10651445/pexels-photo-10651445.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/13420536/pexels-photo-13420536.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Lorem ipsum dolor sit amet.",
    isNew: true,
    oldPrice: 18,
    price: 12,
  },
  {
    id: 2,
    img1: "https://images.pexels.com/photos/2853909/pexels-photo-2853909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/1837158/pexels-photo-1837158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Lorem ipsum dolor sit amet.",
    isNew: true,
    oldPrice: 21,
    price: 14,
  },
  {
    id: 3,
    img1: "https://images.pexels.com/photos/2698480/pexels-photo-2698480.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/8812794/pexels-photo-8812794.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Lorem ipsum dolor sit amet.",
    isNew: false,
    oldPrice: 16,
    price: 10,
  },
  {
    id: 4,
    img1: "https://images.pexels.com/photos/12079718/pexels-photo-12079718.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/4127941/pexels-photo-4127941.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Lorem ipsum dolor sit amet.",
    isNew: false,
    oldPrice: 18,
    price: 13,
  },
];

const Trending = () => {
  return (
    <div className="trending">
      <div className="container mx-auto py-20 flex flex-col gap-10">
        <div className="top flex justify-between items-center">
          <h2 className="uppercase text-2xl font-bold tracking-widest flex-1">
            Trending Products
          </h2>
          <p className="flex-[2] text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            excepturi dolorem architecto nobis officiis sunt alias, minus
            delectus ipsa nisi autem, voluptatem quo quaerat voluptas
            doloremque. Eius consequatur atque voluptates.
          </p>
        </div>
        <div className="bottom flex justify-center gap-10">
          {data.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
