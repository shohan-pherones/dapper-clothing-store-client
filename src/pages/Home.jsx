import Slider from "../components/Slider";
import Trending from "../components/Trending";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Trending />
      <Categories />
    </div>
  );
};

export default Home;
