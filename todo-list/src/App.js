import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue } from "./features/inputSlice";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>To Do List</h1>
      <input
        type="text"
        place="Add a todo"
        onChange={(e) => {
          dispatch(setInputValue(e.target.value));
          
        }}
      />
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
