import styled from 'styled-components';

export const CertifStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 20px;
  max-width: 1024px;
  box-sizing: border-box;
  background-color: #0f1933;

  border-top: 2px solid #182544;
`;

export const CertifMainTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  color: #e2e8f0;
  margin-top: 0;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
`;

export const CertifiListStyled = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

export const CertifItemStyled = styled.li`
  cursor: pointer;
`;

export const CertifImgStyled = styled.img`
  width: auto;
  height: 150px;
`;

export const EducationListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: square;
`;

export const EducationItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: cenetr;
  margin-bottom: 20px;
  position: relative;

  /* &::before {
    content: '';
    position: absolute;
    top: calc(100% + 15px);
    right: 0;
    bottom: 0;
    left: 0;
    width: 170px;
    height: 2px;
    background-color: #182544;
  } */
`;

export const EducationCourseStyled = styled.h2`
  margin: 0;
  margin-bottom: 5px;
  color: #94a3b8;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
`;

export const EducationByStyled = styled.h3`
  margin: 0;
  margin-bottom: 5px;
  color: #94a3b8;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
`;

export const EducationDateStyled = styled.span`
  margin: 0;
  color: #94a3b8;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
`;
