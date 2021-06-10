import logo from './utils/images/logo.svg';
import './App.css';
import Title from './components/Title';
import Todo from './components/Todo';
import Cuerpo from './components/Cuerpo';
import Footer from './components/Footer';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <div className="App">
    <GlobalStyles />
    <Title />  
   <Todo />
   <Cuerpo />
   <Footer />
     
    </div>
  );
}

export default App;
