import './App.css';
import SideBar from './components/sidebar';
import Property from './components/property';
function handleClick(){
    console.log('button clicked');
}
function App() {
  return (
    <div className="App" id="outer-container">
     <SideBar />
     <div id="page-wrap">
      <header className="App-header">
      <div className="flex-container header-button">
      <div className= "flex-child" >
      <button className="login-button" onClick={handleClick()}>Login</button>
      </div>
      <div className= "flex-child" >
      <button className="signup-button" onClick={handleClick()}>Sign Up</button>
      </div>
      </div>
      </header>
      
       <Property />
       </div>
    </div>
  );
}

export default App;
