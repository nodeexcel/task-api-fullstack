import { motion } from "framer-motion";

const BackedSection = () => {

    return (
        <div style={{ background: "black" }}>
            <div className="row">
                <div className="col-6 text-light d-flex justify-content-center flex-column align-items-start">
                    <div>Backed by the best</div>
                    <div>Protected by a multi-level security architecture and is regularly audited to ensure that all of our users are safe.</div>
                </div>
                <div className="col-6 d-flex">
                    <motion.div
                        style={{ display: "flex",flexDirection:"column", display: "flex", background: "black", padding: 20 }}
                        animate={{ y: ["50%", "-50%"] }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    >
                        <img src="/assets/images/home/polygon.svg" width={200} height={40} alt="polygon"/>
                    </motion.div>
                    <motion.div
                        style={{ display: "flex",flexDirection:"column", display: "flex", background: "black", padding: 20 }}
                        animate={{ y: ["-50%", "50%"] }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    >
                        <img src="/assets/images/home/biconomy.svg" width={200} height={40} alt="polygon"/>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
export default BackedSection