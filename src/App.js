import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainContent from './Components/Main/Main';
import Dialogs from './Components/Dialogs/Dialogs';
import Layout from './Components/Layout';
<<<<<<< Updated upstream
=======
import Home from './Components/Home/Home';
import Test from './Components/TestComponent/TestComponent';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="posts" element={<MainContent />} />
            <Route path="dialogs" element={<Dialogs />} />
            <Route path="fake" element={<Test />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
