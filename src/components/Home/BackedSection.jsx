import { motion } from "framer-motion";
import styles from "@/styles/home/Backed.module.css"
const BackedSection = () => {
    // return      <SlotMachine/>;
    // <div style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));">

    return (
        <section className={` ${styles.mainDiv} bg-black`}>
            <div className="row text-white"
            >
                <div className={`${styles.leftDiv} col-lg-6 col-md-12 d-flex flex-column`}>
                    <div className="fs-1 fw-bolder my-3">Backed by the best</div>
                    <div className="fs-4">Protected by a multi-level security architecture and is regularly audited to ensure that all of our users are safe.</div>
                </div>
                <div className="col-lg-6 col-md-12 align-items-md-center justify-content-md-center pt-md-0 d-flex justify-content-start p-5 p-sm-0 position-relative"
                >
                    <div className="d-flex flex-column py-5" style={{ height: 500, overflowY: "hidden" }}>
                        {[...new Array(5)].map((img, index) =>
                            <motion.div
                                style={{ display: "flex", flexDirection: "column", display: "flex", background: "transparent", padding: 20 }}
                                key={index}
                                animate={{ y: ["0%", "-100%"] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                            >
                                <img src="/assets/images/home/polygon.svg" className={styles.logoImg} alt="polygon" />
                            </motion.div>
                        )}
                        {[...new Array(5)].map((img, index) =>
                            <motion.div
                                key={index}
                                style={{ display: "flex", flexDirection: "column", display: "flex", background: "transparent", padding: 20 }}
                                animate={{ y: ["0%", "-100%"] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                            >
                                <img src="/assets/images/home/polygon.svg" className={styles.logoImg} alt="polygon" />
                            </motion.div>
                        )}
                    </div>
                    <div className="d-flex flex-column py-5" style={{ height: 500, overflowY: "hidden" }}>
                        {[...new Array(5)].map((img, index) =>
                            <motion.div
                                key={index}
                                style={{ display: "flex", flexDirection: "column", display: "flex", background: "transparent", padding: 20 }}
                                animate={{ y: ["0%", "-100%"] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            >
                                <img src="/assets/images/home/biconomy.svg" className={styles.logoImg} alt="polygon" />
                            </motion.div>
                        )}
                        {[...new Array(5)].map((img, index) =>
                            <motion.div
                                key={index}
                                style={{ display: "flex", flexDirection: "column", display: "flex", background: "transparent", padding: 20 }}
                                animate={{ y: ["0%", "-100%"] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            >
                                <img src="/assets/images/home/biconomy.svg"  className={styles.logoImg} alt="polygon" />
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
export default BackedSection