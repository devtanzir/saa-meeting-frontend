import { ToastContainer } from "react-toastify";
import Meetings from "./components/meetings";

const Home = () => {
  return (
    <div>
      <ToastContainer />
      <Meetings/>
    </div>
  );
}
export default Home