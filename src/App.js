import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/sidebar';
import Property from './components/property';

function App() {
  return (
    <div className="App" id="outer-container">
     <SideBar />
     <div id="page-wrap">
      <header className="App-header">
      <div className="flex-container header-button">
      <div className= "flex-child" >
      <button className="login-button" onClick="">Login</button>
      </div>
      <div className= "flex-child" >
      <button className="signup-button" onClick="">Sign Up</button>
      </div>
      </div>
      </header>
      
       <Property />
       </div>
    </div>
  );
}

export default App;
