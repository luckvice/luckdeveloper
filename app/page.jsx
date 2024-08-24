import { Button } from "@/components/ui/Button"
import {FiDownload} from "react-icons/fi"
import Social from "@/components/Social"
import Photo from "@/components/Photo"


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between
        xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer, Analista de sistemas</span>
            <h1 className="h1 mb-6">Hello World<br/><span className="text-accent">Luck DEV</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">Me chamo Lucas e crio experiências elegantes, 
              de nivel intermediário a avançado em várias técnologias</p>
              {/* btn and social */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button 
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2">
                  <span className="text-xl">Download CV</span>
                  <FiDownload className="text-xl"/>
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                </div>
              </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Home