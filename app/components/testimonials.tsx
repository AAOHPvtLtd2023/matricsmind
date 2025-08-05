"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Geist } from "next/font/google";
import Image from "next/image";
import { cn } from "../../lib/utils";

const space = Geist({
  subsets: ["latin"],
  variable: "--font-carlito",
  weight: "400",
});

const testimonials = [
  {
    name: "Kaustubh Singh Baghal",
    username: "@kaustubh",
    imageSrc: "/assets/avatars/avatar-1.webp",
    text:
      "The team delivered high-quality, visually stunning motion graphics that really elevated our brand’s storytelling. The animations were not only professional but also perfectly aligned with our vision. Their SEO work on our YouTube channel significantly improved our video rankings and visibility. We've seen noticeable growth in both traffic and subscribers thanks to their strategic approach. They handled our social media campaigns end-to-end, and the results were outstanding. Engagement rates went up, our audience grew steadily, and the brand presence across platforms became much stronger. Highly recommend Matrics Mind to anyone looking for creative and data-driven digital marketing support!",
  },
  {
    name: "Engineer Reveals",
    username: "@engineerreveals",
    imageSrc: "/assets/avatars/avatar-2.webp",
    text:
      "They delivered end-to-end website design, impactful YouTube SEO, and high-quality video editing with motion graphics—all of which significantly boosted our online presence, audience engagement, and content performance. Truly a data-driven and creative team! We highly recommend Metrics Mind to anyone seeking creative and results-driven digital marketing solutions!",
  },
  {
    name: "Saffron Patriot",
    username: "@saffronpatriot",
    imageSrc: "/assets/avatars/avatar-3.webp",
    text:
      "They create high-quality and engaging YouTube videos that truly reflect our brand and keep our audience interested. The visuals and editing are always on point! Highly recommend Metrics Mind for creative and results-driven digital marketing!",
  },
  {
    name: "Vichaarone",
    username: "@vichaarone",
    imageSrc: "/assets/avatars/avatar-4.webp",
    text:
      "We’re impressed with Metrics Mind’s content creation, motion graphics, video editing, and YouTube SEO – professional work with great outcomes!",
  },
  {
    name: "Gourav Kumar Singh",
    username: "@gouravkumar",
    imageSrc: "/assets/avatars/avatar-5.webp",
    text:
      "Metrics Mind did a great job with our website creation and SEO audit. The site looks clean and professional, and the SEO insights helped us improve our visibility and performance.",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6"
    >
      {[
        ...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, imageSrc, name, username }) => (
              <div
                key={text}
                className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-secondary/10 to-card p-10 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]"
              >
                {/* rose color gradient */}
                <div className="absolute -left-5 -top-5 -z-10 h-40 w-40 rounded-full bg-gradient-to-b from-primary/10 to-card blur-md" />
                <div>{text}</div>
                <div className="mt-5 flex items-center gap-2">
                  <Image
                    src={imageSrc}
                    alt={name}
                    height={40}
                    width={40}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium leading-5 tracking-tight">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        )),
      ]}
    </motion.div>
  </div>
);

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleShareClick = () => {
    const tweets = require("../../lib/tweet-contents").tweetContents;
    const randomTweet = tweets[Math.floor(Math.random() * tweets.length)];
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        randomTweet
      )}`,
      "_blank"
    );
  };

  return (
    <section id="reviews" className="bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="mx-auto max-w-[540px]"
        >
          {/* <div className="flex justify-center">
            <button
              type="button"
              className="group relative z-[60] mx-auto rounded-full border border-zinc-500/80 bg-background/50 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/[0.1] active:scale-100 dark:border-border md:text-sm"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent shadow-2xl transition-all duration-500 group-hover:h-px"></div>
              <span className="relative">Testimonials</span>
            </button>
          </div> */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative inline-block px-0 py-2 mx-auto mt-6"
          >
            <h2
              className={cn(
                "bg-gradient-to-r from-foreground/60 via-foreground to-foreground/60 bg-clip-text text-center text-3xl font-semibold tracking-tighter text-transparent dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 md:text-[51px] md:leading-[60px]",
                space.className
              )}
            >
              Words From Our Partners
            </h2>

            {/* Glowing Background Effect */}
            <div className="absolute inset-0 mx-auto w-full max-w-xs h-[50px] blur-2xl rounded-full bg-[#1c3784]/30 z-0"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-lg text-white/70 max-w-xl mx-auto"
          >
            Client Experiences That Speak Volumes
          </motion.p>
        </motion.div>
        <div className="flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] mt-10">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
        {/* <div className="-mt-8 flex justify-center">
          <button
            onClick={handleShareClick}
            className="group relative inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/60 hover:bg-primary/10 active:scale-95"
          >
            <div className="absolute inset-x-0 -top-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <svg
              className="h-4 w-4 text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
            Share your experience
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
