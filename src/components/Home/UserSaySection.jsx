import { motion } from "framer-motion";
import FeaturesSection from "./FeaturesSection";

const UserSaySection = () => {
    const userSayData = [
        {
            text: "Bonjour, Excellente application que j’ai depuis juin dernier ☺️ les gains se cumulent tous seuls à chaque achat",
            rating: 4
        },
        {
            text: "’étais sceptique au début .. mais application géniale ! Elle permet de gagner du cashback à chaque passage en caisse dans nos enseignes préférées ! Je recommande à 100%",
            rating: 5
        },
        {
            text: 'Bonjour, Excellente application que j’ai depuis juin dernier ☺️ les gains se cumulent tous seuls à chaque achat',
            rating: 4
        },
        {
            text: "J'étais sceptique au début je dois le reconnaître mais vous pouvez y aller sans crainte !",
            rating: 3
        },
        {
            text: "J'étais sceptique au début je dois le reconnaître mais vous pouvez y aller sans crainte !",
            rating: 4
        }
    ]
    return (
        <div 
        className="bg-dark"
        style={{
            backgroundImage: "url(/assets/images/home/userBg.svg)", backgroundPosition: "center",
            backgroundSize: "cover"
        }}>
      <FeaturesSection />

            <div className="text-light d-flex justify-content-center fs-1">What our users say 💬</div>
            <div className="d-flex justify-content-center fs-5" style={{ color: "#BABABA" }}>Protected by a multi-level security <br />architecture and is regularly</div>
            <motion.div
                style={{ display: "inline-block", width: "150%", display: "flex", color: "white" }}
                animate={{ x: ["100%", "-100%"] }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
                {userSayData.map((data) => {
                    return (
                        <>
                            <div className="d-flex flex-column justify-content-between" style={{ border: "1px solid white", borderRadius: 20, width: "600px", padding: "30px", margin: "30px" }}>
                                <div className="row">{data?.text}</div>
                                <div className="row d-flex justify-content-between w-full">
                                    <div className="col-6">
                                        <img src="/assets/images/home/playStoreIcon.svg" height={30} width={30} alt="playstore" className="me-2" />
                                        Logan
                                    </div>
                                    <div className="col-6 text-end">
                                        {new Array(data?.rating).fill(
                                            <img src="/assets/images/home/star.svg" alt='star' width={20} height={20} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </motion.div>
            <motion.div
                style={{ display: "inline-block", width: "150%", display: "flex", color: "white", padding: 20 }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
                {userSayData.map((data) => {
                    return (
                        <>
                            <div className="d-flex flex-column justify-content-between" style={{ border: "1px solid white", borderRadius: 20, width: "600px", padding: "30px", margin: "30px" }}>
                                <div className="row">{data?.text}</div>
                                <div className="row d-flex justify-content-between w-full">
                                    <div className="col-6">
                                        <img src="/assets/images/home/playStoreIcon.svg" height={30} width={30} alt="playstore" className="me-2" />
                                        Logan
                                    </div>

                                </div>


                            </div>
                        </>
                    )
                })}
            </motion.div>
        </div>

    );
};
export default UserSaySection