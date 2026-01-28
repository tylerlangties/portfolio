import Shell from "@/components/Shell";
import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

const contact = [
  { icon: EmailRoundedIcon, label: "tylerlangties@gmail.com", href: "mailto:tylerlangties@gmail.com" },
  { icon: LinkRoundedIcon, label: "github.com/tylerlangties", href: "https://github.com/tylerlangties" },
  { icon: LocationOnRoundedIcon, label: "Tampa, FL", href: undefined },
] as const;

type JobPhase = {
  team: string;
  dates: string;
  bullets: string[];
  tech?: string;
};

type Job = {
  role: string;
  company: string;
  location?: string;
  dates: string;
  bullets?: string[];
  phases?: JobPhase[];
  tech?: string;
};

const experience: Job[] = [
  {
    role: "Senior Software Engineer",
    company: "DXC Technology",
    location: "Tampa, FL",
    dates: "Jan 2022 – Present",
    phases: [
      {
        team: "ExperienceHub",
        dates: "through Aug 2025",
        bullets: [
          "Built and maintained two large Vue.js applications serving 500k+ users, shipping core product features and iterative improvements.",
          "Designed and delivered features across the stack using React, Vue.js, Node.js, and Python.",
          "Drove client-side architecture decisions and aligned approaches across several product teams.",
          "Owned deployment pipelines and technical documentation for multiple applications and clients.",
        ],
        tech: "Vue.js · Node.js · Capacitor · SASS · React · Python",
      },
      {
        team: "HCM DXC Team",
        dates: "Aug 2025 – Present",
        bullets: [
          "Deliver and maintain full stack applications for dozens of clients across several products.",
          "Design and implement features end-to-end with React and Python (Django), from UI through APIs and data.",
          "Collaborate with cross-functional teams to scope, build, and ship solutions on schedule.",
        ],
        tech: "React · Python · Django",
      },
    ],
  },
  {
    role: "Software Engineer",
    company: "DXC Technology",
    location: "Tampa, FL",
    dates: "Aug 2019 – Jan 2022",
    bullets: [
      "Contributed to enterprise web applications with React, Vue.js, Node.js, and Python; progressed from feature work to owning key areas.",
      "Advised on front-end architecture and partnered with several teams to align patterns and reuse.",
      "Supported deployments and technical documentation for multiple applications and clients.",
    ],
    tech: "Vue.js · Node.js · React · Python",
  },
  {
    role: "Software Engineer",
    company: "Steel Supplements",
    location: "Sarasota, FL",
    dates: "May 2019 – Aug 2019",
    bullets: [
      "Implemented new applications, automation scripts, and product features across e-commerce and internal tooling.",
      "Significantly improved application performance and accessibility.",
      "Established version control practices, a style guide, and front-end documentation for the team.",
    ],
    tech: "JavaScript · React · Liquid · Ruby",
  },
];


export const metadata = {
  title: "Resume",
  description: "Tyler Langties — Software Engineer. Experience, skills, and education.",
};

export default function ResumePage() {
  return (
    <Shell>
      <Box
        sx={{
          maxWidth: 720,
          mx: "auto",
          "@media print": {
            maxWidth: "100%",
            "& .no-print": { display: "none" },
          },
        }}
      >
        <Stack spacing={4}>
          {/* Header */}
          <Box sx={{ pb: 2, borderBottom: "2px solid", borderColor: "primary.main" }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
              }}
            >
              Tyler Langties
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mt: 0.5,
                fontWeight: 500,
                color: "primary.main",
                fontSize: { xs: "0.95rem", sm: "1rem" },
              }}
            >
              Senior Software Engineer — enterprise web apps, React & Vue
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 0.5, sm: 2 }}
              sx={{ mt: 2, flexWrap: "wrap", gap: 0.5 }}
              useFlexGap
            >
              {contact.map(({ icon: Icon, label, href }) => (
                <Typography
                  key={label}
                  component={href ? "a" : "span"}
                  href={href}
                  target={href ? "_blank" : undefined}
                  rel={href ? "noreferrer" : undefined}
                  variant="body2"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.5,
                    color: "text.secondary",
                    textDecoration: "none",
                    "&:hover": href ? { color: "primary.main" } : {},
                  }}
                >
                  <Icon sx={{ fontSize: 16, opacity: 0.8 }} />
                  {label}
                </Typography>
              ))}
            </Stack>
          </Box>

          <Divider sx={{ borderColor: "divider" }} />

          {/* Summary */}
          <Box>
            <Typography
              variant="overline"
              sx={{
                fontWeight: 700,
                letterSpacing: 0.12,
                color: "text.secondary",
              }}
            >
              Summary
            </Typography>
            <Typography sx={{ mt: 0.5, opacity: 0.9, lineHeight: 1.6 }}>
              Senior software engineer with 6+ years building enterprise web applications.
              Experience across React, Vue, Node, and Python—from large-scale product apps
              (500k+ users) to multi-client platforms. Strong focus on architecture,
              cross-team collaboration, and clear documentation.
            </Typography>
          </Box>

          {/* Work Experience */}
          <Box>
            <Typography
              variant="overline"
              sx={{
                fontWeight: 700,
                letterSpacing: 0.12,
                color: "text.secondary",
              }}
            >
              Work Experience
            </Typography>
            <Stack spacing={3.5} sx={{ mt: 1.5 }}>
              {experience.map((job) => (
                <Box key={`${job.company}-${job.role}-${job.dates}`}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems={{ xs: "flex-start", sm: "baseline" }}
                    spacing={0.5}
                  >
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {job.role}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", fontWeight: 500 }}
                      >
                        {job.company}
                        {job.location ? ` · ${job.location}` : ""}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        flexShrink: 0,
                      }}
                    >
                      {job.dates}
                    </Typography>
                  </Stack>

                  {job.phases ? (
                    <Stack spacing={2} sx={{ mt: 2 }}>
                      {job.phases.map((phase) => (
                        <Box
                          key={phase.team}
                          sx={{
                            pl: 2,
                            borderLeft: "2px solid",
                            borderColor: "primary.main",
                            opacity: 0.95,
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 600,
                              color: "primary.main",
                              mb: 0.25,
                            }}
                          >
                            {phase.team} · {phase.dates}
                          </Typography>
                          <Box
                            component="ul"
                            sx={{
                              m: 0,
                              pl: 2,
                              "& li": {
                                mb: 0.5,
                                opacity: 0.9,
                                typography: "body2",
                                lineHeight: 1.5,
                              },
                            }}
                          >
                            {phase.bullets.map((bullet, i) => (
                              <li key={i}>{bullet}</li>
                            ))}
                          </Box>
                          {phase.tech && (
                            <Typography
                              variant="caption"
                              sx={{
                                display: "block",
                                mt: 0.75,
                                color: "text.secondary",
                                fontStyle: "italic",
                              }}
                            >
                              {phase.tech}
                            </Typography>
                          )}
                        </Box>
                      ))}
                    </Stack>
                  ) : (
                    <>
                      <Box
                        component="ul"
                        sx={{
                          m: 0,
                          mt: 1,
                          pl: 2,
                          "& li": {
                            mb: 0.5,
                            opacity: 0.9,
                            typography: "body2",
                            lineHeight: 1.5,
                          },
                        }}
                      >
                        {job.bullets?.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </Box>
                      {job.tech && (
                        <Typography
                          variant="caption"
                          sx={{
                            display: "block",
                            mt: 0.75,
                            color: "text.secondary",
                            fontStyle: "italic",
                          }}
                        >
                          {job.tech}
                        </Typography>
                      )}
                    </>
                  )}
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Download PDF — hidden when printing */}
          <Box className="no-print" sx={{ pt: 2 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<DownloadRoundedIcon />}
              component="a"
              href={"/resume/" + encodeURIComponent("Tyler Langties – Software Engineer Resume.pdf")}
              download="Tyler Langties – Software Engineer Resume.pdf"
              target="_blank"
              rel="noreferrer"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                width: { xs: "100%", sm: "auto" },
                minHeight: 44,
              }}
            >
              Download resume (PDF)
            </Button>
          </Box>
        </Stack>
      </Box>
    </Shell>
  );
}
