'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import github from "@/app/assets/github.png"
import linkdin from "@/app/assets/linkdin.png"
import twitter from "@/app/assets/x.png"
import profile from "@/app/assets/profile.jpg"
import about_me_profile from "@/app/assets/about-me-profile.jpg"
import javascript from "@/app/assets/icon-javscript.svg"
import typescript from "@/app/assets/icon-typescript.svg"
import react from "@/app/assets/icon-react.svg"
import nextjs from "@/app/assets/icon-nextjs.svg"
import nodejs from "@/app/assets/icon-nodejs.svg"
import vercel from "@/app/assets/vercel-icon-light.png"
import project_1_qualifit from "@/app/assets/project-1 Qualifit.jpg"
import project_2_shopee from "@/app/assets/project-2 shopee.png"
import location from "@/app/assets/location.png"
import available from "@/app/assets/available.png"
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";


const techStack = [
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: react },
  { name: "Next.js", icon: nextjs },
  { name: "Node.js", icon: nodejs },
  { name: "Vercel", icon: vercel },
]

const experiences = [
  {
    id: "frontend-dev-2024",
    role: "Frontend Developer",
    company: "Techades e-Biz Arena",
    period: "June 2024 - Present",
    responsibilities: [
      "Created interactive scheduling and feedback components to improve user experience for scheduling interviews and viewing feedback in real-time.",
      "Designed routing and page transitions to create a seamless user journey, routing users from login to the jobs dashboard and the add job page on button interactions.",
      "Built user-friendly, responsive web applications using React.js and Tailwind CSS, ensuring compatibility and optimal performance across devices and browsers.",
      "Integrated RESTful APIs using axios in the Login Page and other components, enabling secure data handling and real-time information display within the application."
    ]
  },
  // {
  //   id: "tech-lead-2021",
  //   role: "Tech Lead",
  //   company: "Company Name",
  //   period: "Jul 2021 - Dec 2022",
  //   responsibilities: [
  //     "Managed team of 5 developers",
  //     "Architected scalable solutions",
  //     "Improved deployment processes",
  //   ]
  // },
  // {
  //   id: "full-stack-dev-2020",
  //   role: "Full Stack Developer",
  //   company: "Company Name",
  //   period: "Jan 2020 - Jul 2021",
  //   responsibilities: [
  //     "Developed full-stack web applications",
  //     "Implemented RESTful APIs",
  //     "Optimized database performance",
  //   ]
  // },
]

const projects = [
  {
    title: "Qualifit Nextgen AI Tool Web Application",
    description: "The Qualifit Nextgen AI Tool Web Application is a cutting-edge platform designed to enhance HR and recruitment processes using advanced AI capabilities. It offers features like streamlined scheduling, candidate evaluation, and data-driven decision-making for efficient hiring workflows.",
    image: project_1_qualifit,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"]
  },
  {
    title: "Shopee UI Project",
    description: "The Shopee UI Project is a frontend design replication of the Shopee e-commerce platform, created using only HTML and CSS. It features a clean and responsive layout with sections for navigation, product categories, featured items, and footer links. The design emphasizes visual appeal and user-friendly navigation, simulating a real-world shopping experience.",
    image: project_2_shopee,
    technologies: ["HTML", "CSS"]
  },
  // {
  //   title: "Project Three",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   image: "/project3.jpg",
  //   technologies: ["React", "Redux", "Firebase", "Material UI", "Vercel"]
  // },
]



export default function Home() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <main className="min-h-screen bg-[#0a0d12] text-white ">
      {/* Nav Section */}
      <nav className="flex justify-between items-center sticky top-0 bg-[#0a0d12] z-50 py-4 px-4">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        <span className="text-yellow-400">{"<SK /> "}</span>
      </Link>

      {/* Hamburger Menu (Mobile View) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
        aria-label="Toggle menu"
      >
        {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>

      {/* Navigation Links */}
      <div
        className={`flex-col md:flex-row md:flex items-center gap-8 absolute md:static top-16 left-0 w-full md:w-auto bg-[#0a0d12] md:bg-transparent px-4 md:px-0 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <Link href="#about" className="hover:text-yellow-400 py-2 md:py-0">
          About
        </Link>
        <Link href="#work" className="hover:text-yellow-400 py-2 md:py-0">
          Work
        </Link>
        <Link href="#experience" className="hover:text-yellow-400 py-2 md:py-0">
          Experience
        </Link>
        <Link href="#contact" className="hover:text-yellow-400 py-2 md:py-0">
          Contact
        </Link>
        <Button
          as="a"
          href="/Sanjaykumarm-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[20px] py-2 md:py-0"
        >
          Resume
        </Button>
      </div>
    </nav>
      <div className="pt-16">
        {/* Hero Section */}

        <section className="container mx-auto px-4 pb-12">
          <div className="flex flex-col-reverse md:flex-row justify-between items-start">
            <div className="max-w-2xl mt-6 md:mt-0">
              <h1 className="text-4xl font-bold mb-4">
                Hi, I'm Sanjaykumar Magendiran👋
              </h1>
              <p className="text-gray-400 mb-6">
                I'm a Frontend Developer based in India with 1 years of complete experience in UI development. I enjoy creating beautiful and reliable applications for internet and phones. I'm quietly confident, naturally curious, and perpetually working on improving my chops one problem at a time.
              </p>
              <div className="flex items-center gap-4 text-gray-400 mb-8">
                <Image src={location} alt="Location" width={24} height={24} />
                <span> Chennai, India</span>
                <Image src={available} alt="Available" width={24} height={24} />
                <span> Available for new roles</span>
              </div>
              <div className="flex gap-4">
                <Link href="https://github.com/Sanjaykmahendiran" target="_blank">
                  <Image src={github} alt="GitHub" width={24} height={24} />
                </Link>
                <Link href="www.linkedin.com/in/sanjaykumar-magendiran-b70638234" target="_blank">
                  <Image src={linkdin} alt="LinkedIn" width={24} height={24} />
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <Image src={twitter} alt="Twitter" width={24} height={24} />
                </Link>
              </div>
            </div>
            <div className="relative w-full md:w-72 h-72">
              <Image
                src={profile}
                alt="SK's profile"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>


        {/* About Section */}
        <section id="about" className="bg-[#0d1117] py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-12">Curious about me? Here you have it:</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 text-gray-400">
                <p>
                  I'm a passionate Frontend Developer with 1 year of experience in creating engaging and responsive web applications. My expertise lies in React.js, Next.js, and modern frontend technologies.
                </p>
                <p>
                  I specialize in building robust applications that leverage cutting-edge technologies to drive business growth and enhance user experience. My approach combines technical expertise with creative problem-solving.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing.
                </p>
              </div>
              <div className="relative h-96">
                <Image
                  src={about_me_profile}
                  alt="Casual photo"
                  fill
                  className="rounded-lg object-cover"

                />
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-12">Tech Stack</h2>
            <div className="grid grid-cols-6 gap-8">
              {techStack.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center">
                  <Image src={tech.icon} alt={tech.name} width={48} height={48} unoptimized />
                  <span className="mt-2 text-sm text-gray-400">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="bg-[#0d1117] py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-12">Here is a quick summary of my most recent experiences:</h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <Card key={exp.id} className="bg-[#161b22] border-none p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-yellow-400">{exp.company}</p>
                    </div>
                    <span className="text-gray-400">{exp.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-gray-400">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-12">Some of the noteworthy projects I have built:</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card key={project.title} className="bg-[#161b22] border-none overflow-hidden text-white">
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-[#0d1117] py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Want to work together?</h2>
            <p className="text-gray-400 mb-8">Feel free to reach out for collaborations or just a friendly hello</p>
            <div className="flex justify-center items-center gap-2">
              <Link
                href="mailto:sanjaykumarmahendiran@gmail.com"
                className="text-yellow-400 hover:underline"
              >
                sanjaykumarmahendiran@gmail.com
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                href="tel:+916374271140"
                className="text-yellow-400 hover:underline"
              >
                +91 6374271140
              </Link>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <Link href="https://github.com/Sanjaykmahendiran" target="_blank">
                <Image src={github} alt="GitHub" width={24} height={24} />
              </Link>
              <Link href="www.linkedin.com/in/sanjaykumar-magendiran-b70638234" target="_blank">
                <Image src={linkdin} alt="LinkedIn" width={24} height={24} />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Image src={twitter} alt="Twitter" width={24} height={24} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}


