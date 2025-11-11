import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Typography } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import "./Carousel.css";

interface CarouselImage {
  logo: string;
  name: string;
  position: string;
  src: string;
  caption: string;
}

const Carousel = ({ images }: { images: CarouselImage[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#ff00008e",
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring" as const, stiffness: 1000, damping: 10 },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            className="carousel-images__background"
            src={images[currentIndex].src}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            variants={slideVariants}
          />
        </AnimatePresence>
        <Box
          className="carousel-header"
          display={"flex"}
          alignItems={"center"}
          gap={2}
        >
          <Box
            component="img"
            src={images[currentIndex].logo}
            alt={images[currentIndex].position}
            sx={{
              position: "relative",
              objectFit: "cover",
              width: "30px",
              height: "30px",
            }}
          />
          <Typography variant="body2">
            {images[currentIndex].name} - {images[currentIndex].position}
          </Typography>
        </Box>
        <Box className="carousel-caption">
          <Typography variant="body2">
            {images[currentIndex].caption}
          </Typography>
        </Box>
        <div className="slide_direction">
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="left"
            onClick={handlePrevious}
          >
            <ArrowBackIosNewOutlinedIcon fontSize="large" />
          </motion.div>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="right"
            onClick={handleNext}
          >
            <ArrowForwardIosOutlinedIcon />
          </motion.div>
        </div>
      </div>
      <div className="carousel-indicator">
        {images.map((_image: CarouselImage, index: number) => (
          <motion.div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={currentIndex === index ? "animate" : ""}
            whileHover="hover"
            variants={dotsVariants}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
