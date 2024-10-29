import "./App.css";
import Header from "./Header";
import Layout from "./Layout";
import Post from "./Post";
import IndexPage from "./pages/IndexPage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      {/* <Route index element={<Post />} /> */}
      {/* <Route path={"/login"} element={<div>Login Page</div>} /> */}
      {/* </Route> */}
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
