import NumberInputField from "./components/NumberInputField";
import TaskManager from "./components/TaskManager";

const App = () => {
 

  return (
    <div className="container mx-auto flex flex-col gap-4 mt-14">
      <NumberInputField></NumberInputField>
      <TaskManager></TaskManager>
    </div>
  );
};

export default App;
