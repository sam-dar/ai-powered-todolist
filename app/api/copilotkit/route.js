import {
    CopilotRuntime,
    GoogleGenerativeAIAdapter,
    copilotRuntimeNextJSAppRouterEndpoint,
  } from '@copilotkit/runtime';
  import { NextRequest } from 'next/server';
  const { GoogleGenerativeAI } = require("@google/generative-ai");
  // const genAI = new GoogleGenerativeAI(process.env["GOOGLE_API_KEY"]);
    const genAI = new GoogleGenerativeAI("AIzaSyDaUCmSj37GGtFuPMox4hvTso_XADrSBoE");

  

 const runtime = new CopilotRuntime();
  
   const model = genAI.getGenerativeModel({
    model: "gemini-pro"
 });
  
   const serviceAdapter = new GoogleGenerativeAIAdapter({ model });
  
   
//   const genAI = new GoogleGenerativeAI({ apiKey: process.env.GOOGLE_API_KEY });
// const serviceAdapter = new GoogleGenerativeAIAdapter({
//   model: "gemini-1.5-pro",
//   generativeAI: genAI
// });
  
//   const runtime = new CopilotRuntime();
   
export const POST = async (req) => {
  try {
    const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
      runtime,
      serviceAdapter,
      endpoint: '/api/copilotkit',
    });
    console.log("success getting response:");

    return await handleRequest(req);
  } catch (error) {
    console.error("Error getting response:", error);
    return new Response("Error handling request", { status: 500 });
  }
};
// CopilotRuntime,
// OpenAIAdapter,
// copilotRuntimeNextJSAppRouterEndpoint,
// } from '@copilotkit/runtime';
// import OpenAI from 'openai';
// import { NextRequest } from 'next/server';

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
// const serviceAdapter = new OpenAIAdapter({ openai });
// const runtime = new CopilotRuntime();

// export const POST = async (req) => {
// const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
//   runtime,
//   serviceAdapter,
//   endpoint: '/api/copilotkit',
// });

// return handleRequest(req);
// };