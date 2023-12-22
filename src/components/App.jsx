import About from './About/About';
import Certificates from './Certificates/Certificates.jsx';

import Header from './Header/Header';
import TechSkills from './TechSkills/TechSkills';
import Works from './Works/Works';

export const App = () => {
  return (
    <div
      style={{
        backgroundColor: '#b3e1f2',
        height: '100%',
      }}
    >
      <Header />
      <About />
      <TechSkills />
      <Certificates />
      <Works />
    </div>
  );
};
