
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Notes from "./pages/notes/Notes";
function App() {

  const Layout=()=>{
    return(
      <div>
        <Navbar/>
        <div>
          <Outlet/>
        </div>
      </div>
    )
  }

  const ProtectedRoute=({children})=>{
   let currentUser=true;

   if(!currentUser){
     return <Navigate to="/login"/>
   }
   return children;
  }

  const router=createBrowserRouter([
    {
      path:"/",
      element:<ProtectedRoute><Layout/></ProtectedRoute>,
      children:[
       {
         path:"/",
        element:<Home/>
       },
       {
         path:"/notes/:id",
        element:<Notes/>
       },
      ]

    },
    {
      path: "/login",
      element:<Login/>,
    },
    {
      path: "/register",
      element:<Register/>
    }
  ])
  return (
    <div className="App">
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
