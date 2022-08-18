import { Toaster } from "react-hot-toast";
import Search from "./components/Search";
import Emoji from "./components/Emoji";
import "./styles/main.css";

function App() {
  return (
    <div className="main-container">
      <Toaster position="top-right" />
      <div className="top">
        <h1 className="title">✂️ Copy and 📋 Paste Emoji 👍 </h1>
        <Search />
        <p>Click for copy to clipboard!</p>
      </div>
      <Emoji />
    </div>
  );
}

export default App;