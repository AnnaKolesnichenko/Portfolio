import {
  AppImgStyled,
  AppItemStyled,
  ButtonContainerStyled,
  ItemOverlayStyled,
  OverlayContainerStyled,
  WorkItemStyled,
  AppTitleStyled,
  AppButtonStyled,
} from './Works.styled';

const WorkExample = ({ work }) => {
  return (
    <>
      <WorkItemStyled>
        <AppItemStyled>
          <AppImgStyled src={work.image} alt={work.title} />
        </AppItemStyled>

        <ItemOverlayStyled>
          <OverlayContainerStyled>
            <div>
              <AppTitleStyled>{work.techs}</AppTitleStyled>
              <AppTitleStyled style={{ color: '#4747c6' }}>
                {work.role}
              </AppTitleStyled>
            </div>
            <ButtonContainerStyled>
              <a
                href={work.code}
                rel="noopener noreferrer"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <AppButtonStyled>code</AppButtonStyled>
              </a>
              <a
                href={work.appLink}
                rel="noopener noreferrer"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <AppButtonStyled>demo app</AppButtonStyled>
              </a>
            </ButtonContainerStyled>
          </OverlayContainerStyled>
        </ItemOverlayStyled>
      </WorkItemStyled>
    </>
  );
};

export default WorkExample;
