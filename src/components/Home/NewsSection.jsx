import { motion } from "framer-motion";
import styles from '../../styles/home/NewsSection.module.css';

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

const LeftScroll = () => {
    return (
        <motion.div
            style={{ display: "inline-block", width: "100%", display: "flex", background: "transparent", padding: 20 }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
            {
                newsData.map((img, index) => <img src={img.src} width={img.width} height={img.height} />)
            }

        </motion.div>
    )
}

const RightScroll = () => {
    return (
        <motion.div
            style={{ display: "inline-block", width: "100%", display: "flex", background: "transparent", padding: 20 }}
            animate={{ x: ["-100%", "0%"] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
            {
                newsData.map((img, index) => <img src={img.src} width={img.width} height={img.height} />)
            }
        </motion.div>
    )
}

const NewsSection = () => {
    return (
        <div style={{ background: "transparent", color: "white", padding: 100 }}>
            <div className="d-flex justify-content-center fs-1 my-4">Plena in the News</div>
            <div className="d-flex ">
                <LeftScroll />
                <LeftScroll />
            </div>
            <div className="d-flex">
                <RightScroll />
                <RightScroll />
            </div>
        </div>
    );
};
export default NewsSection