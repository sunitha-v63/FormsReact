
import './App.css';
import FocusForm from './Components/FocusForm';
import MultiFieldForm from './Components/MultiFieldForm';
import Task1 from './Components/Task1';
import Task2 from './Components/Task2';
import Task3 from './Components/Task3';
import Task4 from './Components/Task4';
import Task5 from './Components/Task5';

function App() {
  return (
   <>
   <h3>Forms in React</h3>
   <Task1/>
   <Task2/>
   <Task3/>
   <Task4/>
   <Task5/>
   <MultiFieldForm/>
   <FocusForm/>
   </>
  );
}

export default App;
