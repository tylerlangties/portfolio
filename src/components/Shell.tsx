"use client";

import * as React from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
];

export default function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  React.useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  const navLinks = (
    <>
      {nav.map((item) => {
        const active = pathname === item.href;
        return (
          <Button
            key={item.href}
            component={NextLink}
            href={item.href}
            color="inherit"
            size="medium"
            sx={{
              px: 2,
              py: 1.25,
              minHeight: 44,
              borderRadius: 2,
              fontWeight: active ? 600 : 500,
              color: active ? "primary.main" : "text.secondary",
              "&:hover": {
                backgroundColor: "rgba(250, 250, 250, 0.06)",
                color: active ? "primary.light" : "text.primary",
              },
            }}
          >
            {item.label}
          </Button>
        );
      })}
    </>
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background:
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 211, 238, 0.12), transparent)",
      }}
    >
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "rgba(10, 10, 15, 0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(250, 250, 250, 0.06)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", py: 0.5 }}>
          <Typography
            component={NextLink}
            href="/"
            variant="h6"
            sx={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              "&:hover": { color: "primary.main" },
            }}
          >
            Tyler Langties
          </Typography>

          {/* Desktop nav — hidden below md */}
          <Stack
            direction="row"
            spacing={0.5}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navLinks}
          </Stack>

          {/* Mobile: hamburger — visible below md */}
          <IconButton
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
            sx={{
              display: { xs: "inline-flex", md: "none" },
              minWidth: 44,
              minHeight: 44,
              color: "text.secondary",
              "&:hover": { color: "text.primary", backgroundColor: "rgba(250, 250, 250, 0.06)" },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          backdrop: { sx: { backgroundColor: "rgba(0,0,0,0.5)" } },
        }}
        PaperProps={{
          sx: {
            width: 280,
            maxWidth: "85vw",
            backgroundColor: "rgba(10, 10, 15, 0.98)",
            borderLeft: "1px solid rgba(250, 250, 250, 0.06)",
          },
        }}
      >
        <List sx={{ py: 2, px: 1 }}>
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <ListItemButton
                key={item.href}
                component={NextLink}
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  py: 2,
                  minHeight: 48,
                  borderRadius: 2,
                  mb: 0.5,
                  fontWeight: active ? 600 : 500,
                  color: active ? "primary.main" : "text.secondary",
                  "&:hover": {
                    backgroundColor: "rgba(250, 250, 250, 0.06)",
                    color: active ? "primary.light" : "text.primary",
                  },
                }}
              >
                <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: "inherit" }} />
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>

      <Box component="main" sx={{ flex: 1 }}>
        <Container sx={{ py: { xs: 5, md: 7 }, px: { xs: 2, sm: 3 } }}>
          {children}
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          borderTop: "1px solid rgba(250, 250, 250, 0.06)",
        }}
      >
        <Container sx={{ px: { xs: 2, sm: 3 }, py: { xs: 2, md: 3 } }}>
          <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.8125rem" }}>
            © {new Date().getFullYear()} Tyler Langties
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
