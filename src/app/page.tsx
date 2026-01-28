import Shell from "@/components/Shell";
import { Box, Typography, Stack, Button, Chip } from "@mui/material";

const currentWork = {
  name: "SRQ Happenings",
  description:
    "Local events aggregator with structured categories, venue matching, and a modern UI for locals and tourists.",
  stack: ["Next.js", "TypeScript", "FastAPI", "Postgres", "Celery"],
  href: "/projects",
  comingSoon: true,
};

export default function HomePage() {
  return (
    <Shell>
      <Stack spacing={{ xs: 5, md: 7 }}>
        {/* Hero with subtle visual */}
        <Box sx={{ position: "relative" }}>
          {/* Subtle gradient orbs — decorative only */}
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              top: -80,
              right: { xs: -60, md: 80 },
              width: 320,
              height: 320,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, rgba(34, 211, 238, 0.04) 50%, transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              top: 40,
              right: { xs: 20, md: 220 },
              width: 200,
              height: 200,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(167, 139, 250, 0.12) 0%, transparent 70%)",
              filter: "blur(32px)",
              pointerEvents: "none",
            }}
          />

          <Box sx={{ position: "relative" }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                maxWidth: 720,
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
              }}
            >
              Software Engineer building{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                clean, fast
              </Box>{" "}
              web products.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 4 }}
            >
              <Button variant="contained" size="large" href="/projects">
                View My Work
              </Button>
              <Button
                variant="outlined"
                size="large"
                component="a"
                href="https://github.com/tylerlangties"
                target="_blank"
                rel="noreferrer"
                sx={{
                  borderColor: "rgba(250,250,250,0.2)",
                  color: "text.primary",
                }}
              >
                GitHub
              </Button>
              <Button
                variant="text"
                size="large"
                href="/resume"
                sx={{ fontWeight: 600 }}
              >
                Resume →
              </Button>
            </Stack>
          </Box>
        </Box>

        {/* What I'm working on */}
        <Box>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{ mb: 2 }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #22d3ee, #a78bfa)",
                boxShadow: "0 0 12px rgba(34, 211, 238, 0.5)",
                animation: "pulse 2s ease-in-out infinite",
                "@keyframes pulse": {
                  "0%, 100%": { opacity: 1, transform: "scale(1)" },
                  "50%": { opacity: 0.7, transform: "scale(1.1)" },
                },
              }}
            />
            <Typography
              variant="overline"
              sx={{
                color: "text.secondary",
                fontWeight: 700,
                letterSpacing: "0.12em",
              }}
            >
              What I&apos;m working on
            </Typography>
          </Stack>

          <Box
            component="a"
            href={currentWork.href}
            sx={{
              display: "block",
              textDecoration: "none",
              color: "inherit",
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
              // Gradient border via wrapper (1px padding = border; inner radius 1px less so corners match sides)
              background:
                "linear-gradient(135deg, rgba(34, 211, 238, 0.4) 0%, rgba(167, 139, 250, 0.3) 50%, rgba(34, 211, 238, 0.2) 100%)",
              padding: "1px",
              transition: "box-shadow 0.3s ease, transform 0.2s ease",
              "&:hover": {
                boxShadow:
                  "0 0 40px rgba(34, 211, 238, 0.15), 0 0 80px rgba(167, 139, 250, 0.08)",
                "& .current-work-inner": {
                  borderColor: "rgba(34, 211, 238, 0.08)",
                },
              },
              "& .current-work-inner": {
                borderRadius: "calc(24px - 1px)",
              },
            }}
          >
            <Box
              className="current-work-inner"
              sx={{
                borderRadius: "calc(24px - 1px)",
                background:
                  "linear-gradient(160deg, rgba(15, 15, 22, 0.98) 0%, rgba(10, 10, 15, 0.99) 100%)",
                border: "1px solid rgba(250, 250, 250, 0.04)",
                p: { xs: 3, sm: 4 },
                transition: "border-color 0.2s",
              }}
            >
              <Stack
                direction="row"
                flexWrap="wrap"
                alignItems="center"
                gap={1.5}
                sx={{ mb: 2 }}
              >
                <Chip
                  label="Now"
                  size="small"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    background: "linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(167, 139, 250, 0.15))",
                    border: "1px solid rgba(34, 211, 238, 0.3)",
                    color: "primary.light",
                  }}
                />
                {currentWork.comingSoon && (
                  <Chip
                    label="Coming soon"
                    size="small"
                    sx={{
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                      background: "rgba(250, 250, 250, 0.06)",
                      border: "1px solid rgba(250, 250, 250, 0.12)",
                      color: "text.secondary",
                    }}
                  />
                )}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    background: "linear-gradient(135deg, #fafafa 0%, rgba(250, 250, 250, 0.85) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {currentWork.name}
                </Typography>
              </Stack>
              <Typography
                sx={{
                  opacity: 0.9,
                  lineHeight: 1.65,
                  fontSize: "1rem",
                  maxWidth: 560,
                }}
              >
                {currentWork.description}
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{ mt: 2.5, flexWrap: "wrap", gap: 1 }}
              >
                {currentWork.stack.map((s) => (
                  <Chip
                    key={s}
                    label={s}
                    size="small"
                    sx={{
                      fontWeight: 600,
                      background: "rgba(250, 250, 250, 0.06)",
                      border: "1px solid rgba(250, 250, 250, 0.1)",
                      color: "text.secondary",
                    }}
                  />
                ))}
              </Stack>
              <Typography
                variant="body2"
                sx={{
                  mt: 2.5,
                  fontWeight: 600,
                  color: "primary.main",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                See all work →
              </Typography>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Shell>
  );
}
