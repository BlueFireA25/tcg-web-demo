import { Box, Grid, Typography } from "@mui/material";
// import AnimatedTextCarousel from "../../components/Utils/TextCarousel";
// import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
// import TCGButton from "../../components/Utils/TCGButton/TCGButton";
import StepItems from "../components/Utils/StepItems/StepItems";
import LogoCarousel from "../components/Utils/LogosCarousel";
import Footer from "../components/Footer/Footer";
import CustomizedAccordions from "../components/Utils/AccordionUtils/Accordion";
import theme from "../theme/theme";

const logos = [
  "./images/logos/maicao.webp",
  "./images/logos/maravilla.webp",
  "./images/logos/mccain.webp",
  "./images/logos/mcdonals.webp",
  "./images/logos/mercedes.webp",
  "./images/logos/minerva.webp",
  "./images/logos/mondelez.webp",
  "./images/logos/newell.webp",
  "./images/logos/notco.webp",
  "./images/logos/nutresa.webp",
  "./images/logos/p&g.webp",
  "./images/logos/pantera.webp",
  "./images/logos/pdc.webp",
  "./images/logos/pepsico.webp",
  "./images/logos/oster.webp",
  "./images/logos/petrobas.webp",
  "./images/logos/philip.webp",
  "./images/logos/santander.webp",
  "./images/logos/shell.webp",
  "./images/logos/siena.webp",
  "./images/logos/softys.webp",
  "./images/logos/terpel.webp",
  "./images/logos/tommy.webp",
  "./images/logos/tottus.webp",
  "./images/logos/unilever.webp",
  "./images/logos/valket.webp",
  "./images/logos/walmart.webp",
  "./images/logos/watts.webp",
  "./images/logos/kimberly.webp",
  "./images/logos/mac.webp",
];

const logosRow1 = logos.slice(
  0,
  logos.findIndex((l) => l.includes("oster")) + 1
);
const logosRow2 = logos.slice(logos.findIndex((l) => l.includes("oster")) + 1);

function App() {
  return (
    <>
      {/* Presentation */}
      <Grid
        container
        justifyContent="center"
        px={3}
        mx={"auto"}
        sx={{ maxWidth: "1872px", height: { xs: "60vh", md: "60vh" } }}
      >
        <video
          width="100%"
          autoPlay
          muted
          loop
          playsInline
          style={{
            borderRadius: "24px",
            objectFit: "cover",
          }}
        >
          <source src="/videos/presentation.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>
      </Grid>

      {/* <Grid
        container
        spacing={4}
        justifyContent="center"
        px={2}
        py={4}
        mx={"auto"}
        sx={{ maxWidth: "1488px" }}
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            order: { xs: 2, md: 1 },
          }}
        >
          <Typography variant="h1">TCG Scout App</Typography>
          <AnimatedTextCarousel />
          <Typography variant="body1" mt={3} mb={4}>
            Entrega directrices y tareas a tu personal, controla la ejecución de
            tus puntos de venta y mide los principales indicadores de negocio
            con la tecnología{" "}
            <Box component="span" fontWeight="bold">
              Teleaudit®
            </Box>
            .
          </Typography>
          <TCGButton
            text="Solicitar Información"
            icon={<SupportAgentOutlinedIcon />}
            background={theme.customColors?.primaryGradient}
            href="https://portal.tcgscout.com/"
          />
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            order: { xs: 1, md: 2 },
          }}
        >
          <video
            width="100%"
            autoPlay
            muted
            loop
            playsInline
            style={{
              borderRadius: "24px",
              objectFit: "cover",
              height: "340px",
            }}
          >
            <source src="/videos/presentation.mp4" type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </Grid>
      </Grid> */}

      {/* Companies */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        px={2}
        pt={8}
        pb={16}
        overflow={"hidden"}
      >
        <Typography
          variant="h2"
          align="center"
          mb={6}
          sx={{
            fontFamily: "Inter, Arial, sans-serif",
            fontWeight: 400,
          }}
        >
          Únete a más +50 empresas lideres que han confiado en TCG
        </Typography>

        {/* Logos */}
        <LogoCarousel logos={logosRow1} />
        <LogoCarousel logos={logosRow2} reverse />
      </Grid>

      {/* Plans */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        px={2}
        py={4}
        mx={"auto"}
        sx={{ maxWidth: "1488px" }}
      >
        <StepItems></StepItems>
      </Grid>

      {/* Utils TCG */}
      <Grid
        mx={"auto"}
        px={2}
        py={8}
        display={"flex"}
        justifyContent={"center"}
        sx={{ backgroundColor: "#eef0f3ff", borderRadius: "24px" }}
      >
        <Grid
          container
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
          sx={{
            maxWidth: "1488px",
          }}
        >
          <Box
            mb={3}
            py={1}
            px={3}
            borderRadius={5}
            sx={{
              backgroundColor: "#fff",
              width: "fit-content",
            }}
          >
            <Typography variant="h5" align="center">
              Descubre
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
            Maneras de utilizar TCG
          </Typography>
          <CustomizedAccordions />
        </Grid>
      </Grid>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
