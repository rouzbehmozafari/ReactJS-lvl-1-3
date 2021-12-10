import './App.css';
import toDo from './Databank';
import Databank from './Databank';
import ToDoList from './ToDoList';


console.log(toDo.list)
function App() {
  return (
    <div className="App">
      <h1>To do list</h1>
      <ToDoList imgSrcB={toDo.images.check} li1={toDo.list[0]} imgSrcA={toDo.images.gym} />
      <ToDoList li1={toDo.list[1]} />
      <ToDoList li1={toDo.list[2]} />
    </div>
  );
}

export default App;
