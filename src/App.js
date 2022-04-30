import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainContent from './Components/Main/Main';
import Dialogs from './Components/Dialogs/Dialogs';
import Layout from './Components/Layout';
import Home from './Components/Home/Home';
import Test from './Components/TestComponent/TestComponent';

function App() {

  let postsData = [
    {id:1, author: "Bengamin Button", likes: 3, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"},
    {id:2, author: "Markus Tied", likes: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"},
    {id:3, author: "Frank Movent", likes: 7, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit!"}
  ]

  let dialogData = [
    {dLink: 1, contactName: "User Profile Name"},
    {dLink: 2, contactName: "Marianna Gerasimova"},
    {dLink: 3, contactName: "Alexandr Nedovesov"}
  ]

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Home text="Welcome" />} />
            <Route path="posts" element={<MainContent data={postsData} />} />
            <Route path="dialogs" element={<Dialogs data={dialogData} />} />
            <Route path="fake" element={<Test />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
