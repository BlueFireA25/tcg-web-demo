import { Box, Grid, Typography } from "@mui/material";
import Footer from "../components/Footer/Footer";
import theme from "../theme/theme";

function App() {
  return (
    <>
      <Grid
        container
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
        px={2}
        py={4}
        mx={"auto"}
        sx={{ maxWidth: "1488px" }}
      >
        <Box
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
          mb={3}
        >
          <Typography variant="h1" fontWeight={600} textAlign={"center"}>
            Nosotros
          </Typography>
          <Typography
            variant="h2"
            align="center"
            sx={{
              background: theme.customColors.textGradientTitleBlue,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              whiteSpace: "pre-line",
            }}
          >
            Nuestro ADN y valores
          </Typography>
        </Box>
        <Box sx={{ maxWidth: "729px" }}>
          <Typography variant="body1" textAlign={"center"}>
            Somos una empresa apasionada por las experiencias, que busca
            promover la excelencia de le ejecución de cada punto de contacto con
            el cliente. Todo en un ámbito de respeto, donde es primordial la
            felicidad de nuestros colaboradores y la permanente búsqueda del
            hacer las cosas de manera correcta.
          </Typography>
        </Box>
      </Grid>

      {/* Values */}
      <Grid
        container
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
        py={8}
        px={2}
        mx={"auto"}
        sx={{ maxWidth: "1488px" }}
      >
        <Box
          component="img"
          src={`./images/about/teamtcg.webp`}
          alt="Equipo de TCG Scout"
          sx={{
            width: "100%",
            objectFit: "cover",
            borderRadius: "24px 24px 0 0",
          }}
        />
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{
            backgroundColor: "#323237",
            borderRadius: "0px 0px 24px 24px",
            py: 4,
          }}
        >
          {[
            { src: "./images/about/TCGIntegrity.avif", label: "#INTEGRIDAD" },
            { src: "./images/about/TCGPasion.avif", label: "#PASIÓN" },
            { src: "./images/about/TCGExcellence.avif", label: "#EXCELENCIA" },
            { src: "./images/about/TCGHappy.avif", label: "#FELICIDAD" },
            { src: "./images/about/TCGRespect.avif", label: "#RESPETO" },
          ].map(({ src, label }) => (
            <Grid
              key={label}
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              justifyContent="center"
              alignItems="center"
              gap={2}
              size={{ xs: 6, md: 4 }}
            >
              <Box component="img" src={src} alt={label} />
              <Typography
                variant="h2"
                color="white"
                sx={{
                  fontSize: { xs: "20px", md: "40px" },
                  textAlign: "center",
                }}
              >
                {label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Team TCG */}
      <Grid
        container
        spacing={4}
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
        py={8}
        px={2}
        mx={"auto"}
        sx={{ maxWidth: "1488px" }}
      >
        <Box
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
          mb={3}
        >
          <Typography variant="h2" fontWeight={600} textAlign={"center"}>
            Conozca a las personas increíbles
          </Typography>
          <Typography
            variant="h2"
            align="center"
            sx={{
              background: theme.customColors.textGradientTitleBlue,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              whiteSpace: "pre-line",
            }}
          >
            Detrás de TCG
          </Typography>
        </Box>
        <Grid container justifyContent="space-between">
          {[
            {
              src: "https://cdn.quasar.dev/img/avatar1.jpg",
              label: "Levi Muron",
              rol: "Content Specialist",
            },
            {
              src: "https://cdn.quasar.dev/img/avatar2.jpg",
              label: "Olivia Anderson",
              rol: "Chief Technology Officer",
            },
            {
              src: "https://cdn.quasar.dev/img/avatar3.jpg",
              label: "Tiffany Keel",
              rol: "Chief Financial Officer",
            },
            {
              src: "https://cdn.quasar.dev/img/avatar4.jpg",
              label: "Ethan Mason",
              rol: "Marketing",
            },
            {
              src: "https://cdn.quasar.dev/img/avatar5.jpg",
              label: "Maddy Martin",
              rol: "UX/UI Designer",
            },
            {
              src: "https://cdn.quasar.dev/img/avatar6.jpg",
              label: "Stephany Hsu",
              rol: "Developer",
            },
          ].map(({ src, label, rol }) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
                alignItems="center"
                px={3}
                py={4}
                sx={{
                  border: "4px solid transparent",
                  borderRadius: "16px",
                  boxShadow:
                    "0px 0px 0px 1px rgba(14, 63, 126, 4%), 0px 1px 1px 0px rgba(42, 51, 69, 4%), 0px 3px 3px 0px rgba(42, 51, 70, 4%), 0px 6px 6px 0px rgba(42, 51, 70, 4%), 0px 12px 12px 0px rgba(42, 51, 70, 4%), 0px 24px 24px 0px rgba(14, 63, 126, 4%)",
                  transition: "all 300ms ease-in-out",

                  "&:hover": {
                    border: `4px solid ${theme.palette.primary.main}`,
                    boxShadow: `0 0 12px 2px ${theme.palette.primary.main}40`,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={src}
                  alt={label}
                  sx={{ borderRadius: "1000px", width: "150", height: "150px" }}
                  mb={2}
                />
                <Typography
                  variant="h5"
                  fontWeight={600}
                  textAlign={"center"}
                  mb={0.5}
                >
                  {label}
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontSize={16}
                  fontWeight={600}
                  textAlign={"center"}
                  color="#B2B2B2"
                >
                  {rol}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
