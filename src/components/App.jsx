import About from './About/About';
import Header from './Header/Header';
import TechSkills from './TechSkills/TechSkills';

export const App = () => {
  return (
    <div
      style={{
        backgroundColor: '#b3e1f2',
        height: '100vh',
      }}
    >
      <Header />
      <About />
      <TechSkills />
    </div>
  );
};
