import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth, NavBar, Login, Home, Search, Admin, Error} from "./pages";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
 

      <Auth />
      <div className="container">
        <NavBar />
        <Routes>
          <Route element={<Search />} path="/busqueda" />
          <Route element={<Login />} path="/" />
          <Route element={<Admin/>} path="/admin" /> 
         <Route element={<Error/>} path="*" /> 
        </Routes>
      </div>
      <Toaster
        toastOptions={{
          style: {
            borderRadius: "50px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </Router>

    
  );
}

export default App;
