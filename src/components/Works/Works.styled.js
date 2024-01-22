import styled from 'styled-components';

export const AppsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 20px;
  box-sizing: border-box;
  background-color: #0f1933;
  max-width: 1024px;
  border-top: 2px solid #182544;
`;

export const AppsListStyled = styled.ul`
  list-style: none;
  margin: 0;
  width: 974px;
  align-items: center;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ProjectsTitleStyled = styled.h1`
  text-align: center;
  font-size: 24px;
  color: #e2e8f0;
  margin-top: 0;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
`;

export const AppItemStyled = styled.a`
  width: 300px;
  //display: block;
`;

export const AppImgStyled = styled.img`
  width: 300px;
  height: auto;
`;

export const WorkItemStyled = styled.li`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    z-index: 100;
    transform: scale(110%);
    transition: transform 550ms ease;
  }
`;

export const ItemOverlayStyled = styled.div`
  display: block;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 300px;
  height: 210px;
  padding: 5px 5px;
  /* padding-top: 40px;
  padding-left: 32px;
  padding-right: 32px; */
  background: rgba(255, 255, 255, 0.5);
  opacity: 1;
  transform: translateY(100%);
  transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1);

  ${WorkItemStyled}:hover & {
    cursor: pointer;
    opacity: 1;
    transform: translateY(0); /* Show the overlay on hover */
  }
`;

export const OverlayContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 10px;
`;

export const AppTitleStyled = styled.h2`
  text-align: center;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  color: #0f1933;
`;

export const AppButtonStyled = styled.div`
  display: block;
  border: 1px solid #0f1933;
  padding: 10px 12px;
  font-size: 12px;
  text-decoration: none;
  text-transform: uppercase;
  color: #e2e8f8;
  border: 1px solid #94a3b8;
  border-radius: 2px;
  background-color: #0f1933;
`;
