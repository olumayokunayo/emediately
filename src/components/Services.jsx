import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { SectionWrapper } from "./helper";
import { textVariant } from "./utils/motion";
import { motion } from "framer-motion";
import { services } from "../constants";

const ServiceCard = ({ service }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      //   icon={color}
    >
      <div>
        <h3 className="text-white lg:text-[24px] md:text-[20px]font-bold">
          {service.title}
        </h3>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {service.points.map((point, index) => (
          <li
            key={index}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="">
        <p className={styles.sectionHeadText}>Why use on-site LLMs</p>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Services, "services");
// export default Services;
