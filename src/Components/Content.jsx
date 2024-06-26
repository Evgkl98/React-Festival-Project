import NavBar from "./NavBar";
import MainContent from "./MainContent";
import About from "./About";
import Links from "./Links";
import AllContacts from "./AllContacts";
import Competition from "./Competition";
import Partners from "./Partners";
import Contacts from "./Contacts";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Content() {
  const [category, setCategory] = useState("home");


  function handleClick(topic) {
    setCategory(topic);
    console.log(category);
  }


  let value;

  if (category === "home") {
    value = <MainContent />
  } else if (category === "about") {
    value = <About />;
  } else if (category === "links") {
    value = <Links />;
  } else if (category === "contacts") {
    value = <AllContacts />;
  } else if (category === "competition") {
    value = <Competition />;
  }

  return (
    <>
      <div className="content">
        <NavBar topic={category} changeTopic={handleClick}/>
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {value}
          </motion.div>
        </AnimatePresence>
      </div>
      <Partners block />
      <Contacts changeTopic={handleClick}></Contacts>
    </>
  );
}
