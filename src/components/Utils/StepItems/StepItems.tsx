import * as React from "react";
import {
  Box,
  Divider,
  Stepper,
  Step,
  StepButton,
  Typography,
  Grid,
  ButtonBase,
} from "@mui/material";
import TCGButton from "../../../components/Utils/TCGButton/TCGButton";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import theme from "../../../theme/theme";
import "./StepItems.css";

const steps = [
  {
    label: "TCG Scout APP",
    labelColor: theme.palette.primary.main,
    logo: "tcg_app_icon",
  },
  {
    label: "Auditoría de PDV",
    labelColor: theme.palette.secondary.main,
    logo: "auditpdv_icon",
  },
  {
    label: "Mystery Shopper",
    labelColor: theme.palette.purple.main,
    logo: "mystery_shopper_icon",
  },
];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  function StepContent({ activeStep }: { activeStep: number }) {
    const renderStepContent = () => {
      switch (activeStep) {
        case 0:
          return (
            <>
              <Grid container spacing={5}>
                <Grid
                  size={{ sm: 12, md: 4 }}
                  sx={{
                    borderRadius: "16px",
                    borderTop: `4px solid ${theme.palette.primary.main}`,
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                    padding: "24px 32px",
                    width: "fit-content",
                    height: "fit-content",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: "16px",
                      width: "fit-content",
                      whiteSpace: "nowrap",
                    }}
                    my={3}
                    py={1}
                    px={2}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ fontFamily: "TWKLausanne, Arial, sans-serif" }}
                      color="white"
                    >
                      Procesos Operativos
                    </Typography>
                  </Box>

                  <Typography variant="h3">TCG Scout APP</Typography>
                  <Typography variant="subtitle1" color="gray" mb={5}>
                    Por licencia de la App
                  </Typography>
                  <TCGButton
                    text="Elegir el mejor plan"
                    icon={<SupportAgentOutlinedIcon />}
                    background={theme.customColors?.primaryGradient}
                    href="https://portal.tcgscout.com/"
                  />
                  <Divider sx={{ my: 5 }} />
                  <ul>
                    {[
                      "Cerco Geo-Referenciado.",
                      "Hora de Check-In.",
                      "Posibilidad de hacer tareas Offline.",
                      "Tiempos y movimientos por tarea.",
                      "Tareas de ejecución de PDV.",
                      "Tareas de Stock y levantamiento de precios.",
                      "Tecnología Teleaudit para auditoría remota de vitrinismo y exhibiciones.",
                      "Registro de fotografías y firma.",
                      "Escaneo de códigos de barra y QR.",
                      "Integración con Stock de PDV y Centro de Distribución*.",
                      "Integración con ventas Sell-In y Sell-Out*.",
                    ].map((text, i) => (
                      <Typography
                        key={i}
                        component="li"
                        variant="body2"
                        sx={{ mb: 1.5 }}
                      >
                        {text}
                      </Typography>
                    ))}
                  </ul>
                </Grid>

                <Grid size={{ sm: 12, md: 8 }}>
                  <Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      mb={3}
                      gap={1}
                    >
                      <GppGoodOutlinedIcon
                        color="primary"
                        sx={{ fontSize: "60px" }}
                      />
                      <Typography variant="h3">Seguridad</Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{ whiteSpace: "pre-line" }}
                      mb={4}
                    >
                      {`TCG cuenta con la certificación de seguridad de los datos `}
                      <Box component="span" fontWeight="bold">
                        ISO27001
                      </Box>
                      {` y genera una cultura de administración, entregando directrices y midiendo internamente los distintos KPI's de tu negocio. 
                      
                      TCG Scout está disponible en App Store y Play Store con verificación Google Play Protect.`}
                    </Typography>

                    <Grid
                      container
                      spacing={3}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid
                        size={{ md: 12, lg: 6 }}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Box
                          component="img"
                          src={`/images/TCGExplain/security_person.webp`}
                          alt="Imagen de seguridad de la App de TCG Scout"
                          sx={{
                            width: "360px",
                            objectFit: "cover",
                            borderRadius: "4px",
                            transition: "all 0.3s ease",
                          }}
                        />
                      </Grid>

                      <Grid size={{ md: 12, lg: 6 }}>
                        <Grid container spacing={3}>
                          <Grid
                            size={{ xs: 12, sm: 6 }}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Box
                              component="img"
                              src="/images/iso_logo.webp"
                              alt="Certificado Internacional ISO/IEC 27001"
                              sx={{
                                width: "170px",
                                borderRadius: "8px",
                                transition: "all 0.3s ease",
                              }}
                            />
                          </Grid>

                          <Grid
                            size={{ xs: 12, sm: 6 }}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Box
                              component="img"
                              src="/images/promising_logo.webp"
                              alt="Premio Promising"
                              sx={{
                                width: "170px",
                                borderRadius: "8px",
                                transition: "all 0.3s ease",
                              }}
                            />
                          </Grid>

                          <Grid
                            size={{ xs: 12, sm: 6 }}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <ButtonBase
                              onClick={() => {
                                window.open(
                                  "https://play.google.com/store/apps/details?id=com.tcglatam.tcgscout.prod&hl=es_CO",
                                  "_blank"
                                );
                              }}
                              sx={{
                                borderRadius: "8px",
                                overflow: "hidden",
                              }}
                            >
                              <Box
                                component="img"
                                src="/images/googleplay_logo.webp"
                                alt="Google Play"
                                sx={{
                                  width: "170px",
                                  borderRadius: "8px",
                                }}
                              />
                            </ButtonBase>
                          </Grid>

                          <Grid
                            size={{ xs: 12, sm: 6 }}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <ButtonBase
                              onClick={() => {
                                window.open(
                                  "https://apps.apple.com/pa/app/tcg-scout-v3/id6476404193",
                                  "_blank"
                                );
                              }}
                              sx={{
                                borderRadius: "8px",
                                overflow: "hidden",
                              }}
                            >
                              <Box
                                component="img"
                                src="/images/appstore_logo.webp"
                                alt="App Store"
                                sx={{
                                  width: "170px",
                                  borderRadius: "8px",
                                }}
                              />
                            </ButtonBase>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </>
          );

        case 1:
          return (
            <>
              <Grid container spacing={5}>
                <Grid
                  size={{ sm: 12, md: 4 }}
                  sx={{
                    borderRadius: "16px",
                    borderTop: `4px solid ${theme.palette.secondary.main}`,
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                    padding: "24px 32px",
                    width: "fit-content",
                    height: "fit-content",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: theme.palette.secondary.main,
                      borderRadius: "16px",
                      width: "fit-content",
                      whiteSpace: "nowrap",
                    }}
                    my={3}
                    py={1}
                    px={2}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ fontFamily: "TWKLausanne, Arial, sans-serif" }}
                      color="white"
                    >
                      Procesos Operativos
                    </Typography>
                  </Box>

                  <Typography variant="h3">Auditoría de PDV</Typography>
                  <Typography
                    variant="subtitle1"
                    color="gray"
                    mb={5}
                    sx={{ textWrap: "-moz-initial" }}
                  >
                    Medimos con nuestros auditores Scouts los siguientes KPI's
                    de imagen:
                  </Typography>
                  <TCGButton
                    text="Elegir el mejor plan"
                    icon={<SupportAgentOutlinedIcon />}
                    background={theme.palette.secondary.main}
                    href="https://portal.tcgscout.com/"
                  />
                  <Divider sx={{ my: 5 }} />
                  <ul>
                    {[
                      "Exhibición de Productos.",
                      "Stock de Productos.",
                      "Implementación de promociones.",
                      "Material Gráfico / POP.",
                      "Limpieza y orden de la sala de ventas.",
                      "Organización y limpieza de depósito.",
                      "Estado del mobiliario.",
                      "Ejecución de Visual Merchandising.",
                    ].map((text, i) => (
                      <Typography
                        key={i}
                        component="li"
                        variant="body2"
                        sx={{ mb: 1.5 }}
                      >
                        {text}
                      </Typography>
                    ))}
                  </ul>
                </Grid>

                <Grid size={{ sm: 12, md: 8 }}>
                  <Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      mb={3}
                      gap={1}
                    >
                      <VisibilityOutlinedIcon
                        color="secondary"
                        sx={{ fontSize: "60px" }}
                      />
                      <Typography variant="h3">
                        ¿Necesitas una mirada objetiva de tu performance?
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{ whiteSpace: "pre-line" }}
                      mb={4}
                    >
                      {`Nuestros Scouts pueden auditar en terreno las variables críticas de tu negocio, logrando ahorros de supervisión de hasta un 60% y mejorando los indicadores de experiencia en hasta un 40%*.
                    
                    Son una forma de auditoría externa, confiable y eficiente en costos.`}
                    </Typography>

                    <Grid
                      container
                      spacing={3}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid
                        size={{ md: 12, lg: 6 }}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Box
                          component="img"
                          src={`/images/TCGExplain/person_photo.webp`}
                          alt="Persona usando la App de TCG Scout"
                          sx={{
                            width: "360px",
                            height: "360px",
                            objectFit: "cover",
                            borderRadius: "4px",
                            transition: "all 0.3s ease",
                          }}
                        />
                      </Grid>

                      <Grid>
                        <Grid
                          container
                          spacing={3}
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Grid
                            size={{ sm: 6 }}
                            display="flex"
                            flexDirection={"column"}
                            justifyContent="center"
                            alignItems="center"
                          >
                            <QueryStatsOutlinedIcon
                              sx={{ fontSize: "60px" }}
                              color="secondary"
                            />
                            <Typography variant="h5" align="center" mt={2}>
                              Supervisión +60%
                            </Typography>
                          </Grid>

                          <Grid
                            size={{ sm: 6 }}
                            display="flex"
                            flexDirection={"column"}
                            justifyContent="center"
                            alignItems="center"
                          >
                            <PollOutlinedIcon
                              sx={{ fontSize: "60px" }}
                              color="secondary"
                            />
                            <Typography variant="h5" align="center" mt={2}>
                              Indicadores de Exp. +40%*
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </>
          );

        case 2:
          return (
            <>
              <Grid container spacing={5}>
                <Grid
                  size={{ sm: 12, md: 4 }}
                  sx={{
                    borderRadius: "16px",
                    borderTop: `4px solid ${theme.palette.purple.main}`,
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                    padding: "24px 32px",
                    width: "fit-content",
                    height: "fit-content",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: theme.palette.purple.main,
                      borderRadius: "16px",
                      width: "fit-content",
                      whiteSpace: "nowrap",
                    }}
                    my={3}
                    py={1}
                    px={2}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ fontFamily: "TWKLausanne, Arial, sans-serif" }}
                      color="white"
                    >
                      Protocolos de Atención
                    </Typography>
                  </Box>

                  <Typography variant="h3">Mystery Shopper</Typography>
                  <Typography
                    variant="subtitle1"
                    color="gray"
                    mb={5}
                    sx={{ textWrap: "-moz-initial" }}
                  >
                    Medimos con nuestros Cliente Incógnitos los siguientes KPI's
                    de atención al cliente:
                  </Typography>
                  <TCGButton
                    text="Elegir el mejor plan"
                    icon={<SupportAgentOutlinedIcon />}
                    background={theme.palette.purple.main}
                    href="https://portal.tcgscout.com/"
                  />
                  <Divider sx={{ my: 5 }} />
                  <ul>
                    {[
                      "Tiempos de apertura y cierre.",
                      "Disponibilidad de ejecutivos y presentación personal.",
                      "Conocimiento de productos y servicios.",
                      "Ofrecimiento de promociones.",
                      "Ofrecimiento de productos/servicios adicionales.",
                      "Resolución de problemas.",
                      "Tiempos de atención.",
                    ].map((text, i) => (
                      <Typography
                        key={i}
                        component="li"
                        variant="body2"
                        sx={{ mb: 1.5 }}
                      >
                        {text}
                      </Typography>
                    ))}
                  </ul>
                </Grid>

                <Grid size={{ sm: 12, md: 8 }}>
                  <Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      mb={3}
                      gap={1}
                    >
                      <FeedOutlinedIcon
                        sx={{
                          fontSize: "60px",
                          color: theme.palette.purple.main,
                        }}
                      />
                      <Typography variant="h3">
                        Informe con control de calidad y soluciones proactivas
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{ whiteSpace: "pre-line" }}
                      mb={4}
                    >
                      {`TCG tiene un formato único de medición de cliente incógnito. Nuestros Scouts entregan reportes en línea, soluciones proactivas y reducción de objeciones.
                      
                      Todas las mediciones pasan por control de calidad y sistema `}
                      <Box component="span" fontWeight="bold">
                        @teleaudit
                      </Box>
                      {`, para un máximo nivel de confianza.`}
                    </Typography>

                    <Grid
                      container
                      spacing={3}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid
                        size={{ md: 12, lg: 6 }}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Box
                          component="img"
                          src={`/images/TCGExplain/mcperson.webp`}
                          alt="Empleado de Mcdonals"
                          sx={{
                            width: "360px",
                            height: "360px",
                            objectFit: "cover",
                            borderRadius: "4px",
                            transition: "all 0.3s ease",
                          }}
                        />
                      </Grid>

                      <Grid>
                        <Grid
                          container
                          spacing={3}
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Grid
                            size={{ sm: 6 }}
                            display="flex"
                            flexDirection={"column"}
                            justifyContent="center"
                            alignItems="center"
                          >
                            <PersonSearchOutlinedIcon
                              sx={{
                                fontSize: "60px",
                                color: theme.palette.purple.main,
                              }}
                            />
                            <Typography variant="h5" align="center" mt={2}>
                              Clientes Incognitos
                            </Typography>
                          </Grid>

                          <Grid
                            size={{ sm: 6 }}
                            display="flex"
                            flexDirection={"column"}
                            justifyContent="center"
                            alignItems="center"
                          >
                            <ContentPasteSearchOutlinedIcon
                              sx={{
                                fontSize: "60px",
                                color: theme.palette.purple.main,
                              }}
                            />
                            <Typography variant="h5" align="center" mt={2}>
                              Reportes en linea
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </>
          );
      }
    };

    return <div>{renderStepContent()}</div>;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep} sx={{ mb: 6.25 }}>
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const currentColor = isActive
            ? step.labelColor
            : theme.palette.grey[400];

          return (
            <Step key={index}>
              <StepButton
                color="inherit"
                onClick={handleStep(index)}
                sx={{
                  "& .MuiStepLabel-labelContainer": {
                    order: "-1",
                    borderRadius: "16px",
                    padding: "8px 16px",
                    marginBottom: "24px",
                    backgroundColor: step.labelColor,
                    color: "white",
                    filter: isActive ? "none" : "grayscale(100%)",
                    opacity: isActive ? 1 : 0.7,
                    transition: "all 0.3s ease",
                  },
                }}
                icon={
                  <Box
                    key={index}
                    component="img"
                    src={`/images/TCGExplain/${step.logo}.webp`}
                    alt={step.label}
                    sx={{
                      objectFit: "cover",
                      width: "180px",
                      height: { xs: "120px", sm: "266px" },
                      borderRadius: "12px",
                      border: `4px solid ${currentColor}`,
                      filter: isActive ? "none" : "grayscale(100%)",
                      opacity: isActive ? 1 : 0.7,
                      transition: "all 0.3s ease",
                    }}
                  />
                }
                className="StepButton"
              >
                {step.label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div>
        <StepContent activeStep={activeStep} />
      </div>
    </Box>
  );
}
