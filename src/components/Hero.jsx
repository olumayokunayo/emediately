import React from "react";
import { styles } from "../style";
import Lottie from "lottie-react";
import animationData from "../assets/heroan.json";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto pt-20`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        {/* 
        <div
          className={`${
            // window.innerWidth < 640 ? "flex-col" : "flex-row"
          } flex items-center `}
        > */}
        <div className="xl:flex-row flex-col flex gap-10 overflow-hidden">
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Your go-to consultants for &nbsp;
              <span className="text-[#915EFF]">
                secure Large Language Models
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              We help businesses of all sizes deploy secure, locally hosted
              Large Language Models (LLMs)
            </p>
            <button
              className={`${
                window.innerHeight < 640 ? "text-xs" : ""
              } mt-5 bg-[#915EFF] text-[#ffffff] rounded p-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300`}
            >
              Join our waitlist
            </button>
          </div>

          <Lottie animationData={animationData} />
        </div>
      </div>
      <div className="absolute sm:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
