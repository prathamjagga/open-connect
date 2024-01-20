import React from "react";
import { useNavigate } from "react-router-dom";

const ImageGrid = () => {
  let navigate = useNavigate();
  const images = [
    {
      src: "https://i.pinimg.com/736x/30/65/a5/3065a563087c469ef1f8b86518e5f272.jpg",
      alt: "Image 1",
      text: "Auto Fix",
    },
    {
      src: "https://i.pinimg.com/736x/30/65/a5/3065a563087c469ef1f8b86518e5f272.jpg",
      alt: "",
      text: " 2",
    },
    {
      src: "https://i.pinimg.com/736x/30/65/a5/3065a563087c469ef1f8b86518e5f272.jpg",
      alt: "Image 3",
      text: "Description 3",
    },
    {
      src: "https://i.pinimg.com/736x/30/65/a5/3065a563087c469ef1f8b86518e5f272.jpg",
      alt: "Image 4",
      text: "Description 4",
    },
    {
      src: "https://i.pinimg.com/736x/30/65/a5/3065a563087c469ef1f8b86518e5f272.jpg",
      alt: "Image 5",
      text: "Description 5",
    },
    {
      src: "https://i.pinimg.com/736x/30/65/a5/3065a563087c469ef1f8b86518e5f272.jpg",
      alt: "Image 6",
      text: "Description 6",
    },
  ];

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => {
              navigate("/dashboard/autofix");
            }}
            className="relative m-4 transform cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-110"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-48 w-full object-contain "
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-sm text-white">
              {image.text}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <span className="rounded-md bg-yellow-500 p-2 text-white">
          More features coming soon...
        </span>
      </div>
    </div>
  );
};

export default ImageGrid;
