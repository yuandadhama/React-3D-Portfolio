import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-10 min-h-[280px] flex flex-col justify-evenly items-center">
              <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
              <h3 className='text-white text-[20px] font-bold'>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4  text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I love using computers to make cool things. I've been doing this for about 5 years, making websites and apps for phones. I got into coding because it's amazing how you can solve real problems with it. I enjoy working with teams to turn big ideas into real software that works well. Besides coding, I enjoy learning new things and helping others learn too. When I'm not on the computer, I'm outside working out. Whether you're into coding or just curious, feel free to reach out. Let's make something awesome together!
      </motion.p>

      {/* block cards */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return (
            <ServiceCard
              key={service.title}
              index={index}
              title={service.title}
              icon={service.icon}
            />
          );
        })}
      </div>
    </>
  )
}

export default About