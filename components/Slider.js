import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function Slider() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{opacity:0}}
        animate = {{opacity: 1, transition:{duration: 1.2}}}
        exit={{opacity: 0 }}
        
        className="App"
        style={{ fontSize: 100 }}
        key={seconds}
      >
        {seconds}
      </motion.div>
    </AnimatePresence>
  );
}

export default Slider
