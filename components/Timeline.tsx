// "use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import groq1 from "@/app/images/groq1.png"
import groq2 from "@/app/images/groq2.png"
import ecom from "@/app/images/react-ecom.png"
import ecom2 from "@/app/images/react-ecom2.png"
import ecom3 from "@/app/images/react-ecom3.png"
import ecom4 from "@/app/images/react-ecom4.png"
import agent1 from "@/app/images/agent1.png"
import agent2 from "@/app/images/agent2.png"
import clickup1 from "@/app/images/clickup1.png"
import clickup2 from "@/app/images/clickup2.png"
import clickup4 from "@/app/images/clickup3.png"
import ticket1 from "@/app/images/ticket1.png"
import ticket2 from "@/app/images/ticket2.png"
import ticket3 from "@/app/images/ticket3.png"  
import ticket4 from "@/app/images/ticket4.png"
import clear1 from "@/app/images/clear1.png"
import clear2 from "@/app/images/clear2.png"
import clear3 from "@/app/images/clear3.png"
import clear4 from "@/app/images/clear4.png"

import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";


export function TimelineDemo() {
  const data = [
    {
      title: "Groq Bot",
      
      content: (
           
        <div style={{
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base   font-normal mb-8">
            <span className="font-bold text-base md:text-lg mb-5">
      
          RAG-Based Chat Application Deployed on Azure
            </span>
            <br />

Developed a Retrieval-Augmented Generation (RAG) application that answers user queries specifically related to LangSmith. The frontend is built using Streamlit, while the LLM is powered by LLaMA 3.1 via the Groq API, integrated with LangChain for seamless interaction. 
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={groq1}
              alt="startup template"
              width={500}
              height={600}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={groq2}
              alt="startup template"
              width={500}
              height={600}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            
          </div>
          <Link href={"https://groqbot123.streamlit.app/"} >
          <div className='flex justify-center items-center mt-4'>

                        <button className='flex lg:text-xl bg-[#3f92ca7a] rounded-full px-5 py-2 text-sm text-cyan-100'>Check live site</button>
                        <FaLocationArrow className='ms-3 '  />
                    </div>
          </Link>
              
              
    

    </div>
      ),
      
    },
    {
        title: " E-commerce App",
        content: (
            <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-bold mb-5">
          Built with React.js, TypeScript, Tailwind CSS, and Redux Toolkit
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8">
         


This E-commerce app provides a seamless shopping experience with features like adding products to the cart, updating the cart, and browsing by category. The app leverages the Fake Store API for product display, ensuring a realistic and dynamic shopping interface. The use of Redux Toolkit ensures efficient state management, making the app highly responsive and user-friendly 
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={ecom}
              alt="hero template"
              width={500}
              height={600}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={ecom2}
              alt="feature template"
              width={500}
              height={600}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={ecom3}
              alt="bento template"
              width={500}
              height={600}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={ecom4}
              alt="cards template"
              width={500}
              height={600}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <Link href={"https://techloset-ecom.vercel.app/"} >
          <div className='flex justify-center items-center mt-4'>

                        <button className='flex lg:text-xl bg-[#3f92ca7a] rounded-full px-5 py-2 text-sm text-cyan-100'>Check live site</button>
                        <FaLocationArrow className='ms-3' />
                    </div>
          </Link>
        </div>
      ),
    },
    {
      title: "Clickup Clone",
      
      content: (
           
        <div style={{
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base   font-normal mb-8">
            <span className="font-bold text-base md:text-lg mb-5">
      
          Clickup website Clone
            </span>
            <br />

Developed a website clone of Clickup.This is only ui of clickup and it is made by using Nextjs and Tailwand css,  . 
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={clickup1}
              alt="startup template"
              width={500}
              height={600}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={clickup2}
              alt="startup template"
              width={500}
              height={600}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
               <Image
              src={clickup4}
              alt="startup template"
              width={500}
              height={600}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            
          </div>
          <Link href={"https://clcikup.vercel.app/"} >
          <div className='flex justify-center items-center mt-4'>

                        <button className='flex lg:text-xl bg-[#3f92ca7a] rounded-full px-5 py-2 text-sm text-cyan-100'>Check live site</button>
                        <FaLocationArrow className='ms-3 '  />
                    </div>
          </Link>
              
              
    

    </div>
      ),
      
    },
    {
      title: "Ticket generation app",
      content: (
          <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-bold mb-5">
        Built using Nextjs Tailwand css ,Ttpescript and Postgresql
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8">
       


This is Full stack web app that allows users to generate tickets for events. The app uses Nextjs for the frontend, Tailwind CSS for styling, and Postgresql for database management. The backend is also built using Nextjs. It also uses Typescript for type safety.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={ticket1}
            alt="hero template"
            width={500}
            height={600}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={ticket2}
            alt="feature template"
            width={500}
            height={600}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={ticket3}
            alt="bento template"
            width={500}
            height={600}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={ticket4}
            alt="cards template"
            width={500}
            height={600}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
        <Link href={"https://conference-app-j5kv.vercel.app/"} >
        <div className='flex justify-center items-center mt-4'>

                      <button className='flex lg:text-xl bg-[#3f92ca7a] rounded-full px-5 py-2 text-sm text-cyan-100'>Check live site</button>
                      <FaLocationArrow className='ms-3' />
                  </div>
        </Link>
      </div>
    ),
  },


    {
      title: "Agentic App",
      content: (
        <div>
         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base   font-normal mb-8">
            <span className="font-bold text-base md:text-lg mb-5">
      
          Agent Based Chat Application Deployed on Azure
            </span>
            <br />

            Developed an agent-based chatbot that autonomously utilizes various tools to answer user queries. The backend, built with Python, integrates three key tools: LangSmith, Wikipedia, and arXiv. It leverages OpenAI APIs for the language model and employs LangChain for agent functionality. The frontend is built using Streamlit.
            </p>
         
         
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={agent1}
              alt="hero template"
              width={500}
              height={600}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={agent2}
              alt="alt"
              width={800}
              height={600}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
           
            
          </div>
          <Link href={"https://aiagent-zps2ewbnpceq7dlhojgouz.streamlit.app/"} >
          <div className='flex justify-center items-center mt-4'>

                        <button className='flex lg:text-xl bg-[#3f92ca7a] rounded-full px-5 py-2 text-sm text-cyan-100'>Check live site</button>
                        <FaLocationArrow className='ms-3' />
                    </div>
          </Link>
        </div>
      ),
    },
    {
      title: "Clearlife Technologies",
      content: (
          <div>
        {/* <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-bold mb-5">
        Built using Nextjs, Tailwand css and Tailblocks for prebuilt components 
        </p> */}
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8">
       


        This is ClearLife Tech website which is a pioneering company dedicated to revolutionizing wastewater treatment through decentralized solutions
        this website is built using Nextjs and Tailwind css  Tailblocks for prebuilt components and some other react libraries fro small animatons
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={clear1}
            alt="hero template"
            width={500}
            height={600}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={clear2}
            alt="feature template"
            width={500}
            height={600}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={clear3}
            alt="bento template"
            width={500}
            height={600}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={clear4}
            alt="cards template"
            width={500}
            height={600}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
        <Link href={"https://www.clearlifetech.com/"} >
        <div className='flex justify-center items-center mt-4'>

                      <button className='flex lg:text-xl bg-[#3f92ca7a] rounded-full px-5 py-2 text-sm text-cyan-100'>Check live site</button>
                      <FaLocationArrow className='ms-3' />
                  </div>
        </Link>
      </div>
    ),
  },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}




