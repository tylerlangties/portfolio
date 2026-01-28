import Shell from "@/components/Shell";
import { Typography, Stack, Box } from "@mui/material";

export const metadata = {
  title: "About",
  description:
    "A bit about Tyler—software engineer, music maker, hiker, family time, and the occasional game.",
};

const gallery = [
  { src: "/about/me.jpeg", alt: "Tyler", caption: "Me" },
  { src: "/about/family.jpeg", alt: "Family", caption: "Family" },
  { src: "/about/pet.jpeg", alt: "Furry friend", caption: "Kiki" },
  { src: "/about/pets.jpeg", alt: "Furry friends", caption: "Pops" },
  { src: "/about/life.jpeg", alt: "Life outside", caption: "Life outside" },
];

export default function AboutPage() {
  return (
    <Shell>
      <Stack spacing={5}>
        {/* Intro */}
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              letterSpacing: "-0.02em",
              mb: 1,
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.125rem" },
            }}
          >
            About
          </Typography>
          <Typography sx={{ opacity: 0.8, maxWidth: 560 }}>
            A bit about me—beyond the keyboard.
          </Typography>
        </Box>

        {/* Gallery */}
        <Box sx={{ pt: 2 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gridAutoRows: { md: "minmax(280px, 1fr)" },
              gap: 2,
              "& .gallery-item": {
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                backgroundColor: "rgba(19, 19, 26, 0.8)",
                border: "1px solid",
                borderColor: "rgba(250,250,250,0.06)",
                aspectRatio: "4/5",
                minHeight: 0,
                "&:hover": {
                  borderColor: "rgba(250,250,250,0.12)",
                  "& .gallery-caption": {
                    opacity: 1,
                  },
                },
              },
              "& .gallery-item:first-of-type": {
                gridColumn: { xs: "1", md: "span 2" },
                gridRow: { md: "span 2" },
                aspectRatio: { xs: "4/5", md: "auto" },
                minHeight: { md: 0 },
              },
              "& .gallery-img": {
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
              },
            }}
          >
            {gallery.map((item, index) => (
              <Box key={index} className="gallery-item">
                <Box
                  component="img"
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="gallery-img"
                />
                <Typography
                  className="gallery-caption"
                  variant="caption"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    py: 1,
                    px: 1.5,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                    color: "white",
                    fontWeight: 600,
                    opacity: 0.9,
                    transition: "opacity 0.2s ease",
                  }}
                >
                  {item.caption}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Stack>
    </Shell>
  );
}
