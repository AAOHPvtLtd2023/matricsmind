'use client';

import { motion } from 'framer-motion';
import {
  VideoPlayer,
  VideoPlayerContent,
} from '../../../../components/ui/kibo-ui/video-player';

const VideoPlayerComponent = () => {
  return (
    <div className="relative flex justify-center items-center w-full py-8">
      {/* Floating Background Glow (Top Right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 100, y: -100 }}
        animate={{ opacity: 0.4, scale: 1.2, x: 0, y: 0 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-72 h-72 bg-[#ff9100] blur-3xl rounded-full z-0 pointer-events-none"
        style={{ transform: "translate(30%, -30%)" }}
      />

      {/* Video Player */}
      <VideoPlayer className="relative overflow-hidden rounded-xl w-[90vw] shadow-lg z-10">
        <VideoPlayerContent
          crossOrigin=""
          muted
          preload="auto"
          slot="media"
          src="https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4"
        />
      </VideoPlayer>

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 pointer-events-none z-20"
      >
        <motion.h2
          className="text-3xl sm:text-5xl font-bold mb-3 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
         Transform your vision into reality
        </motion.h2>
        <motion.p
          className="text-sm sm:text-lg max-w-2xl mb-6 drop-shadow-md"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          From Vision to Visuals — We Make It Happen by Creating What You Imagine.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#ff9100] text-black font-semibold px-6 py-3 rounded-full shadow-lg pointer-events-auto"
        >
          Get a Free Quote
        </motion.button>
      </motion.div>
    </div>
  );
};

export default VideoPlayerComponent;
