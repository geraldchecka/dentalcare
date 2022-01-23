import { Image } from '../../styles/banner.styled';

const VectoredImage = function({ src, id }) {
  return (
    <Image id={id} src={"/" + src + ".svg"} alt="image" />
  );
}

export default VectoredImage;