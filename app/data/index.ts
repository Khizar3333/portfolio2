
import { ImGift } from "react-icons/im";


// type TimelineEntry = {
//   id: number;
//   description: string;
//   className: string;
//   imgClassName: string;
//   titleClassName: string;
//   img: string;
//   spareImg: string;
//   title: string;
//   content?: React.ReactNode;
// };
export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const griditems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently working on ai agents",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Full-stack e-commerce application",
      des: " Full-stack e-commerce platform built with ReactJS, Tailwind CSS, and Firebase. Enjoy secure authentication and robust data storage capabilities for a seamless online shopping experience",
      img: "/e-com.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/firebase2.png"],
      link: "/https://react-ecommerce-umber-zeta.vercel.app",
    },
    {
      id: 2,
      title: "Yoom - Video Conferencing App",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "/ui.yoom.com",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "/ui.aiimg.com",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "/ui.apple.com",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "I had the pleasure of working with Khizar on a generative AI project where we built a RAG application. Khizar not only brought solid technical skills to the table but also a great collaborative spirit. I was always impressed by his attention to detail and commitment to producing high-quality results.He was always ready to tackle challenges and share creative ideas, making the project both successful and enjoyable.I highly recommend Khizar for any future opportunities—he&rsquoll be a great asset to any team",
      name: "Usman Asif",
      title: "CTO & Co-Founder at FuzionDev",
      image: "/usmanasif.png",
    },
    {
      quote:
        "I am pleased to recommend Khizar Ahmad for his exceptional web development skills and remarkable expertise as a software engineer. During our collaboration at Clearlife Technologies, Khizar consistently demonstrated a high level of professionalism and technical prowess. Khizars ability to tackle complex challenges and deliver innovative solutions was evident throughout our project. His attention to detail, commitment to quality, and proficiency in various web technologies significantly contributed to the projects success.",

          
      name: "Amman Khokhar",
      title: "CEO at Clearlife Technologies, Remote Sales Specialist at Central Clinical Labs (CCL), ",
      image:"/amman.png",
    }
    
  
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend  Intern at Clearlife Technologies" ,
      desc: "Assisted in the development of a web-based platform using Next.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Web development bootcamp at Techloset Solutions",
      desc: "Developed Full Stack applications using React.js, Next.js, Typescript, ReduxToolkit, Prisma, Mongodb.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    // {
    //   id: 3,
    //   title: "Freelance App Dev Project",
    //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    //   className: "md:col-span-2", // change to md:col-span-2
    //   thumbnail: "/exp3.svg",
    // },
    // {
    //   id: 4,
    //   title: "Lead Frontend Developer",
    //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
    //   className: "md:col-span-2",
    //   thumbnail: "/exp4.svg",
    // },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];