import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { qualities } from "../constants";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "./utils/motion";
import { SectionWrapper } from "./helper";
const ProjectCard = ({ index, title, text }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#151030] p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full sm:h-[240px] h-[240px]">
          <div className=" m-3 card-img-hover">
            <h1 className={`${styles.sectionSubText} font-bold`}>{title}</h1>
            <p className=" mt-5 text-[#fff] leading-8">{text}</p>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Why Emediately.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Our vision is to stand as the go-to provider of custom-built LLM
          solutions, consistently delivering exceptional and bespoke AI
          solutions for internal and external use cases. Whether you’re a small
          business or an enterprise, our commitment is to collaborate and propel
          you towards your goals.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 m-auto">
        {qualities.map((quality, index) => (
          <ProjectCard key={`quality-${index}`} index={index} {...quality} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
