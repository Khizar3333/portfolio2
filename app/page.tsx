import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Recentprojects from "@/components/Recentprojects";
import { FloatingNav } from "@/components/ui/Floatingnav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { navItems } from "./data";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import { TimelineDemo } from "@/components/Timeline";
import Hero1 from "@/components/Hero1";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Hero1/>

        {/* <Grid/> */}
        <Recentprojects/>
        <Client/>
        <Experience/>
        {/* <TimelineDemo/> */}
        {/* <Verticaltimeline/> */}
      </div>
    </main>
  );
}