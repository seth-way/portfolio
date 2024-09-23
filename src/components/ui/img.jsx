import { useState, useEffect } from 'react';

export default function Img({ imgName, folder, type, svgProp }) {
  const [image, setImage] = useState(null);
  useEffect(() => {
    const importIMG = async () => {
      try {
        const newImage = await import(
          `@/assets/images/${folder}/${imgName}.${type}`
        );
        setImage(() => newImage.default);
      } catch (error) {
        console.warn(`Error loading image: ${imgName}`, error);
      }
    };

    importIMG();
  }, [imgName]);

  return image ? (
    <img src={image} alt={`${imgName} icon`} {...svgProp} />
  ) : null;
}
