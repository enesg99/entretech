import Navbar from "./components/navbar";
import "./App.css"
import Homepage from "./pages/Homepage";
import Trackpage from "./pages/Trackpage";
import WebdevPath from "./pages/WebdevPath";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebdevBasics from "./pages/Webdev/Basics";
import WebdevHtml from "./pages/Webdev/Html";
import WebdevCss from "./pages/Webdev/Css";
import WebdevJavascript from "./pages/Webdev/Javascript";

function App() {
  return (
    <BrowserRouter basename="/entretech">
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" index element={<Homepage />} />
        <Route path="/tracks" element={<Trackpage />} />
        <Route path="/tracks/webdevpath" element={<WebdevPath />} />
        <Route path="/tracks/webdevpath/basics" element={<WebdevBasics />} />
        <Route path="/tracks/webdevpath/html" element={<WebdevHtml />} />
        <Route path="/tracks/webdevpath/css" element={<WebdevCss />} />
        <Route path="/tracks/webdevpath/javascript" element={<WebdevJavascript />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;