import Routers from "./routes/Routers";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Routers></Routers>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
