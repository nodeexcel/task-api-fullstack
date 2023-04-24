import styles from "@/styles/home/Backed.module.css";
import { motion } from "framer-motion";

const BackedSection = () => {

    return (
        <section className={` ${styles.mainDiv} bg-black`}>
            <div className="row text-white">
                <div className={`${styles.leftDiv} col-lg-6 col-md-12 d-flex flex-column`}>
                    <div className="fs-1 fw-bolder my-3">Backed by the best</div>
                    <div className="fs-5 w-md-75 w-sm-100 fw-lighter" style={{ color: "#BABABA" }}>Protected by a multi-level security architecture and is regularly audited to ensure that all of our users are safe.</div>
                </div>
                <div className="col-lg-6 col-md-12 align-items-md-center justify-content-md-center pt-md-0 d-flex justify-content-start p-5 p-sm-0 position-relative">
                    <div className="position-absolute" style={{
                        content: '',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 160,
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
                        zIndex: 3

                    }}></div>
                    <div className={`${styles.verticalScroll} d-flex flex-column py-5`}>
                        {[...new Array(10)].map((img, index) =>
                            <motion.div
                                style={{ display: "flex", flexDirection: "row", justifyContent: "center", background: "transparent", padding: 14 }}
                                key={index}
                                animate={{ y: ["0%", "-100%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                whileHover={{y:0}}
                            >
                                <img src="/assets/images/home/polygon.png" className={index===1 ? styles.imgStyle : styles.logoImg} alt="polygon" />
                                <img src="/assets/images/home/biconomy.png" className={index===1 ? styles.imgStyle : styles.logoImg} alt="biconomy" />

                            </motion.div>
                        )}
                    </div>
                    <div className="position-absolute" style={{
                        content: '',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',

                    }}>
                    </div>
                </div>
            </div>
        </section>
    );
};
// 
export default BackedSection