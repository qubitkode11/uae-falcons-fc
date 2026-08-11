import ScrollHero from "../components/ScrollHero";
import SkillsProgram from "../components/SkillsProgram";
import SchoolHolidayProgram from "../components/SchoolHolidayProgram";
import Gallery from "../components/Gallery";
import HowToJoin from "../components/HowToJoin";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import Sponsors from "../components/Sponsors";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <ScrollHero />
      <SkillsProgram />
      <SchoolHolidayProgram />
      <Gallery />
      <HowToJoin />
      <Testimonials />
      <ContactUs />
      <Sponsors />
    </main>
  );
}
