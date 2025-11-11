import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import theme from "../../theme/theme";

const phrases = [
  {
    text: "Auditoria de procesos\noperativos",
    color: theme.customColors.textGradientTitleBlue,
  },
  {
    text: "Calidad de servicio con\nMystery Shopper",
    color: theme.customColors.textGradientTitleGreen,
  },
  {
    text: "NPS y satisfacción\ndel cliente",
    color: theme.customColors.textGradientTitlePurple,
  },
  {
    text: "Formularios digitales\ncon IA",
    color: theme.customColors.textGradientTitleYellow,
  },
];

export default function AnimatedTextCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ height: "120px", overflow: "hidden", position: "relative" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={phrases[index].text}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ position: "absolute", width: "100%" }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 600,
              background: phrases[index].color,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              whiteSpace: "pre-line",
            }}
          >
            {phrases[index].text}
          </Typography>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}
