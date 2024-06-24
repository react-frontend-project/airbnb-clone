import React from 'react';
import PostCarousel from './PostCarousel';
import img1 from './images/img-1.jpeg';
import img2 from './images/img-2.jpeg';
import img3 from './images/img-3.jpeg';
import img4 from './images/img-4.jpeg';
import img5 from './images/img-5.jpeg';
import img6 from './images/img-6.jpeg';
import img7 from './images/img-7.jpg';
import img8 from './images/img-8.jpg';
import img9 from './images/img-9.jpg';
import img10 from './images/img-10.jpg';
import img11 from './images/img-11.jpg';
import img12 from './images/img-12.jpg';
import img13 from './images/img-13.jpg';
import img14 from './images/img-14.jpg';
import img15 from './images/img-15.jpg';
import img16 from './images/img-16.jpg';
import img17 from './images/img-17.jpg';
import img18 from './images/img-18.jpg';
import img19 from './images/img-19.jpg';
import img20 from './images/img-20.jpg';
import img21 from './images/img-21.jpg';
import img22 from './images/img-22.jpg';
import img23 from './images/img-23.jpg';
import img24 from './images/img-24.jpg';
import img26 from './images/img-26.jpg';
import img27 from './images/img-27.jpg';
import img28 from './images/img-28.jpg';
import img29 from './images/img-29.jpg';
import img30 from './images/img-30.jpg';
import './PostCarousel.css';

const PostCarouselsContainer = () => {
  const carouselsData = [
    {
      images: [
        { src: img1 },
        { src: img2 },
        { src: img3 }
      ],
    //   captions: [
    //     { title: "First slide label", text: "Nulla vitae elit libero, a pharetra augue mollis interdum." },
    //     { title: "Second slide label", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    //     { title: "Third slide label", text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur." }
    //   ]
    },
    {
      images: [
        { src: img4 },
        { src: img5 },
        { src: img6 }
      ],
    //   captions: [
    //     { title: "Another first slide label", text: "Another description for the first slide." },
    //     { title: "Another second slide label", text: "Another description for the second slide." },
    //     { title: "Another third slide label", text: "Another description for the third slide." }
    //   ]
    },
    {
        images: [
            { src: img7 },
            { src: img8 },
            { src: img9 }
          ]
    },
    {
        images: [
            { src: img10 },
            { src: img11 },
            { src: img12 }
          ]
    },
    {
        images: [
            { src: img22 },
            { src: img23 },
            { src: img24}
          ]
    },
    {
        images: [
            { src: img21 },
            { src: img20 },
            { src: img19 }
          ]
    },
    {
        images: [
            { src: img18 },
            { src: img17 },
            { src: img16 }
          ]
    },
    {
        images: [
            { src: img15 },
            { src: img14 },
            { src: img13 }
          ]
    },
    {
        images: [
            { src: img8 },
            { src: img19 },
            { src: img20 }
          ]
    },
    {
        images: [
            { src: img3 },
            { src: img4 },
            { src: img6 }
          ]
    },
    {
      images: [
          { src: img7 },
          { src: img26 },
          { src: img27 }
        ]
  },
  {
    images: [
        { src: img28 },
        { src: img29 },
        { src: img30 }
      ]
},
    
  ];

  return (
    <div className='carousel-block'>
      {carouselsData.map((carousel, index) => (
        <PostCarousel key={index} images={carousel.images} captions={carousel.captions} />
      ))}
    </div>
    
  );
};

export default PostCarouselsContainer;
