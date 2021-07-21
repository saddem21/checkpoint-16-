import logo from './logo.svg';
import './App.css';
import ProfilePhoto from "../src/Component/Profile/ProfilePhoto";
import FullName from "../src/Component/Profile/FullName";
import Adress from "../src/Component/Profile/Adress";

function App() {
  return (
    <div className="App">
    <ProfilePhoto/>
    <FullName/>
    <Adress/>
    </div>
  );
}

export default App;
