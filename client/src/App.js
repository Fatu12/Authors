import './App.css';
import { AuthorForm } from './components/AuthorForm';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import DisplayAll from './components/DisplayAll';
import UpdateAuthors from './components/UpdateAuthors';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        < Route path ="/author/new" element ={< AuthorForm/>} />
           <Route path = "/" element ={ < DisplayAll /> } />       
          < Route path = "/edit/:id"  element= {< UpdateAuthors />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
