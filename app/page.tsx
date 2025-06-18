import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { HeroSection } from "@/components/layout/sections/hero";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Last Leaf Care",
  description: "An Electrohomeopathic Centre in Faridkot, Punjab",
  openGraph: {
    type: "website",
    url: "https://github.com/ku28/lastleafcare.git",
    title: "Last Leaf Care",
    description: "An Electrohomeopathic Centre in Faridkot, Punjab",
    images: [
      {
        url: "https://res.cloudinary.com/dwgsflt8h/image/upload/v1750161266/logo_isxw3s.png",
        width: 1200,
        height: 630,
        alt: "Last Leaf Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/ku28/lastleafcare.git",
    title: "Last Leaf Care",
    description: "An Electrohomeopathic Centre in Faridkot, Punjab",
    images: [
      "https://res.cloudinary.com/dwgsflt8h/image/upload/v1750161266/logo_isxw3s.png",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TestimonialSection />
      <TeamSection />
      <BenefitsSection />
      <SponsorsSection />
      <CommunitySection />
      <ContactSection />
    </>
  );
}
