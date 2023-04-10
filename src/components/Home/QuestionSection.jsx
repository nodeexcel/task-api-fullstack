import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import NewsSection from './NewsSection';
import PortfolioSection from './PortfolioSection';
import Footer from '../Footer';

const QuestionSection = () => (
    <div className='bg-black'
        style={{
            backgroundImage: "url(/assets/images/home/userBg.svg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundColor: "black"
        }}
    >
        <div className='container'>
            <div className='text-white d-flex flex-column' style={{ width: "80%", margin: "auto" }}>
                <div className='d-flex justify-content-sm-center justify-content-start align-items-center'>
                    <div className='fs-1 fw-bolder'>Have more questions? </div>
                    <img src="/assets/images/home/bouyIcon.webp" height="50" className='ms-2' width="50" alt="" />
                </div>

                <div className='fs-5'>Read our <span className='text-primary'>support document</span> to find out more</div>
            </div>
            <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
                <Accordion.Item className="AccordionItem" value="item-1">
                    <AccordionTrigger>What is Plena crypto wallet?</AccordionTrigger>
                    <AccordionContent>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur iusto quos voluptatibus modi ad, vel molestiae veritatis aperiam assumenda nobis facilis dolore aut, animi provident quaerat eius fugiat debitis quas!</AccordionContent>
                </Accordion.Item>

                <Accordion.Item className="AccordionItem" value="item-2">
                    <AccordionTrigger>What makes Plena wallet the most secured among others?</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sit veritatis, accusamus perferendis id perspiciatis dolore sequi qui corrupti dignissimos voluptatum adipisci non, at autem nemo earum provident vel odit!
                    </AccordionContent>
                </Accordion.Item>

                <Accordion.Item className="AccordionItem" value="item-3">
                    <AccordionTrigger>Where can I download the Plena wallet App?</AccordionTrigger>
                    <Accordion.Content className="AccordionContent">
                        <div className="AccordionContentText">
                            Plena App can be downloaded on the <span className='text-primary'>App Store</span> on <span className='text-primary'>Apple devices</span> or Play Store on Android Devices
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>
        </div>
        <NewsSection />
        <PortfolioSection />
        <Footer />

    </div>
);

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
            className={classNames('AccordionTrigger', className)}
            {...props}
            ref={forwardedRef}
        >
            {children}
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>
    </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
        className={classNames('AccordionContent', className)}
        {...props}
        ref={forwardedRef}
    >
        <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
));

export default QuestionSection;