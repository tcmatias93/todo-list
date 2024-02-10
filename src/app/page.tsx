import TodoList from "@/components/TodoList";
import AddTask from "@/components/addTask";


export default function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="flex flex-col text-center my-5 gap-4">
        <h1 className=" text-2xl font-medium">Todo list</h1>
        <AddTask />
      </div>
      <TodoList />
    </main>
  );
}
