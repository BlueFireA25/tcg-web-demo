import React from "react";
import {
  Button,
  Box,
  Divider,
  Grid,
  Typography,
  TextField,
  FormControl,
  Select,
  InputBase,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import theme from "../../theme/theme";

export default function Footer() {
  const [lang, setLang] = React.useState("es");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    setLang(event.target.value);
  };

  const CustomSelect = styled(Select)(({ theme }) => ({
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiSelect-select": {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(1),
      paddingRight: theme.spacing(3),
    },
  }));

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    /* Contact */
    <Grid
      container
      spacing={4}
      justifyContent="center"
      px={2}
      py={8}
      mx={"auto"}
      sx={{ maxWidth: "1488px" }}
    >
      <Grid
        display={"flex"}
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "100%",
        }}
      >
        <Box
          className="subtitle"
          mb={3}
          py={1}
          px={3}
          borderRadius={5}
          sx={{ backgroundColor: "#eef0f3ff" }}
        >
          <Typography variant="h5" align="center">
            Estamos para ti
          </Typography>
        </Box>
        <Typography
          variant="h2"
          align="center"
          mb={6}
          sx={{
            background: theme.customColors.textGradientTitleBlue,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            whiteSpace: "pre-line",
          }}
        >
          Contáctanos
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent={"space-between"}
          sx={{ width: "100%" }}
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            order={{ xs: 2, md: 1 }}
            display="flex"
            flexDirection="column"
            gap={4}
            sx={{
              textAlign: { xs: "center", md: "left" },
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Box>
              <Typography variant="h4" mb={1}>
                The Collace Group
              </Typography>
              <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                {
                  "The Collace Group LLC.\n1000 Brickell Ave. Miami, Florida, USA."
                }
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" mb={1}>
                TCG Riverside
              </Typography>
              <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                {
                  "The Collace Group Panamá S.A. Tel. (+507) 373 7375\nFinancial Park Tower Piso 25, Costa del Este, Panamá."
                }
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" mb={1}>
                TCG Rauland
              </Typography>
              <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                {
                  "The Collace Group Chile SpA. Tel. (+56) 2 2489 5520\nSanta Fe 1762, Quinta Normal, Santiago de Chile."
                }
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" mb={1}>
                TCG Quality Assurance Center
              </Typography>
              <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                {
                  "The Collace Group Perú SAC. Tel. (+51) 1493 7713\nCmte. Espinar 412 Of. 304, Magdalena del Mar, Lima, Perú."
                }
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              display="flex"
              flexDirection="column"
              gap={3}
            >
              {/* Name & LastName */}
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="Nombres"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="Apellidos"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>

              {/* Email */}
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                required
                type="email"
              />

              {/* Message */}
              <TextField
                label="Mensaje"
                variant="outlined"
                fullWidth
                required
                multiline
                minRows={5}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    alignItems: "flex-start",
                  },
                }}
              />

              {/* Send Button */}
              <Button
                type="submit"
                variant="contained"
                startIcon={<SendIcon />}
                sx={{
                  borderRadius: 100,
                  textTransform: "none",
                  alignSelf: "center",
                  px: 11,
                  py: 1.5,
                }}
              >
                Enviar
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ width: "100%", my: 6 }} />

        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignContent={"center"}
          sx={{
            width: "100%",
            "@media (max-width:1089px)": {
              justifyContent: "space-around",
            },
          }}
        >
          <Grid display={"flex"} flexDirection={"column"} gap={2}>
            <Box
              component="img"
              src="./images/TCG_logo.webp"
              alt="Logo de TCG Scout - Seek & Display"
              sx={{
                width: "250px",
                objectFit: "cover",
              }}
            />
            <FormControl variant="outlined" sx={{ minWidth: 140 }}>
              <CustomSelect
                value={lang}
                onChange={handleChange}
                IconComponent={KeyboardArrowDownIcon}
                input={<InputBase />}
                renderValue={() => (
                  <Box display="flex" alignItems="center" gap={1}>
                    <LanguageOutlinedIcon sx={{ color: "#07090aff" }} />
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#2d65ab",
                      }}
                    >
                      {lang === "es" ? "Español" : "English"}
                    </Typography>
                  </Box>
                )}
              >
                <MenuItem value="es">Español</MenuItem>
                <MenuItem value="en">English</MenuItem>
              </CustomSelect>
            </FormControl>
            <Typography variant="body2">© 2018 The Collace Group</Typography>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Box
                component="img"
                src="./images/pdf_logo.svg"
                alt="Logo de PDF"
                sx={{
                  objectFit: "cover",
                }}
              />
              <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
                {"Descarga nuestra política\nde seguridad de la información."}
              </Typography>
            </Box>
          </Grid>
          <Grid alignSelf={"center"}>
            <Typography variant="h4" mb={2}>
              Enlaces
            </Typography>
            <Typography variant="body1" mb={1}>
              Inicio
            </Typography>
            <Typography variant="body1" mb={1}>
              Nosotros
            </Typography>
            <Typography variant="body1" mb={1}>
              Mystery Shopper
            </Typography>
            <Typography variant="body1" mb={1}>
              Auditoria de PDV
            </Typography>
            <Typography variant="body1" mb={1}>
              Blog
            </Typography>
          </Grid>
          <Grid>
            <Grid
              container
              display={"flex"}
              gap={{ xs: 4, sm: 4, md: 10 }}
              justifyContent={{ xs: "center" }}
              alignItems={"center"}
              mb={4}
            >
              <Box>
                <Typography variant="h4" mb={2}>
                  Redes Sociales
                </Typography>
                <Box display={"flex"} gap={3}>
                  <Box
                    component="img"
                    src="./images/facebook_logo.svg"
                    alt="Facebook de TCG Scout"
                    sx={{
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    component="img"
                    src="./images/linkedin_logo.svg"
                    alt="LinkedIn de TCG Scout"
                    sx={{
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    component="img"
                    src="./images/instagram_logo.svg"
                    alt="Instagram de TCG Scout"
                    sx={{
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
              <Box>
                <Typography variant="h4" mb={2} textAlign={"center"}>
                  Descarga la App
                </Typography>
                <Box display={"flex"} gap={3}>
                  <Box
                    component="img"
                    src="./images/googleplay_logo.webp"
                    alt="Google Play"
                    sx={{
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    component="img"
                    src="./images/appstore_logo.webp"
                    alt="App Store"
                    sx={{
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid container display={"flex"} justifyContent={"center"} gap={4}>
              <Box
                component="img"
                src="./images/google_play_protect.webp"
                alt="Icono de Google Play Protect"
                sx={{
                  objectFit: "contain",
                }}
              />
              <Box
                component="img"
                src="./images/iso_logo.webp"
                alt="Certificado Internacional ISO/IEC 27001"
                sx={{
                  width: "120px",
                  objectFit: "contain",
                }}
              />
              <Box
                component="img"
                src="./images/promising_logo.webp"
                alt="Premio Promising"
                sx={{
                  width: "120px",
                  objectFit: "contain",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
