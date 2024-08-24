import { Button } from "@/components/ui/Button"
import {FiDownload} from "react-icons/fi"
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between
        xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer, Analista de sistemas</span>
            <h1 className="h1 mb-6">Hello World<br/><span className="text-accent">Luck DEV</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">Me chamo Lucas e crio experiências elegantes, 
              de nivel intermediário a avançado em várias técnologias</p>
              {/* btn and social */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button 
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                >
                  <span className="text-xl">Download CV</span>
                  <FiDownload className="text-xl"/>
                </Button>
                <div className="mb-8 xl:mb-0">
              
                </div>
              </div>
          </div>

        </div>
      </div>
    </section>

  )
}

export default Home