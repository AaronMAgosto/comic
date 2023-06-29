import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

function App() {
  return (
     <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={ <Home /> }/>
     </Routes>
    </BrowserRouter>
     </>
  );
}
export default App;
