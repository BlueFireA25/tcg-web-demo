import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button, Grid, Typography } from "@mui/material";
import MuiAccordion, { type AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  type AccordionSummaryProps,
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import Carousel from "./Carousel";

const images = [
  {
    logo: "/images/logos/mcdonals.webp",
    name: "Magdalena García",
    position: "Servicios Administrativos McDonalds",
    src: "https://www.irbootcamp.com/wp-content/uploads/2024/10/mcdonalds_pequenas_acciones_grandes_cambios_empleo_programa_de_integracion_laboral_para_personas_con_habilidades_distintas_capacitacion_guatemala_soy502_11.png",
    caption:
      '"Con TCG hemos logrado una completa visibilidad de nuestro protocolos de atención e imagen, permitiéndonos mantener el estándar de excelencia, en todos nuestros locales desde el año 2022 dando a la fecha un excelente servicio a nuestra compañía."',
  },
  {
    logo: "",
    name: "Magdalena García",
    position: "Servicios Administrativos McDonalds",
    src: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: 'caption: "Atardecer sobre el mar"',
  },
  {
    logo: "",
    name: "Magdalena García",
    position: "Servicios Administrativos McDonalds",
    src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: 'caption: "Atardecer sobre el mar"',
  },
  {
    logo: "",
    name: "Magdalena García",
    position: "Servicios Administrativos McDonalds",
    src: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: 'caption: "Atardecer sobre el mar"',
  },
  {
    logo: "",
    name: "Magdalena García",
    position: "Servicios Administrativos McDonalds",
    src: "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: 'caption: "Atardecer sobre el mar"',
  },
  {
    logo: "",
    name: "Magdalena García",
    position: "Servicios Administrativos McDonalds",
    src: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: 'caption: "Atardecer sobre el mar"',
  },
];

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "24px",
  marginBottom: theme.spacing(2),
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(() => ({
  backgroundColor: "#fff",
  borderRadius: "24px",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(180deg)",
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string>("panel1");

  const handleHover = (panel: string) => {
    setExpanded(panel);
  };

  // const getImageForPanel = () => {
  //   switch (expanded) {
  //     case "panel1":
  //       return images[0];
  //     case "panel2":
  //       return images[1];
  //     case "panel3":
  //       return images[2];
  //     case "panel4":
  //       return images[3];
  //     case "panel5":
  //       return images[3];
  //     default:
  //       return null;
  //   }
  // };

  return (
    <Grid
      container
      spacing={{ xs: 5, md: 10 }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 1 } }}>
        <Carousel images={images} />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 2 } }}>
        {[
          {
            key: "panel1",
            icon: <MenuBookOutlinedIcon fontSize="large" color={"primary"} />,
            title: "TCG Scout para Retail",
            desc: "TCG Scout es la herramienta ideal para gestionar la experiencia en tus tiendas, imagen, ventas y rotación de inventarios.",
          },
          {
            key: "panel2",
            icon: (
              <TrendingUpOutlinedIcon fontSize="large" color={"secondary"} />
            ),
            title: "TCG Scout para Consumo Masivo",
            desc: "Averigua cómo TCG Scout te puede ayudar en tu gestión de tiendas perfectas.",
          },
          {
            key: "panel3",
            icon: (
              <Diversity3OutlinedIcon
                fontSize="large"
                sx={{ color: "teal !important" }}
              />
            ),
            title: "TCG Scout para Gasoil",
            desc: "Gestiona y mide la experiencia de clientes en tu empresa con TCG Scout.",
          },
          {
            key: "panel4",
            icon: (
              <StorefrontOutlinedIcon
                fontSize="large"
                sx={{ color: "purple !important" }}
              />
            ),
            title: "TCG Scout para Servicios",
            desc: "TCG Scout es la herramienta ideal para gestionar la experiencia en tus tiendas, imagen, ventas y rotación de inventarios.",
          },
          {
            key: "panel5",
            icon: (
              <StorefrontOutlinedIcon
                fontSize="large"
                sx={{ color: "purple !important" }}
              />
            ),
            title: "TCG Scout para Restaurantes",
            desc: "Gestiona las ventas, el stock, las tareas de tu personal y la experiencia de tus clientes con TCG Scout.",
          },
        ].map((item) => (
          <Accordion
            key={item.key}
            expanded={expanded === item.key}
            onMouseEnter={() => handleHover(item.key)}
            sx={{ cursor: "default" }}
          >
            <AccordionSummary sx={{ cursor: "default !important" }}>
              <Grid
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                gap={2}
              >
                {item.icon}
                <Typography variant="h3">{item.title}</Typography>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" mb={2}>
                {item.desc}
              </Typography>
              <Button variant="text" endIcon={<ArrowOutwardOutlinedIcon />}>
                Descubre más
              </Button>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </Grid>
  );
}
