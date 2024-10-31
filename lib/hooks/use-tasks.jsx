import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";
import { createContext, useContext, useState } from "react";
import { defaultTasks } from "../default-tasks";

let nextId = defaultTasks.length + 1;

const TasksContext = createContext(undefined);
const TaskStatus = {
  done: 'done',
  todo: 'todo'
};

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(defaultTasks);

  useCopilotReadable({
    description: "The state of the todo list",
    value: JSON.stringify(tasks),
  });

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


  useCopilotAction({
    name: "addTask",
    description: "Adds a task to the todo list",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "The title of the task",
        required: true,
      },
    ],
    handler: ({ title }) => {
      addTask(title);
    }
  });
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


  useCopilotAction({
    name: "deleteTask",
    description: "Deletes a task from the todo list",
    parameters: [
      {
        name: "id",
        type: "number",
        description: "The id of the task",
        required: true,
      },
    ],
    handler: ({ id }) => {
      deleteTask(id);
    }
  });

  useCopilotAction({
    name: "setTaskStatus",
    description: "Sets the status of a task",
    parameters: [
      {
        name: "id",
        type: "number",
        description: "The id of the task",
        required: true,
      },
      {
        name: "status",
        type: "string",
        description: "The status of the task",
        enum: Object.values(TaskStatus),
        required: true,
      },
    ],
    handler: ({ id, status }) => {
      setTaskStatus(id, status);
    }
  });

  const addTask = (title) => {
    console.log("add task called")   
     setTasks([...tasks, { id: nextId++, title, status: TaskStatus.todo }]);
  };

  const setTaskStatus = (id, status) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  
  return (
    <TasksContext.Provider value={{ tasks, addTask, setTaskStatus, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};
