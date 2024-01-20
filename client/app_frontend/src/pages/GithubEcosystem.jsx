import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectPreviewModal from "./ProjectPreviewDialog";

const ImageGrid = () => {
  const [modal, setModal] = useState(false);
  let navigate = useNavigate();
  const images = [
    {
      src: "https://i.pinimg.com/736x/30/65/a5/3065a563087c469ef1f8b86518e5f272.jpg",
      alt: "Image 1",
      text: "One Click Update/Fix Code",
    },
    {
      src: "https://i.pinimg.com/736x/30/65/a5/3065a563087c469ef1f8b86518e5f272.jpg",
      alt: "Image 1",
      text: "Github Profile Analysis",
    },
    {
      src: "https://i.pinimg.com/736x/30/65/a5/3065a563087c469ef1f8b86518e5f272.jpg",
      alt: "Image 1",
      text: "Preview/Demo your WebApp before Deploy 🚀",
    },
  ];

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => {
              if (image.text == "One Click Update/Fix Code")
                navigate("/dashboard/autofix");
              else if (image.text == "Github Profile Analysis")
                navigate("/dashboard/analyse");
              else setModal(true);
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
      <ProjectPreviewModal
        isOpen={modal}
        onClose={() => {
          setModal(false);
        }}
      />
    </div>
  );
};

export default ImageGrid;
