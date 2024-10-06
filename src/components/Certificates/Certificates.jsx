import { useState } from 'react';
import { GiGraduateCap } from 'react-icons/gi';
import { MdWorkHistory } from 'react-icons/md';

import {
  CertifImgStyled,
  CertifItemStyled,
  CertifStyled,
  CertifiListStyled,
  CertifMainTitle,
  EducationListStyled,
  EducationItemStyled,
  EducationCourseStyled,
  EducationByStyled,
  EducationDateStyled,
} from './Certificates.styled';
import ImageFullSize from './ImageFullSize';
import { Awards } from './awards';
import { AnimatePresence } from 'framer-motion';

const Certificates = () => {
  const [showFullImg, setShowFullImg] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);

  const handleOpen = id => {
    setSelectedAward(id);
    setShowFullImg(!showFullImg);
    console.log(id);
  };

  const handleClose = () => {
    setShowFullImg(!showFullImg);
  };
  return (
    <CertifStyled id="certificates">
      <CertifMainTitle>Certificates / education </CertifMainTitle>
      <CertifiListStyled>
        <CertifiListStyled>
          {Awards.map(award => (
            <CertifItemStyled key={award.id} onClick={() => handleOpen(award)}>
              <CertifImgStyled src={award.image} alt={award.title} />
            </CertifItemStyled>
          ))}
        </CertifiListStyled>

        <AnimatePresence>
          {showFullImg && (
            <ImageFullSize
              img={selectedAward.image}
              description={selectedAward.title}
              handleClose={handleClose}
            />
          )}
        </AnimatePresence>
      </CertifiListStyled>
      <EducationListStyled>
        <EducationItemStyled>
          <GiGraduateCap style={{ fill: '#94a3b8' }} />
          <EducationCourseStyled>
            React Native - The Practical Guide (2023)
          </EducationCourseStyled>
          <EducationByStyled>
            Academind by Maximillian Schwarzmuller. UDEMY.com
          </EducationByStyled>
          <EducationDateStyled>October, 2023</EducationDateStyled>
        </EducationItemStyled>
        <EducationItemStyled>
          <GiGraduateCap style={{ fill: '#94a3b8' }} />
          <EducationCourseStyled>
            Fullstack Developer (Frontend + Backend)
          </EducationCourseStyled>
          <EducationByStyled>GoIT school</EducationByStyled>
          <EducationDateStyled>October, 2023</EducationDateStyled>
        </EducationItemStyled>
        <EducationItemStyled>
          <GiGraduateCap style={{ fill: '#94a3b8' }} />
          <EducationCourseStyled>
            Master's Degree (English Language and Literature)
          </EducationCourseStyled>
          <EducationByStyled>Kyiv Slavistic Univestity</EducationByStyled>
          <EducationDateStyled>June, 2002</EducationDateStyled>
        </EducationItemStyled>
      </EducationListStyled>
      <CertifMainTitle>career</CertifMainTitle>
      <EducationItemStyled>
        <MdWorkHistory style={{ fill: '#94a3b8' }} />
        <EducationCourseStyled>Front-end Developer</EducationCourseStyled>
        <EducationByStyled>VeroCasa</EducationByStyled>
        <EducationDateStyled>March, 2024 - June, 2024</EducationDateStyled>
      </EducationItemStyled>
      <EducationItemStyled>
        <MdWorkHistory style={{ fill: '#94a3b8' }} />
        <EducationCourseStyled>
          English language interpreter
        </EducationCourseStyled>
        <EducationByStyled>Self-employed</EducationByStyled>
        <EducationDateStyled>
          September, 2006 - February, 2022
        </EducationDateStyled>
      </EducationItemStyled>
    </CertifStyled>
  );
};

export default Certificates;
