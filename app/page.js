"use client"
import { TasksList } from "@/components/TasksList";
import { TasksProvider } from "@/lib/hooks/use-tasks";
import { CopilotPopup,CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import Navbar from "../components/Navbar";


export default function Home() {
  // const [todos, setTodos] = useState([]);
  // const [newTodo, setNewTodo] = useState("");

  //  // Define Copilot action
  //  useCopilotAction({
  //   name: "addTodoItem",
  //   description: "Add a new todo item to the list",
  //   parameters: [
  //     {
  //       name: "todoText",
  //       type: "string",
  //       description: "The text of the todo item to add",
  //       required: true,
  //     }
  //   ],
  //   handler: async ({ todoText }) => {
  //     addTodo(todoText);
  //   },
  // });

  //    // Define Copilot action
  //    useCopilotAction({
  //     name: "deleteTodoItem",
  //     description: "Delete a new todo item from the list",
  //     parameters: [
  //       {
  //         name: "todoIndex",
  //         type: "number",
  //         description: "The index of the todo item to delete",
  //         required: true,
  //       }
  //     ],
  //     handler: async ({ todoIndex }) => {
  //       deleteTodo(todoIndex);
  //     },
  //   });

  // // Function to handle adding new todo
  // const addTodo = (todoText) => {
  //   if (todoText.trim() !== "") {
  //     setTodos([...todos, todoText]);
  //     setNewTodo(""); // Clear input after adding
  //   }
  // };

  // // Function to handle deleting todo
  // const deleteTodo = (indexToDelete) => {
  //   setTodos(todos.filter((_, index) => index !== indexToDelete));
  // };

  return (
    <main className="bg-white container mx-auto p-8 my-10 rounded-xl shadow-lg max-w-3xl">
        <TasksProvider>
          <TasksList />
        </TasksProvider>
        {/* <CopilotPopup
        instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have."}
        labels={{
          title: "Popup Assistant",
          initial: "Need any help?",
        }}
      /> */}
          <CopilotSidebar
      defaultOpen={true}
      instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have."}
      labels={{
        title: "Sidebar Assistant",
        initial: "How can I help you today?",
      }}
    >
    </CopilotSidebar>

    </main>
  );
}
