import './App.css';
import SearchAppBar from './components/appbar/Appbar';
import Footer from './components/Footer/Footer';
import Content from './components/content/Content'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Error from './components/Error/Error';
//import Api from './components/Form/Api'

function App() {
  return (
    <div className='App'>
    <SearchAppBar/>
    <Router>
      <div className='content'>
           <Routes>
                 <Route exact path='/' element={<Home />}></Route>
                 <Route exact path='/productlist' element={<Content />}></Route>
                 <Route exact path='/addproduct' element={<Form />}></Route>
                 <Route exact path='/error' element={<Error />}></Route>
          </Routes>
          </div>
          <Footer/>
       </Router>
       </div>
  );
}

export default App;
