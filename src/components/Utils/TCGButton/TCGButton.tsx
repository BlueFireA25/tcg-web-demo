import React from "react";
import { Button, Box, type ButtonProps } from "@mui/material";
import theme from "../../../theme/theme";
import "./TCGButton.css";

interface TCGButtonProps extends ButtonProps {
  text?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: React.ReactElement<any>;
  background?: string;
}

const TCGButton: React.FC<TCGButtonProps> = ({
  text = "",
  icon,
  onClick,
  variant = "contained",
  sx = {},
  background = theme.customColors?.primaryGradient,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className="TCGbutton"
      startIcon={
        icon ? (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {React.cloneElement(icon, { sx: { fontSize: "1.5rem" } })}
          </Box>
        ) : undefined
      }
      sx={{
        background: background,
        borderRadius: "1000px",
        padding: "10px 20px",
        textTransform: "none",
        ...sx,
      }}
      {...(props.href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {text}
    </Button>
  );
};

export default TCGButton;
