import ReactDOM from 'react-dom/client';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css
import '../styles/index.css';


import SecondsCounter from './components/SecondCounter';


let counter = 0;

const renderCounter = () => {
  counter++;
  ReactDOM.createRoot(document.getElementById('root')).render(
    <SecondsCounter seconds={counter} />
  );
};


const startCounter = () => {
  setInterval(() => {
    renderCounter();
  }, 1000);
};

const App = () => {
  startCounter();
  return <SecondsCounter seconds={counter} />;
};


ReactDOM.createRoot(document.getElementById('root')).render(<App />);