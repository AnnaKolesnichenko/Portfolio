import {
  Backdrop,
  CloseBtnStyled,
  ImgFullSize,
  Modal,
} from './ImageFullSize.styled';

const ImageFullSize = ({ img, description, handleClose }) => {
  return (
    <Backdrop>
      <Modal>
        <div>
          <CloseBtnStyled onClick={() => handleClose()} />
          <ImgFullSize src={img} alt={description} />
        </div>
      </Modal>
    </Backdrop>
  );
};

export default ImageFullSize;
