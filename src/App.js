// import logo from './logo.svg';
import './App.css';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Main from './Components/Main/Main';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import Platform from './Components/Platform/Platform';
import Notfound from './Components/Notfound/Notfound';
import Pcgames from './Components/Gamesapp/Pcgames';
import Browsergames from './Components/Gamesapp/Browsergames';
import ReleasedDate from './Components/Gamesapp/ReleasedDate';
import Alphabetical from './Components/Gamesapp/Alphabetical';
import Relevance from './Components/Gamesapp/Relevance';
import Shooter from './Components/Gamesapp/Shooter';
import Racing from './Components/Gamesapp/Racing';
import Sports from './Components/Gamesapp/Sports';
import Action from './Components/Gamesapp/Action';
import Openworld from './Components/Gamesapp/Openworld';
import Flight from './Components/Gamesapp/Flight';
import Fantasy from './Components/Gamesapp/Fantasy';
import Popularity from './Components/Gamesapp/Popularity';


const router = createBrowserRouter([
  { path: ''  , element: <Main/> , children: [
    { path:'' , element: <Login/> },
    { path:'home' , element: <Home/> },
    { path:'login' , element: <Login/> },
    { path:'register' , element: <Register/> },
    { path:'pc' , element: <Pcgames/> },
    { path:'platform' , element: <Platform/> },
    { path:'browser' , element: <Browsergames /> },
    { path:'released-date' , element: <ReleasedDate /> },
    { path:'alphabetical' , element: <Alphabetical/> },
    { path:'relevance' , element: <Relevance/> },
    { path:'popularity' , element: <Popularity/> },
    { path:'racing' , element: <Racing/> },
    { path:'sports' , element: <Sports/> },
    { path:'open-world' , element: <Openworld/> },
    { path:'flight' , element: <Flight/> },
    { path:'fantasy' , element: <Fantasy/> },
    { path:'sports' , element: <Sports/> },
    { path:'action' , element: <Action/> },
    { path:'shooter' , element: <Shooter/> },
    { path:'*' , element: <Notfound/> },
  ]}

])



function App() {

  
  return <>
  
    < RouterProvider router={router}/>
  
  </>
}

export default App;
