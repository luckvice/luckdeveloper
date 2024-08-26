"use client";

import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link"
import {motion} from "framer-motion"

const services = [
  {
    num: '01',
    tittle: 'Web Developer',
    description: 'Criação de sites, landingpages, sistemas web/desktop',
    href: '',
  },
  {
    num: '02',
    tittle: 'Devops',
    description: 'Criação de scripts ansible, dockerfile, Sistemas operacionais em geral Windows/Linux/Android, GPC/AWS-EC2',
    href: '',
  },
  {
    num: '03',
    tittle: 'IT Consultant',
    description: 'Consultor em assuntos relacionados a servidores, hardwares e segurança.',
    href: '',
  },
  {
    num: '04',
    tittle: 'IT Security, IOT, etc.',
    description: 'Instação de firewall pfsence, EAP, AP routers etc.',
    href: '',
  },
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{opacity:0}}
          animate={{
            opacity:1, 
            transition:{delay: 2.4, duration: 0.4, ease: "easeIn"},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index)=>{
            return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold 
                  text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white
                 group-hover:text-accent transition-all duration-500">{service.tittle}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services