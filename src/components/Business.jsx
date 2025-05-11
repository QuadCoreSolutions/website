import React from 'react'
import { solutions } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== solutions.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id='solutions' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Transform Your Business with Cutting-Edge Technology</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Leverage our innovative solutions powered by AI and the latest technologies to take your business to the next level. 
          From automation to data analytics, we bring smart solutions to streamline operations and boost your success.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {solutions.map((solution, index) => (
          <FeatureCard key={solution.id} {...solution} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business
