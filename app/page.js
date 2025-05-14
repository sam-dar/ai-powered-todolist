"use client"
import { TasksList } from "@/components/TasksList";
import { TasksProvider } from "@/lib/hooks/use-tasks";
import { CopilotPopup,CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import Navbar from "../components/Navbar";


export default function Home() {

  return (
    <main className="bg-white container mx-auto p-8 my-10 rounded-xl shadow-lg max-w-3xl">
        <TasksProvider>
          <TasksList />
        </TasksProvider>
        <CopilotPopup
        instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have."}
        labels={{
          title: "Popup Assistant",
          initial: "Need any help?",
        }}
      />
          {/* <CopilotSidebar
      defaultOpen={true}
      instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have."}
      labels={{
        title: "Sidebar Assistant",
        initial: "How can I help you today?",
      }} 
     > 
   </CopilotSidebar> */}

    </main>
  );
}
