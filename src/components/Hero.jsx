import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img
            src={discount}
            alt='innovation'
            className='w-[32px] h-[32px]'
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>Launching Soon:</span> Your Innovation Partner in{" "}
            <span className='text-white'>AI & Automation</span>
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
            Building the <br className='sm:block hidden' />{" "}
            <span className='text-gradient'>Future</span> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
          With Smart Solutions.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We are a next-gen software solutions company delivering intelligent, scalable, and secure platforms.
          Powered by AI, designed for innovation — we help businesses stay ahead of the curve.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt='ai-solutions'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero
