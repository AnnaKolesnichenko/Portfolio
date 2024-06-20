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

import { motion } from 'framer-motion';

const WorkExample = ({ work }) => {
  return (
    <>
      <WorkItemStyled>
        <AppItemStyled>
          <AppImgStyled
            src={work.image}
            alt={work.title}
            style={{ width: '300px', height: '180px' }}
          />
        </AppItemStyled>

        <ItemOverlayStyled
        // as={motion.div}
        // initial={{ y: 150, opacity: 0 }}
        // whileHover={{ y: 0, opacity: 1 }}
        // transition={{ duration: 0.3, bounce: 0.9 }}
        >
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
                <AppButtonStyled
                  as={motion.div}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    duration: 1,
                    type: 'spring',
                    stiffness: 400,
                    damping: 10,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  code
                </AppButtonStyled>
              </a>
              <a
                href={work.appLink}
                rel="noopener noreferrer"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <AppButtonStyled
                  as={motion.div}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    duration: 1,
                    type: 'spring',
                    stiffness: 400,
                    damping: 10,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  demo
                </AppButtonStyled>
              </a>
            </ButtonContainerStyled>
          </OverlayContainerStyled>
        </ItemOverlayStyled>
      </WorkItemStyled>
    </>
  );
};

export default WorkExample;
