// about.jsx
"use client";

import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
          About Our AI-Powered Task Manager
        </h1>
        <p className="text-gray-600 text-lg text-center mb-8">
          Seamless productivity at your fingertips, powered by Copilot Kit.
        </p>

        <section className="space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            Our Task Manager makes organizing your tasks a breeze. Effortlessly
            add, delete, or update the status of each task to mark it as &quot;done&quot; or
            &quot;todo&quot; — all from a single, intuitive platform.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            But that&apos;s not all: with Copilot&apos;s intelligent assistance, you can
            manage tasks using simple, natural language. Need to add tasks for the
            week? Just ask! For example, say &quot;Add tasks for seven days of the week
            to make dinner, one for each day,&quot; and watch as Copilot creates
            separate tasks for each day. 
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Want to tidy up your list? Use prompts like &quot;Delete task (ID)&quot; to
            remove specific tasks instantly. With these AI-powered features, you
            can enjoy a more organized, efficient approach to managing your daily
            tasks.
          </p>
        </section>

        <div className="flex justify-center mt-10">
          <Link href="/" passHref>
            <button className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
