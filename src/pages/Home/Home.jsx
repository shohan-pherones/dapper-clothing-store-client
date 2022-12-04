import Featured from "../../components/Featured/Featured";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Featured type="featured" />
      <Featured type="trending" />
    </div>
  );
};

export default Home;
