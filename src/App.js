
import './App.css';
import Home from './home.jsx';
import Chart from './Chart';
import "./style.css";

function App() {
  return (
  <>
  <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
  <div className="outer-container">
      <div className="rectangle">
        <Home/>
      </div>
      <div className="container">
        <Chart />
      </div>
    </div>
    </>
  );
}

export default App;
