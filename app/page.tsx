import Meetings from "./components/meetings";
import { Toaster } from "@/components/ui/sonner";

const Home = () => {
  return (
    <div>
      <Toaster />
      <Meetings/>
    </div>
  );
}
export default Home