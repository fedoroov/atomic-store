import { atom, computed, log, withLocalStorage } from "@/packages/store/atom";

const TODOS_KEY = "todos";

export type TPriority = "low" | "medium" | "high";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  priority: TPriority;
  description?: string;
};

const sortByPriority = (todos: Todo[]) => {
  const priorityOrder = { high: 1, medium: 2, low: 3 };

  return todos.sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );
};

const todos = withLocalStorage(TODOS_KEY, atom<Todo[]>([]));
const loading = atom(false);
const error = atom<string | null>(null);
const selectedTodo = atom<Todo | null>(null);

const uncompletedTodos = computed(todos, (currentTodos) =>
  sortByPriority(currentTodos.filter((todo) => !todo.completed))
);

const completedTodos = computed(todos, (currentTodos) =>
  currentTodos.filter((todo) => todo.completed)
);

todos.onMount(() => {
  console.log("Todos on mount");
});

log(todos, (currentTodos) => {
  console.log("todos:", currentTodos);
});

export const todoModel = {
  todos,
  loading,
  error,
  selectedTodo,
  uncompletedTodos,
  completedTodos,
};
