import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar/NavBar';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <Router>
          <Routes/>
         
        </Router>
        
      
       
      </header>
    </div>
  );
}

export default App;
