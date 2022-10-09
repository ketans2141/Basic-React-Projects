import { Login } from './components/Login';
import { Register } from './components/Register';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { WelcomePage } from './components/WelcomePage';

function App() {
  return (
   <>
    <BrowserRouter>
          <Routes>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/welcome' element={<WelcomePage/>}/>
          </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
