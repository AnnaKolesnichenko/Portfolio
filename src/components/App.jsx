import About from './About/About';
import Certificates from './Certificates/Certificates.jsx';
import Header from './Header/Header';
import TechSkills from './TechSkills/TechSkills';
import Works from './Works/Works';
import Contacts from './Contacts/Contacts';
import wall from '../images/backgrounds/wall.webp';
import { FaArrowCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

const UpArrowStyled = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  gap: 5px;
  color: #94a3b8;

  &:hover {
    color: white;
  }
`;

export const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${wall})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'norepeat',
        backgroundSize: 'cover',
        height: '100%',
      }}
    >
      <Header />
      {/* <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Works />}></Route>
        <Route path="/certificates" element={<Certificates />}></Route>
        <Route path="/skills" element={<TechSkills />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes> */}
      <About />
      <Works />
      <Certificates />
      <TechSkills />
      <Contacts />
      <div style={{ position: 'fixed', right: '10px', bottom: '20px' }}>
        <UpArrowStyled href="#nav">
          <FaArrowCircleUp style={{ height: '30px', width: 'auto' }} />
          UP
        </UpArrowStyled>
      </div>
    </div>
  );
};
