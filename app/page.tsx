import { Navbar } from "@/components/Navbar";
import { EnhancedHero } from "@/components/EnhancedHero";
import { Achievements } from "@/components/Achievements";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { TechStack } from "@/components/TechStack";
import { TechnicalDeepDive } from "@/components/TechnicalDeepDive";
import { SuccessStories } from "@/components/SuccessStories";
import { ProjectGrid } from "@/components/ProjectGrid";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { Certifications } from "@/components/Certifications";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { StatisticsSection } from "@/components/StatisticsSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ContactSection } from "@/components/ContactSection";
import { FutureGoals } from "@/components/FutureGoals";
import { PersonalMission } from "@/components/PersonalMission";
import { CollaborationCTA } from "@/components/CollaborationCTA";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="mesh-bg">
        <div className="mesh-blob bg-indigo-600/20 top-[10%] left-[10%]" />
        <div className="mesh-blob bg-purple-600/20 bottom-[20%] right-[15%]" />
        <div className="mesh-blob bg-blue-600/20 top-[40%] right-[10%] delay-[5s]" />
      </div>

      <Navbar />

      <div className="relative z-10 space-y-16">
        <EnhancedHero />
        <Achievements />
        <SuccessStories />
        <ExperienceTimeline />
        <TechStack />
        <TechnicalDeepDive />
        <FutureGoals />
        <PersonalMission />
        <CollaborationCTA />
        <ProjectGrid />
        <Certifications />
        <BlogGrid />
        <Testimonials />
        <ContactSection />
        <NewsletterSection />
      </div>

      <Footer />
    </main>
  );
}
