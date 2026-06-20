import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import ProjectsGrid from '@/components/ProjectsGrid/ProjectsGrid';
import Services from '@/components/Services/Services';
import Team from '@/components/Team/Team';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectsGrid />
        <Services />
        <Team />
      </main>
      <Footer />
    </>
  );
}
