import { Description } from "@radix-ui/react-dialog"
import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs} from "react-icons/fa"
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



const About = () => {
  return (
    <div>About</div>
  )
}

export default About