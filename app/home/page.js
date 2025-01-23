import { ThreeDCardDemo } from "../../components/ThreeDCard";
import "../../styles/global.css";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-column items-center">
        <ThreeDCardDemo />
      </div>
    </div>
  );
};

export default Home;
