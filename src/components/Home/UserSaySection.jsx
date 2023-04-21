import { motion } from "framer-motion";
import { TbMessageCircle } from "react-icons/tb";
import FeaturesSection from "./FeaturesSection";
import BackedSection from "./BackedSection";
import styles from "@/styles/home/UserSaySection.module.css";
const userSayData = [
  {
    text: "Bonjour, Excellente application que j’ai depuis juin dernier ☺️ les gains se cumulent tous seuls à chaque achat",
    rating: 4,
  },
  {
    text: "’étais sceptique au début .. mais application géniale ! Elle permet de gagner du cashback à chaque passage en caisse dans nos enseignes préférées ! Je recommande à 100%",
    rating: 5,
  },
  {
    text: "Bonjour, Excellente application que j’ai depuis juin dernier ☺️ les gains se cumulent tous seuls à chaque achat",
    rating: 4,
  },
  {
    text: "J'étais sceptique au début je dois le reconnaître mais vous pouvez y aller sans crainte !",
    rating: 3,
  },
  {
    text: "J'étais sceptique au début je dois le reconnaître mais vous pouvez y aller sans crainte !",
    rating: 4,
  },
];

const LeftScroll = () => {
    return (
        <motion.div
            className={styles.userDiv}
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
            {userSayData.map((data, index) => {
                return (
                    <>
                        <div key={index} className={`${styles.userSayCard} d-flex flex-column justify-content-between`}>
                            <div className="row mb-5">{data?.text}</div>
                            <div className={` ${styles.starDiv} row d-flex justify-content-between w-full`}>
                                <div className="col-6">
                                    <img src="/assets/images/home/playStoreIcon.svg" height={30} width={30} alt="playstore" className={`me-2 ${styles.playstoreImg}`} />
                                    Logan
                                </div>
                                <div className="col-6 text-end">
                                    {new Array(data?.rating).fill(
                                        <img src="/assets/images/home/star.svg" alt='star' className={`${styles.starImg}`} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </motion.div>
    )

}

const RightScroll = () => {
    return (
        <motion.div
            className={styles.userDiv}
            animate={{ x: ["-100%", "0%"] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
            {userSayData.map((data, index) => {
                return (
                    <>
                        <div key={index} className={` ${styles.userSayCard} d-flex flex-column justify-content-between`}>
                            <div className="row mb-5">{data?.text}</div>
                            <div className={`row d-flex  justify-content-between w-full ${styles.starDiv}`}>
                                <div className="col-6">
                                    <img src="/assets/images/home/playStoreIcon.svg" alt="playstore" className={`me-2 ${styles.playstoreImg}`} />
                                    Logan
                                </div>
                                <div className="col-6 text-end">
                                    {new Array(data?.rating).fill(
                                        <img src="/assets/images/home/star.svg" alt='star' className={` ${styles.starImg}`} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </motion.div>
    )

}

const UserSaySection = () => {
    return (
        <div
            // className="bg-dark"
            style={{
                backgroundImage: "url(/assets/images/home/userBg.svg)", backgroundPosition: "center",
                backgroundSize: "cover"
            }}
            >
            <FeaturesSection />
            <BackedSection />
            <div
                id='review'
                className="text-light d-flex justify-content-center fs-1 mt-5">What our users say <TbMessageCircle />
            </div>
            <div className="d-flex justify-content-center fs-md-4 fs-sm-6 mb-5" style={{ color: "#BABABA", textAlign: "center" }}>Protected by a multi-level security <br />architecture and is regularly</div>
            <div className={styles.desktopData}>
                <div className="d-flex">
                    <LeftScroll />
                    <LeftScroll />
                </div>
                <div className="d-flex">
                    <RightScroll />
                    <RightScroll />
                </div>
            </div>
            
            <div className={styles.mobileData}>  
                {userSayData.map((data, index) => {
                    return (
                        <>
                            <div key={index} className={`d-flex flex-column justify-content-between ${styles.userSayCard}`} style={{flexShrink:0}}>
                                <div className="row text-white mb-3">{data?.text}</div>
                                <div className={`row d-flex  justify-content-between w-full ${styles.starDiv}`}>
                                    <div className="col-6">
                                        <img src="/assets/images/home/playStoreIcon.svg" alt="playstore" className={`me-2 ${styles.playstoreImg}`} />
                                        Logan
                                    </div>
                                    <div className="col-6 text-end">
                                        {new Array(data?.rating).fill(
                                            <img src="/assets/images/home/star.svg" alt='star' className={` ${styles.starImg}`} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
       </div>
  );
};

export default UserSaySection;
