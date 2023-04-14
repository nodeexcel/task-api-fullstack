import { motion } from "framer-motion";

const BackedSection = () => {
    // return      <SlotMachine/>;
    return (
        <section style={{ background: "black" }}>
            <div className="row">
                <div className="col-6 col-sm-12 text-light d-flex justify-content-start flex-column align-items-start">
                    <div className="fs-1 fw-bolder my-3">Backed by the best</div>
                    <div className="fs-4">Protected by a multi-level security architecture and is regularly audited to ensure that all of our users are safe.</div>
                </div>
                <div className="col-6 col-sm-12 d-flex">
                    <div className="d-flex flex-column" style={{ height: 500, overflowY: "hidden" }}>

                        {[...new Array(5)].map((img, index) =>
                            <motion.div
                                style={{ display: "flex", flexDirection: "column", display: "flex", background: "transparent", padding: 20 }}
                                key={index}
                                animate={{ y: ["0%", "-100%"] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            >
                                <img src="/assets/images/home/polygon.svg" width={200} height={40} alt="polygon" />
                            </motion.div>
                        )}
                        {[...new Array(5)].map((img, index) =>
                            <motion.div
                                key={index}
                                style={{ display: "flex", flexDirection: "column", display: "flex", background: "transparent", padding: 20 }}
                                animate={{ y: ["0%", "-100%"] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            >
                                <img src="/assets/images/home/polygon.svg" width={200} height={40} alt="polygon" />
                            </motion.div>
                        )}
                    </div>
                    <div className="d-flex flex-column" style={{ height: 500, overflowY: "hidden" }}>
                        {[...new Array(5)].map((img, index) =>
                            <motion.div
                                key={index}
                                style={{ display: "flex", flexDirection: "column", display: "flex", background: "transparent", padding: 20 }}
                                animate={{ y: ["0%", "-100%"] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            >
                                <img src="/assets/images/home/biconomy.svg" width={200} height={40} alt="polygon" />
                            </motion.div>
                        )}
                        {[...new Array(5)].map((img, index) =>
                            <motion.div
                                key={index}
                                style={{ display: "flex", flexDirection: "column", display: "flex", background: "transparent", padding: 20 }}
                                animate={{ y: ["0%", "-100%"] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            >
                                <img src="/assets/images/home/biconomy.svg" width={200} height={40} alt="polygon" />
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default BackedSection