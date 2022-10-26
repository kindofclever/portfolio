import SimpleImageSlider from 'react-simple-image-slider';

import React from 'react';

const Slider = ({ aboutMe }) => {
  const images = [
    { url: aboutMe[0].fields.picture2.fields.file.url },
    { url: aboutMe[0].fields.picture1.fields.file.url },
    { url: aboutMe[0].fields.picture3.fields.file.url },
    { url: aboutMe[0].fields.picture4.fields.file.url },
    { url: aboutMe[0].fields.picture5.fields.file.url },
    { url: aboutMe[0].fields.picture6.fields.file.url },
    { url: aboutMe[0].fields.picture7.fields.file.url },
    { url: aboutMe[0].fields.picture8.fields.file.url },
  ];

  return (
    <SimpleImageSlider
      width={600}
      height={320}
      images={images}
      loop={true}
      autoPlay={true}
      showNavs={true}
      autoPlayDelay={3}
    />
  );
};

export default Slider;
