import * as React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  Toolbar,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import TCGButton from "../Utils/TCGButton/TCGButton";
import theme from "../../theme/theme";
import "./Navbar.css";

const pages = [
  "Inicio",
  "Nosotros",
  "Mystery Shopper",
  "Auditoria de PDV",
  "Blog",
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const location = useLocation();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="navbar__toolbar">
          {/* Logo */}
          <RouterLink to="/">
            <img
              src="/images/TCG_logo.webp"
              alt="Logo TCG - Seek & Display"
              width={220}
            />
          </RouterLink>

          {/* Links */}
          <Box
            p={2}
            sx={{
              display: "flex",
              "@media (max-width:1024px)": {
                display: "none",
              },
            }}
            className="navbar__links"
          >
            {pages.map((page) => {
              const path =
                page.toLowerCase() === "inicio"
                  ? "/"
                  : `/${page.toLowerCase().replace(/\s+/g, "-")}`;
              const isActive = location.pathname === path;

              return (
                <Button
                  key={page}
                  component={RouterLink}
                  to={path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: isActive ? "black" : "gray",
                    fontSize: "1rem",
                    fontWeight: isActive ? 600 : 400,
                    textTransform: "none",
                    "&:hover": {
                      color: "black",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {page}
                </Button>
              );
            })}
          </Box>

          {/* Portal Button */}
          <Box
            sx={{
              "@media (max-width:1024px)": {
                display: "none",
              },
            }}
          >
            <TCGButton
              text="Acceso Clientes"
              icon={<LoginOutlinedIcon />}
              background={theme.customColors?.primaryGradient}
              href="https://portal.tcgscout.com/"
            />
          </Box>

          {/* Mobile Menu */}
          <Box
            sx={{
              display: "none",
              "@media (max-width:1024px)": {
                display: "flex",
              },
            }}
          >
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              sx={{ background: theme.customColors.primaryGradient }}
              onClick={handleOpenNavMenu}
            >
              <MenuIcon sx={{ fontSize: "2rem" }} />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: "none",
                "@media (max-width:1024px)": {
                  display: "flex",
                },
                "& .MuiPaper-root": {
                  width: "100vw",
                  height: "100vh",
                  top: "30px !important",
                  left: 0,
                  borderRadius: 0,
                  backgroundColor: theme.palette.background.default,
                },
              }}
            >
              {/* Close Icon */}
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                }}
              >
                <IconButton onClick={handleCloseNavMenu} color="inherit">
                  <CloseIcon fontSize="large" />
                </IconButton>
              </Box>

              {/* Links */}
              <Box
                mt={9}
                px={2}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={5}
              >
                {pages.map((page) => {
                  const path =
                    page.toLowerCase() === "inicio"
                      ? "/"
                      : `/${page.toLowerCase().replace(/\s+/g, "-")}`;
                  const isActive = location.pathname === path;

                  return (
                    <MenuItem
                      key={page}
                      component={RouterLink}
                      to={path}
                      onClick={handleCloseNavMenu}
                      sx={{
                        width: "100%",
                        justifyContent: "center",
                        color: isActive ? "black" : "gray",
                        fontSize: "1.25rem",
                        fontWeight: isActive ? 600 : 400,
                        textAlign: "center",
                      }}
                    >
                      {page}
                    </MenuItem>
                  );
                })}
                <TCGButton
                  text="Acceso Clientes"
                  icon={<LoginOutlinedIcon />}
                  background={theme.customColors?.primaryGradient}
                  href="https://portal.tcgscout.com/"
                />
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
