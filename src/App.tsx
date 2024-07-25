import "./global.css";
import { TodoWidget } from "@/examples/todo-app/widgets/todo-widget";

function App() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen p-4">
        <TodoWidget />
      </div>
    </>
  );
}

export default App;
