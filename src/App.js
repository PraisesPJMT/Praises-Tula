// import { Router } from 'react-router-dom';
import Hello from './components/hello/Hello';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SideBar from './sections/SideBar';
import AboutSection from './sections/AboutSection';
import ProjectSection from './sections/ProjectSection';
import ContactSection from './sections/ContactSection';
import './sections/Sections.css';
import './App.css';

const App = () => (
  <>
    <Header />
    <main>
      <SideBar />
      <div className="main">
        <Hello />
        <ProjectSection />
        <AboutSection />
        <ContactSection />
      </div>
    </main>
    <Footer />
  </>

);

export default App;
