import { useRef, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function LogosCarousel({
  logos,
  reverse = false,
}: {
  logos: string[];
  reverse?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth / 2);
    }
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{ display: "inline-flex", whiteSpace: "nowrap" }}
      animate={{ x: reverse ? [-width, 0] : [0, -width] }}
      transition={{
        ease: "linear",
        duration: 60,
        repeat: Infinity,
      }}
    >
      {[...logos, ...logos].map((src, i) => (
        <Box
          key={i}
          component="img"
          src={src}
          alt={`logo-${i}`}
          sx={{
            height: 60,
            mx: { xs: 2, md: 5 },
            filter: "grayscale(1)",
            opacity: 0.8,
            flexShrink: 0,
          }}
        />
      ))}
    </motion.div>
  );
}
