import React from 'react';

type SideImagesProps = {
  images: string[];
};

const SideSection: React.FC<SideImagesProps> = ({ images }) => {
  return (
    <section className="grid grid-cols-2 gap-6">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className="rounded-lg w-[155px] object-contain"
          alt=""
        /> 
      ))}
    </section>
  );
};

export default SideSection;