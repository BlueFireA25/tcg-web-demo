import { Box, Divider, Grid, Typography } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import theme from "../../theme/theme";
import { Link } from "react-router-dom";

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
            Infórmate en nuestro
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
            Blog de TCG Scout
          </Typography>
        </Box>
      </Grid>

      {/* Team TCG */}
      <Grid
        container
        spacing={4}
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
        px={2}
        py={8}
        mx={"auto"}
        sx={{ maxWidth: "1488px" }}
      >
        <Grid container justifyContent="space-between">
          {[
            {
              banner: "./images/blog/banner1.webp",
              title:
                "En TCG redefinimos la cultura de atención de nuestros clientes",
              date: "9 Oct 2025 - 2 min.",
            },
            {
              banner: "./images/blog/banner2.webp",
              title:
                "En qué consiste una auditoría de ejecución en el punto de venta",
              date: "23 Sep 2025 - 3 min.",
            },
            {
              banner: "./images/blog/banner3.webp",
              title: "Cómo los datos contribuyen a la experiencia de compra",
              date: "15 Jun 2025 - 3 min.",
            },
            {
              banner: "./images/blog/banner4.webp",
              title:
                "Cómo la gestión de datos aporta a la cadena de suministro",
              date: "7 Abr 2025 - 4 min.",
            },
            {
              banner: "./images/blog/banner5.webp",
              title:
                "Como han cambiado los hábitos en el retail despues de la pandemia",
              date: "9 Mar 2025 - 6 min.",
            },
            {
              banner: "./images/blog/banner6.webp",
              title:
                "La Inteligencia Artificial y el Machine Learning combinado con Big Data",
              date: "27 Ene 2025 - 3 min.",
            },
          ].map(({ banner, title, date }, index) => {
            const baseUrl = "https://www.tcgscout.com/blog";
            const slug = title
              .toLowerCase()
              .replace(/[^\w\s]/g, "")
              .replace(/\s+/g, "-");
            const postUrl = `${baseUrl}/${slug}`;

            const shareUrls = {
              facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                postUrl
              )}`,
              x: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                title
              )}&url=${encodeURIComponent(postUrl)}`,
              linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                postUrl
              )}`,
            };

            return (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box
                  display="flex"
                  flexDirection={"column"}
                  sx={{
                    borderRadius: "16px",
                    boxShadow:
                      "0px 0px 0px 1px rgba(14, 63, 126, 4%), 0px 1px 1px 0px rgba(42, 51, 69, 4%), 0px 3px 3px 0px rgba(42, 51, 70, 4%), 0px 6px 6px 0px rgba(42, 51, 70, 4%), 0px 12px 12px 0px rgba(42, 51, 70, 4%), 0px 24px 24px 0px rgba(14, 63, 126, 4%)",
                    transition: "all 300ms ease-in-out",
                    "&:hover": {
                      boxShadow: `0 0 12px 2px ${theme.palette.primary.main}40`,
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={banner}
                    alt={title}
                    sx={{
                      borderRadius: "16px 16px 0 0",
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />

                  <Box px={3} py={3}>
                    <Box display={"flex"} alignItems={"center"} gap={2} mb={2}>
                      <Box
                        component="img"
                        src="${import.meta.env.BASE_URL}images/blog/support.webp"
                        alt="Icono de Soporte TCG Scout"
                        sx={{
                          borderRadius: "16px 16px 0 0",
                          width: "60px",
                        }}
                      />
                      <Box
                        display="flex"
                        flexDirection={"column"}
                        alignItems={"start"}
                        gap={0.5}
                      >
                        <Typography
                          variant="subtitle1"
                          fontWeight={500}
                          color="#B2B2B2"
                        >
                          TCG Scout Support
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          fontSize={16}
                          fontWeight={600}
                          textAlign={"center"}
                          color="primary"
                        >
                          {date}
                        </Typography>
                      </Box>
                    </Box>

                    <Link to={`/blog/${slug}`}>
                      <Typography
                        variant="h5"
                        fontWeight={600}
                        sx={{ textWrap: "auto" }}
                      >
                        {title}
                      </Typography>
                    </Link>

                    <Divider sx={{ width: "100%", my: 3 }} />

                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography
                        variant="subtitle1"
                        fontWeight={400}
                        color="#B2B2B2"
                      >
                        Compartir
                      </Typography>

                      <Box display={"flex"} gap={3}>
                        <Box
                          component="a"
                          href={shareUrls.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Box
                            component="img"
                            src="${import.meta.env.BASE_URL}images/facebook_logo.svg"
                            alt="Facebook de TCG Scout"
                            sx={{
                              width: "32px",
                              height: "32px",
                              objectFit: "contain",
                              cursor: "pointer",
                            }}
                          />
                        </Box>

                        <Box
                          component="a"
                          href={shareUrls.x}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Box
                            component="img"
                            src="${import.meta.env.BASE_URL}images/x_logo.svg"
                            alt="X (Twitter) de TCG Scout"
                            sx={{
                              width: "32px",
                              height: "32px",
                              objectFit: "contain",
                              cursor: "pointer",
                            }}
                          />
                        </Box>

                        <Box
                          component="a"
                          href={shareUrls.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Box
                            component="img"
                            src="${import.meta.env.BASE_URL}images/linkedin_logo.svg"
                            alt="LinkedIn de TCG Scout"
                            sx={{
                              width: "32px",
                              height: "32px",
                              objectFit: "contain",
                              cursor: "pointer",
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
