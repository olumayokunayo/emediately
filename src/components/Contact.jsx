import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { slideIn } from "./utils/motion";
import { SectionWrapper } from "./helper";
import EarthCanvas from "./canvas/Earth";
const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          //   ref={formRef}
          //   onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              //   value={form.name}
              //   onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              //   value={form.email}
              //   onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Phone Number</span>
            <input
              type="number"
              name="number"
              //   value={form.email}
              //   onChange={handleChange}
              placeholder="What's your phone number?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              How did you hear about us?
            </span>
            <select
              name="phone-type"
              // value={phoneNumberType}
              // onChange={handlePhoneNumberTypeChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            >
              <option value="">Select One</option>
              <option value="search">Search Engine</option>
              <option value="social">Social Media</option>
              <option value="tv">TV</option>
              <option value="radio">Radio</option>
              <option value="friends">Friends or Family</option>
            </select>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Other Details </span>
            <textarea
              rows="7"
              name="message"
              //   value={form.message}
              //   onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            style={{
              width: "20%",
              margin: "auto",
              borderRadius: "10px",
              padding: "4px",
              backgroundImage:
                "linear-gradient(to right, #4b9be2, #847ddb, #e847cf)",
            }}
          >
            Send
            {/* {loading ? "Sending..." : "Send"} */}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
