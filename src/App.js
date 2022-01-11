import './App.css';
import Header from './components/Header/Header';
import Main from "./components/Main/Main"
import Sidebar from './components/Sidebar/Sidebar';



function App() {
  return(
    <div className='App'>
        <>
          <Header />
          <Main />
          <Sidebar />
        </>
    </div>
  )
}

export default App;
