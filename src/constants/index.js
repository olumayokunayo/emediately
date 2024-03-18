import excellenceImg from "../assets/excellence.jpg";
import expertiseImg from "../assets/expertise.jpg";
import integrityImg from "../assets/integrity.jpg";
import professionalImg from "../assets/professionalism.jpg";

export const navlinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
const services = [
  {
    title: "Deploy LLMs as robust as ChatGPT locally",
    points: [
      "At Emediately, we take great pride in creating innovative solutions designed for your specific use case.",
      "Open-source models have emerged as strong contenders for enterprise adoption. We champion the use of secure, custom-built LLMs. Enhance your business with the latest AI solutions.",
    ],
  },
  {
    title:
      "Pre-train your model on your data sets, ensuring your LLM is unique to your specific use case",
    points: [
      "Our Large Language Model is pre-trained on datasets specified by you. You are always in control. We will work with you to ensure our AI solutions are pre-trained and totally relevant to your specific use case.",
      "Anything from customer support, international knowledge search or analysis of complex documents, we will help you set up your LLM ensuring you reap the full benefits of this game-changing AI technology.",
    ],
  },
  {
    title: "Privacy and security of enterprise data",
    points: [
      "Privacy and security of your data is our priority. We ensure your data stays with you. Do not compromise sensitive information by using third-party LLM solutions.",
      "We will help you leverage the power of on-site LLMs without compromising data integrity.",
    ],
  },
  {
    title: "Fine-tune your LLM to ensure your model is an expert",
    points: [
      "Emediately does more than just develop innovative LLM technology - we understand it.",
      "Stay informed about the latest LLM developments and understand the pulse of your business like never before. We will accompany you through the set up and deployment process.",
    ],
  },
];

const qualities = [
  {
    title: "Excellence",
    text: "We create solutions that exceed your expectations with a passion for perfection and attention to detail.",
    image: excellenceImg,
  },
  {
    title: "Professionalism",
    text: "We deliver top-notch service, and handle requests with expertise, ensuring your journey is smooth and hassle-free.",
    image: professionalImg,
  },
  {
    title: "Expertise",
    text: "Our intimate knowledge of the industry allows us to craft a service uniquely tailored to your use case.",
    image: expertiseImg,
  },
  {
    title: "Integrity",
    text: "We will never pull the wool over your eyes, In every endeavour, from collaboration to decision-making, we champion transparency, honesty, and sincerity.",
    image: integrityImg,
  },
];

export { services, qualities };
