import logo from './react-logo.png';
import './App.css';

function App() {
  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Fun Facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has Well over 100k stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>

    </div>
  );
}

export default App;
