import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainContent from './Components/Main/Main';
import Dialogs from './Components/Dialogs/Dialogs';
import Layout from './Components/Layout';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Home text="welcome!" />} />
            <Route path="posts" element={<MainContent />} />
            <Route path="dialogs" element={<Dialogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
