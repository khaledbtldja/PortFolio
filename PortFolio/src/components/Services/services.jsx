import "./services.scss";
import { color, motion } from "framer-motion";

const variants ={
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        Transition:{
            duration:100,
            staggerChildren: 1,
        }
    },

}

const Services = () => {
  return (
    <motion.div className="services" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContiner" variants={variants}>
        <p> BOUTELDJA
            <br />KHALED
            </p>
        <hr />
      </motion.div>
      <motion.div className="titleContiner" variants={variants}>
        <div className="title">
            <img src="/people.png" alt="" />
            <h1>
                <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
            </h1>
        </div>
        <div className="title">
            <h1>
                <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Busness
            </h1>
            <button>WHAT WE DO</button>
        </div>
      </motion.div>
      <motion.div className="listeContiner" variants={variants}>
        <motion.div className="box" whileHover={{ background: "lightgray" ,  color: "black"}}>
            <h2>php</h2>
            <img src="/PHP.png" alt="" />
            <p>PHP est un langage de script serveur principalement utilisé pour créer des pages web dynamiques et interactives.</p>
        </motion.div>

        <motion.div className="box" whileHover={{ background: "lightgray" ,  color: "black"}}>
            <h2>jAVASCRIPT</h2>
            <img src="/JS.png" alt="" />
            <p>JavaScript est un langage de programmation utilisé pour rendre les pages web interactives et dynamiques côté client.</p>
        </motion.div>

        <motion.div className="box" whileHover={{ background: "lightgray" ,  color: "black"}}>
            <h2>C#</h2>
            <img src="/csharp.png" alt="" />
            <p>C# est un langage de programmation orienté objet développé par Microsoft.</p>
        </motion.div>

        <motion.div className="box"whileHover={{ background: "lightgray" ,  color: "black"}}>
            <h2>HTML</h2>
            <img src="/html.png" alt="" />
            <p>HTML est le langage standard de balisage utilisé pour créer et structurer les pages web sur internet.</p>
        </motion.div>

        <motion.div className="box" whileHover={{ background: "lightgray" ,  color: "black"}}>
            <h2>CSS</h2>
            <img src="/css-3.png" alt="" />
            <p>CSS est un langage de feuille de style utilisé pour décrire la présentation et la mise en forme des documents HTML.</p>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray" ,  color: "black"}}>
            <h2>JAVA</h2>
            <img src="/java.png" alt="" />
            <p>Java est un langage de programmation orienté objet, polyvalent et indépendant de la plateforme, utilisé pour développer des applications robustes.</p>
        </motion.div>
      </motion.div>


    </motion.div>
  );
}

export default Services;
