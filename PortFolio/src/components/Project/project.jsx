import React, { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: "1",
    img:"https://images.squarespace-cdn.com/content/v1/600f5d7d6bd4ef04d017444e/2f13d1f4-7046-483b-9296-9ae72f74fef2/Cannabis+Compliance+Software.jpg",
    title: "Gestion de canabis",
    github: "https://github.com/khaledbtldja/Application-Desktop-Projet_D-integration/tree/main/GestionCanabis",
    desc:"Le projet de gestion des inventaires des plantules de cannabis est né de la nécessité du Centre d’Accès à la Technologie en Bio-innovation de moderniser ses processus de suivi. Face à la complexité croissante de la gestion des plantules, l'équipe a décidé de développer une application complète permettant d'enregistrer, d'importer et de suivre efficacement chaque plante à travers son cycle de vie. L'idée de générer des codes QR uniques pour chaque plante offre une solution pratique pour identifier et accéder rapidement aux informations nécessaires. En intégrant des fonctionnalités telles que la gestion des états de santé, des dates d'arrivée et de retrait, ainsi que la possibilité de scanner les codes QR via une application mobile, le projet vise à simplifier le suivi des plantules tout en assurant la traçabilité et la flexibilité nécessaire pour répondre aux besoins spécifiques de la bio-innovation. "
    
  },
  {
    id: "2",
    title: "Futur Hospital",
    github: "https://github.com/yourusername/future-hospital",
    img: "https://st5.depositphotos.com/5775856/62493/v/450/depositphotos_624936134-stock-illustration-health-insurance-form-online-healthcare.jpg",
    desc:"Cette application web, développée en HTML, CSS et PHP, permet une gestion complète et efficace des dossiers médicaux des patients. Elle inclut un système de notification avancé qui envoie automatiquement des messages au médecin concernant les mises à jour sur l'état de santé des patients. Un contrôleur intégré surveille en temps réel les paramètres vitaux, assurant une surveillance continue et proactive. L'interface utilisateur est intuitive et réactive, facilitant l'accès rapide aux informations critiques, ce qui améliore la prise de décision médicale. L'application offre également des fonctionnalités pour programmer des rendez-vous, suivre les historiques médicaux, gérer les prescriptions, et communiquer avec les patients. Ainsi, elle optimise la gestion globale des soins et améliore la coordination entre les médecins et leurs patients, assurant un suivi personnalisé et efficace."
  },
  {
    id: "3",
    title: "PortFolio",
    github: "https://github.com/yourusername/future-hospital",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/53da23176332383.Y3JvcCwxNjE2LDEyNjQsMCww.jpg",
    desc: "Ce portfolio en ligne, conçu avec HTML, CSS et PHP, met en avant mes compétences et réalisations en développement web. Chaque projet est présenté avec des descriptions détaillées, des images et des liens vers les démonstrations en direct. L'interface moderne et intuitive permet une navigation fluide entre les différentes sections, telles que les projets, les compétences, et les témoignages. Un formulaire de contact intégré permet aux visiteurs de me joindre facilement pour des opportunités professionnelles ou des collaborations. Le portfolio inclut également un blog où je partage mes réflexions sur les technologies actuelles et les tendances du secteur. Ce site responsive s'adapte parfaitement à tous les appareils, offrant une expérience utilisateur optimale. Grâce à ce portfolio "
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    //offset:["start start" , "end start"]
  });

  const y = useTransform(scrollYProgress , [0,1] , [-300 , 300])
  return (
    <section > 
      <div className="continer">
        <div className="wrapper">
        <div className="imageContiner" ref ={ ref}>
        <img src={item.img} alt="" />
        </div>
        <motion.div className="textContiner"  style = {{y:y}}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button onClick={() => window.open(item.github, "_blank")}>GO TO GITHUB</button>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}

export const Project = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  const scalex = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  return (
    <div className="project" ref={ref}>
      <div className="progress">
        <h1>MES PROJET</h1>
        <motion.div style={{ scaleX: scalex }} className="progressBar" />
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Project;
