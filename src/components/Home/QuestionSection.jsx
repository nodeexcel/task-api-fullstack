import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import NewsSection from "./NewsSection";
import PortfolioSection from "./PortfolioSection";
import Footer from "../Footer";
import styles from '../../styles/home/QuestionSection.module.css'

const QuestionSection = () => (
  <section
    style={{
      backgroundImage: "url(/assets/images/home/userBg.svg)",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
    id="faq"
  >
    <div className="container py-5">
      <div
        className={`text-white d-flex flex-column ${styles.mainDiv}`}
      >
        <div className={`d-flex justify-content-start align-items-center mt-5 ${styles.heading}`}>
          <h1 className={`${styles.subheading}`}>Have more questions? </h1>
          <img
            src="/assets/images/home/bouyIcon.webp"
            height="50"
            className={styles.image}
            width="50"
            alt=""
          />
        </div>

        <div className={styles.Read}>
          Read our <span className="text-primary">support document</span> to
          find out more
        </div>
      </div>
      <Accordion.Root
        className={`AccordionRoot ${styles.headpoint}`}
        type="single"
        defaultValue="item-1"
        collapsible
      >
        <Accordion.Item className="AccordionItem" value="item-1">
          <AccordionTrigger className={styles.header}>What is Plena crypto wallet?</AccordionTrigger>
          <AccordionContent className={styles.SubHeader}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur iusto quos voluptatibus modi ad, vel molestiae veritatis
            aperiam assumenda nobis facilis dolore aut, animi provident quaerat
            eius fugiat debitis quas!
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-2">
          <AccordionTrigger className={styles.header}>
            What makes Plena wallet the most secured among others?
          </AccordionTrigger>
          <AccordionContent className={styles.SubHeader}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sit
            veritatis, accusamus perferendis id perspiciatis dolore sequi qui
            corrupti dignissimos voluptatum adipisci non, at autem nemo earum
            provident vel odit!
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-3">
          <AccordionTrigger className={styles.header}>
            Where can I download the Plena wallet App?
          </AccordionTrigger>
          <Accordion.Content className={styles.SubHeader}>
            <div className="AccordionContentText">
              Plena App can be downloaded on the{" "}
              <span className="text-primary">App Store</span> on{" "}
              <span className="text-primary">Apple devices</span> or Play Store
              on Android Devices
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
    <div>
      <NewsSection />
      <PortfolioSection />
      <Footer />
    </div>
  </section>
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

export default QuestionSection;
