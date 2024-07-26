import "./global.css";
import { TodoWidget } from "@/examples/todo-app/widgets/todo-widget";

function App() {
  return (
    <>
      <div className="flex sm:items-center justify-center w-full sm:h-screen sm:p-4">
        <TodoWidget />
      </div>
    </>
  );
}

export default App;
