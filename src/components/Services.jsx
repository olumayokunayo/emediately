import React from "react";
import { SectionWrapper } from "./helper";
import { RiArrowRightSLine } from "react-icons/ri"; // Import arrow icon for styling
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  return (
    <>
      <h2 className="text-white mb-5 text-4xl mb-10 font-bold">
        Why use on-site LLMs
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex gap-6 "
      >
        {/* Service Card 1 */}
        <div className="bg-[#151030] p-5 rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-indigo-500/40 w-full">
          <p className=" text-gray-800 mb-2 underline text-4xl font-bold animate-pulse ">
            01
          </p>
          <h3 className="text-[#9CA9B2]  mb-4                                                                                                                                                                                                                                                                                           mb-8">
            Deploy LLMs as robust as ChatGPT locally.
          </h3>
          <p className="mb-4 text-[#a9a6c3]">
            At Emediately, we take great pride in creating innovative solutions
            designed for your specific use case.
          </p>
          <p className="text-[#a9a6c3] text-sm">
            Open-source models have emerged as strong contenders for enterprise
            adoption. We champion the use of secure, custom-built LLMs. Enhance
            your business with the latest AI solutions.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-[#151030] p-5 rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-indigo-500/40 w-full">
          <p className="text-4xl text-gray-800 mb-2 underline  font-bold animate-pulse ">
            02
          </p>
          <h3 className="text-[#9CA9B2] mb-4">
            Pre-train your model on your data sets, ensuring your LLM is unique
            to your specific use case.
          </h3>
          <p className="text-[#a9a6c3] mb-4 text-sm">
            Our Large Language Model is pre-trained on datasets specified by
            you. We will work with you to ensure our AI solutions are
            pre-trained and totally relevant to your specific use case.
          </p>
          <p className="text-[#a9a6c3] text-sm">
            We will help you set up your LLM ensuring you reap the full benefits
            of this game-changing AI technology.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-[#151030] p-5 rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-indigo-500/40 w-full">
          <p className="text-4xl text-gray-800 mb-2 underline font-bold animate-pulse ">
            03
          </p>
          <h3 className="text-[#9CA9B2] mb-10">
            Privacy and security of enterprise data.
          </h3>
          <p className="text-[#a9a6c3] mb-4 text-sm">
            Privacy and security of your data is our priority. We ensure your
            data stays with you. Do not compromise sensitive information by
            using third-party LLM solutions.
          </p>
          <p className="text-[#a9a6c3] text-sm">
            We will help you leverage the power of on-site LLMs without
            compromising data integrity.
          </p>
        </div>

        {/* Service Card 4 */}
        <div className="bg-[#151030] p-5 rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-indigo-500/40 w-full">
          <p className="text-4xl font-bold text-gray-800 mb-2 underline animate-pulse ">
            04
          </p>
          <h3 className="text-[#9CA9B2] mb-10">
            Fine-tune your LLM to ensure your model is an expert.
          </h3>
          <p className="text-[#a9a6c3] mb-4 text-sm">
            Emediately does more than just develop innovative LLM technology –
            we understand it.
          </p>
          <p className="text-[#a9a6c3] text-sm">
            Stay informed about the latest LLM developments and understand the
            pulse of your business like never before. We will accompany you
            through the set up and deployment process.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Services, "services");
