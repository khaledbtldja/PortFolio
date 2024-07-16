import { motion } from "framer-motion";
import React from 'react';

export const Links = () => {

  const variante = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariante = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  const items = [
    "Home",
    "motionServices",
    "langage",
    "motionProject",
    "contact",
    "Comment",
    
  ];

  return (
    <motion.div className="links" variants={variante}>
      {items.map(item => (
        <motion.a 
          href={`#${item}`} 
          key={item} 
          variants={itemVariante} 
          whileHover={{ scale: 1.2 }} 
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}
