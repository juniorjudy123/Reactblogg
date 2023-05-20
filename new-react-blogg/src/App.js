import Navbar from "./components/navbar/Navbar";
import Write from "./Pages/write/Write"
import Settings from "./Pages/settings/Settings";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Home from "./Pages/Home/Home"
import Single from "./Pages/single/Single"
import { Routes, Route } from "react-router-dom";



function App() {
  const user = false

  return (
    <> <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />

      </Routes>


    </>
  );
}

export default App;
