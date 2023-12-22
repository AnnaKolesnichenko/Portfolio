import { useState } from 'react';
import react_native from '../../images/ReactNative.jpeg';
import goit from '../../images/goit_certificate.jpeg';
import {
  CertifImgStyled,
  CertifItemStyled,
  CertifStyled,
  CertifiListStyled,
  CertifMainTitle,
} from './Certificates.styled';
import ImageFullSize from './ImageFullSize';
import { Awards } from './awards';

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
    <CertifStyled>
      <CertifMainTitle>Certificates</CertifMainTitle>
      <CertifiListStyled>
        <CertifiListStyled>
          {Awards.map(award => (
            <CertifItemStyled key={award.id} onClick={() => handleOpen(award)}>
              <CertifImgStyled src={award.image} alt={award.title} />
            </CertifItemStyled>
          ))}
        </CertifiListStyled>

        {showFullImg && (
          <ImageFullSize
            img={selectedAward.image}
            description={selectedAward.title}
            handleClose={handleClose}
          />
        )}
        {/* <CertifItemStyled onClick={() => handleOpen(id)}>
          {showFullImg ? (
            <ImageFullSize
              img={react_native}
              alt="React Native"
              handleClose={handleClose}
            />
          ) : (
            <CertifImgStyled src={react_native} alt="react native" />
          )}
        </CertifItemStyled>
        <CertifItemStyled onClick={() => handleOpen('goit')}>
          {showFullImg ? (
            <ImageFullSize
              img={goit}
              alt="GoIT Certificate"
              handleClose={handleClose}
            />
          ) : (
            <CertifImgStyled src={goit} alt="GoIT certificate" />
          )}
        </CertifItemStyled> */}
      </CertifiListStyled>
    </CertifStyled>
  );
};

export default Certificates;
