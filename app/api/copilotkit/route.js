import { CopilotRuntime, GoogleGenerativeAIAdapter, copilotRuntimeNextJSAppRouterEndpoint } from "@copilotkit/runtime";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest } from 'next/server';

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

// Create the runtime
const runtime = new CopilotRuntime();

// Create the adapter with the Google Generative AI client
const llmAdapter = new GoogleGenerativeAIAdapter({
 genAI,
  model: "gemini-2.0-flash",
});

export const POST = async (req) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter: llmAdapter,
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};
// import {
//   CopilotRuntime,
//   OpenAIAdapter,
//   copilotRuntimeNextJSAppRouterEndpoint,
// } from "@copilotkit/runtime";

// import { NextRequest } from "next/server";

// const serviceAdapter = new OpenAIAdapter();
// const runtime = new CopilotRuntime();

// export const POST = async (req) => {
//   const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
//     runtime,
//     serviceAdapter,
//     endpoint: "/api/copilotkit",
//   });

//   return handleRequest(req);
// };