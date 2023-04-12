import { motion } from "framer-motion";
import styles from '../../styles/home/NewsSection.module.css';

const NewsSection = () => {
    const newsData = [
        {
            src: "/assets/images/home/googleIcon.svg",
            height: 40,
            width: 200,
        }, {
            src: "/assets/images/home/linkedInIcon.svg",
            height: 35,
            width: 200,
        }, {
            src: "/assets/images/home/redditIcon.svg",
            height: 40,
            width: 200,
        }, {
            src: "/assets/images/home/facebookIcon.svg",
            height: 30,
            width: 200,
        },
        {
            src: "/assets/images/home/googleIcon.svg",
            height: 40,
            width: 200,
        }, {
            src: "/assets/images/home/linkedInIcon.svg",
            height: 35,
            width: 200,

        }, {
            src: "/assets/images/home/redditIcon.svg",
            height: 40,
            width: 200,
        }, {
            src: "/assets/images/home/facebookIcon.svg",
            height: 30,
            width: 200,
        },

    ]
    return (
        <section className={styles.mainDiv}>
            <div className="d-flex justify-content-center fs-1 my-4 py-5">Plena in the News</div>
            <div>
            <motion.div
                style={{ display: "inline-block", width: "100%", display: "flex", background: "transparent", padding: 20 }}
                animate={{ x: ["100%", "-100%"] }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
                {
                    newsData.map((img, index) => <img src={img.src} width={img.width} height={img.height} />)
                }
            </motion.div>
            <motion.div
                style={{ display: "inline-block", width: "100%", display: "flex", padding: 20 }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
                {
                    newsData.map((img, index) => <img src={img.src} width={img.width} height={img.height} />)
                }
            </motion.div>
            </div>
        </section>

    );
};
export default NewsSection