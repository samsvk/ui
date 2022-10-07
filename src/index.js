import ReactDOM from "react-dom/client";
import "./static/global.scss";
import Navbar from "./components/navbar";
import Title from "./components/title";

function App() {
  return (
    <div className="wrap">
      <Navbar />
      <Title title={"Football"} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
