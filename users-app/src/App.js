import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/home/Home";
import AddEdit from "./components/addEdit/AddEdit";

// import Home from "./components/home/Home";
import ListUsers from "./components/listCard/ListCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListProfile from "./components/ListProfile/ListProfile";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/AddEdit" element={<AddEdit />} />
          <Route path="/ListUsers" element={<ListUsers />} />
          <Route path="/ListProfile" element={<ListProfile />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
