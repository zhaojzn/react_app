import './App.css';
import logo from './logo.png';

const App = () => {

  return (
    <div className="App">
      <div class="header">
        <p1 class = "corner">Work</p1>
        <p1 class = "corner">About</p1>
      </div>
      <div class="content">
        <h1 class ="contentText">Hello, I'm Jason.
        <h1 class="contentText">I am a student.</h1>
        </h1>
        <p1 class="contentPara">I am a student at Point Grey Secondary school</p1>
        <img class="image" src={logo} alt="Logo"></img>
      </div>
    </div>

  );
  
}
export default App;
