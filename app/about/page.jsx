"use client"
import { Description } from "@radix-ui/react-dialog"
import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma} from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs} from "react-icons/si"


const about = {
  tittle: 'Sobre mim',
  Description: 'Meu nome é Lucas conhecido como Luck, sou desenvolvedor web, devops, analista de software e gamer nas horas vagas',
  info: [
    {
      fieldName: "Luck",
      fieldValue: "Luck Dev"
    },
    {
      fieldName: "Whats",
      fieldValue: ""
    },
    {
      fieldName: "Experiencia",
      fieldValue: "12 Anos"
    },
    {
      fieldName: "Discord",
      fieldValue: "#00000"
    },
    {
      fieldName: "Email",
      fieldValue: "lucasmarcelo93@gmail.com"
    },
    {
      fieldName: "Freelancer",
      fieldValue: "Agenda cheia no momento"
    },
    {
      fieldName: "Linguagens",
      fieldValue: "Inglês Técnico, Espanhol basico"
    },
  ]
};

const experience = {
  icon: '/assets/resume/badge.svg',
  tittle: 'Minha experiencia',
  description: 'todo',
  items: [
    {
      company: 'PMWEB Responsys',
      position: 'Treinee developer full stack',
      duration: '2012 - 2012'
    },
    {
      company: 'Join Tecnologia',
      position: 'Treinee developer full stack',
      duration: '2012 - 2014'
    },
    {
      company: 'INFORMATO',
      position: 'SUPPORT IT ANALYST',
      duration: '2014 - 2014'
    },
    {
      company: 'SUPERMERCADOS GUARAPARI',
      position: 'Analista de sistemas',
      duration: '2014 - 2024'
    },
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  tittle: 'Minhas formações',
  description: 'todo',
  items: [
    {
      institution: 'Objetus Informatica',
      degree: 'Técnico em Informática',
      duration: '2012 - 2012'
    },
    {
      institution: 'Escola Técnica Irmão Pedro',
      degree: 'Técnico em Publicidade e Propaganda',
      duration: '2016 - 2017'
    },
    {
      institution: 'SENAC RS',
      degree: 'Analise e Desenvolvimento de sistemas',
      duration: '2014 - 2021'
    },
  ]
}

const skills = {
  title: 'Minhas Skills',
  description: 'Todo',
  skillList:[
    {
      icon: <FaHtml5/>,
      name: 'html5'
    },
    {
      icon: <FaCss3/>,
      name: 'CSS 3'
    },
    {
      icon: <FaJs/>,
      name: 'Javascript'
    },
    {
      icon: <FaReact/>,
      name: 'React JS'
    },
    {
      icon: <SiNextdotjs/>,
      name: 'Next JS'
    },
    {
      icon: <SiTailwindcss/>,
      name: 'Tailwind.css'
    },
    {
      icon: <FaNodeJs/>,
      name: 'Node.JS'
    },
    {
      icon: <FaFigma/>,
      name: 'Figma'
    },
  ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import {ScrollArea} from "@/components/ui/scroll-area" 
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div initial={{opacity: 0}} 
    animate={{
      opacity:1, transition:
      {delay:2.4, duration:0.4,ease: 'easeIn'}
      }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <Tabs defaultValue="experiene" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experiene">
                Experiencia
              </TabsTrigger>
              <TabsTrigger value="education">
                Formações
              </TabsTrigger>
              <TabsTrigger value="skills">
                Skills
              </TabsTrigger>
              <TabsTrigger value="about">
                Sobre mim
              </TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">
              
            </div>
          </Tabs>
        </div>
    </motion.div>
  )
}

export default About