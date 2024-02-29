import { motion } from 'framer-motion';
import {
  Backdrop,
  CloseBtnStyled,
  ImgFullSize,
  Modal,
} from './ImageFullSize.styled';

const ImageFullSize = ({ img, description, handleClose }) => {
  return (
    <Backdrop>
      <Modal
        as={motion.div}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.4, bounce: 0.4 }}
      >
        <div>
          <CloseBtnStyled onClick={() => handleClose()} />
          <ImgFullSize src={img} alt={description} />
        </div>
      </Modal>
    </Backdrop>
  );
};

export default ImageFullSize;
