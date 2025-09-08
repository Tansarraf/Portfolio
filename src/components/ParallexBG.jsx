import { useScroll, useTransform,motion, useSpring } from 'motion/react'
import React from 'react'

const ParallexBG = () => {
    const { scrollYProgress } = useScroll();
    const x = useSpring(scrollYProgress, {damping:50})
    const clouds = useTransform(x,[0,0.5],["0%","70%"]);
    const cloud2 = useTransform(x,[0,0.5],["0%","-20%"]);
    const cloud3 = useTransform(x,[0,0.5],["0%","30%"]);
    const cloud4 = useTransform(x,[0,0.5],["0%","10%"]);
    const stars = useTransform(x,[0,0.5],["0%","0%"]);

    return (
    <section className='absolute inset-0 bg-black/40'>
        <div className='relative h-screen overflow-y-hidden'>
            <div className='absolute inset-0 w-full h-screen -z-60' 
            style={{
                backgroundImage : "url(/assets/plain-bg.png)",
                backgroundPosition : "bottom",
                backgroundSize : "cover",
            }}/>
            <motion.div className='absolute inset-0 -z-50'
            style={{
                backgroundImage : "url(/assets/clouds.png)",
                backgroundPosition : "bottom",
                backgroundSize : "cover",
                y:clouds,
            }}/>
            <motion.div className='absolute inset-0 -z-40'
            style={{
                backgroundImage : "url(/assets/clouds-2.png)",
                backgroundPosition : "bottom",
                backgroundSize : "cover",
                x:cloud2,
            }}/>            
            <motion.div className='absolute inset-0 -z-30'
            style={{
                backgroundImage : "url(/assets/clouds-3.png)",
                backgroundPosition : "bottom",
                backgroundSize : "cover",
                y:cloud3,
            }}/>
            <motion.div className='absolute inset-0 -z-20'
            style={{
                backgroundImage : "url(/assets/clouds-4.png)",
                backgroundPosition : "bottom",
                backgroundSize : "cover",
                y:cloud4
            }}/>
            <motion.div className='absolute inset-0 -z-10'
            style={{
                backgroundImage : "url(/assets/stars.png)",
                backgroundPosition : "bottom",
                backgroundSize : "cover",
                y:stars
            }}/>

        </div>
    </section>
  )
}

export default ParallexBG