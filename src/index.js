import ReactDOM from "react-dom/client";
import "./static/global.scss";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="screen">
      <Navbar />
      <h1>404</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
