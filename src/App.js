
import './App.css';
import Landingpage from './components/Landingpage';
import {
  Routes,
  Route,
} from "react-router-dom";
import Upload from './components/Upload';

function App() {
  return (
    <>
    <Routes>
    <Route path ="/" element = {<Landingpage/>}/>
    <Route path ="/Upload" element = {<Upload/>}/>

    </Routes>
    </>
  );
}

export default App;
