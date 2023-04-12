import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const SlotMachineSection = ({ values }) => {
  const animation = useAnimation();
  const randomIndex = Math.floor(Math.random() * values.length);
  const initialY = -randomIndex * 100;

  useEffect(() => {
    const runAnimation = async () => {
      while (true) {
        await animation.start({ y: initialY - 900, transition: { duration: 10 } });
        await animation.set({ y: initialY });
      }
    };

    runAnimation();

    return () => {
      animation.stop();
    };
  }, [animation, initialY]);

  return (
    <motion.div
      animate={animation}
      style={{ height: "100px", overflow: "hidden" }}
    >
      {values.map((v) => (
        <div key={v} style={{ height: "100px" }}>
          {v}
        </div>
      ))}
    </motion.div>
  );
};

const SlotMachine = () => {
  const values = [
    ["apple", "banana", "orange", "lemon", "grape", "pear", "kiwi", "melon", "cherry", "plum"],
    ["red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "gray", "black"],
    ["cat", "dog", "bird", "fish", "rabbit", "hamster", "snake", "turtle", "guinea pig", "ferret"],
  ];

  return (
    <div style={{ display: "flex" }} id="motion">
      {values.map((v) => (
        <SlotMachineSection key={v.join()} values={v} />
      ))}
    </div>
  );
};

export default SlotMachine;
