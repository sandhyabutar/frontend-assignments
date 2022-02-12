import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";



function App() {
  let myVariable = 345;
  let todos = [
    {
      sno:1,
      title:"go to the market ",
      desc: "for shopping"
    },
    {
      sno:2,
      title:"go to the school ",
      desc: "for study"
    },
    {
      sno:3,
      title:"go to the ghat ",
      desc: "for bath"
    },
  ]
  return (
  <>
   <Header title={45} />
   <Todos todos={todos}/>
   <Footer/> 
  </>
  
  );
}

export default App;
