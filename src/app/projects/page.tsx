import Shell from "@/components/Shell";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  Chip,
  Box,
  Tooltip,
} from "@mui/material";

const projects = [
  {
    name: "SRQ Happenings",
    description:
      "Local events aggregator with structured categories, venue matching, and a modern UI for locals/tourists.",
    stack: ["Next.js", "TypeScript", "FastAPI", "Postgres", "Celery"],
    href: "#",
    comingSoon: true,
  },
];

export const metadata = {
  title: "My Work",
  description: "A selection of work I've built and shipped.",
};

export default function ProjectsPage() {
  return (
    <Shell>
      <Stack spacing={3}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              letterSpacing: "-0.02em",
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.125rem" },
            }}
          >
            My Work
          </Typography>
          <Typography sx={{ mt: 1, opacity: 0.8, maxWidth: 620 }}>
            A couple of things I&apos;ve built
          </Typography>
        </Box>

        <Stack spacing={2.5}>
          {projects.map((p) => (
            <Card key={p.name} sx={{ overflow: "hidden" }}>
              <Box
                sx={{
                  height: 2,
                  background: "#22d3ee",
                  opacity: 0.6,
                }}
              />
              <CardContent sx={{ pt: 2.5 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, letterSpacing: "-0.01em" }}
                >
                  {p.name}
                </Typography>
                <Typography sx={{ mt: 1, opacity: 0.85, lineHeight: 1.6 }}>
                  {p.description}
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ mt: 2, flexWrap: "wrap", gap: 1 }}
                >
                  {p.stack.map((s) => (
                    <Chip key={s} label={s} />
                  ))}
                </Stack>

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ mt: 2.5, flexWrap: "wrap", gap: 1 }}
                >
                  {p.comingSoon ? (
                    <>
                      <Tooltip title="Coming soon" placement="top">
                        <span>
                          <Button
                            variant="contained"
                            disabled
                            size="small"
                            sx={{ minHeight: 44 }}
                          >
                            Live
                          </Button>
                        </span>
                      </Tooltip>
                      <Tooltip title="Coming soon" placement="top">
                        <span>
                          <Button
                            variant="outlined"
                            disabled
                            size="small"
                            sx={{
                              minHeight: 44,
                              borderColor: "rgba(250,250,250,0.2)",
                              color: "text.primary",
                            }}
                          >
                            Code
                          </Button>
                        </span>
                      </Tooltip>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="contained"
                        href={p.href}
                        size="small"
                        sx={{ minHeight: 44 }}
                      >
                        Live
                      </Button>
                      <Button
                        variant="outlined"
                        href={p.href}
                        size="small"
                        sx={{
                          minHeight: 44,
                          borderColor: "rgba(250,250,250,0.2)",
                          color: "text.primary",
                        }}
                      >
                        Code
                      </Button>
                    </>
                  )}
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Shell>
  );
}
