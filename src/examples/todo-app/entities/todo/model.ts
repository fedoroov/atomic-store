import { atom, computed, log } from "@/packages/store/atom";
import { __todos__ } from "./__mocks__";

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

const todos = atom<Todo[]>([]);
const loading = atom(false);
const error = atom<string | null>(null);
const selectedTodo = atom<Todo | null>(null);

const uncompletedTodos = computed(todos, (currentTodos) =>
  sortByPriority(currentTodos.filter((todo) => !todo.completed))
);

const completedTodos = computed(todos, (currentTodos) =>
  currentTodos.filter((todo) => todo.completed)
);

const fetchTodos = async () => {
  loading.set(true);

  await new Promise((resolve) => setTimeout(resolve, 1500));

  try {
    todos.set(__todos__);
  } catch (err) {
    error.set(err as string);
  } finally {
    loading.set(false);
  }
};

todos.onMount(() => {
  fetchTodos();
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
