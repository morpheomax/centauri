import React, { useState } from "react";

const images = [
  {
    src: "./images/galeria/1.webp",
    title: "Imagen 1",
    description: "Descripción de la imagen 1",
  },
  {
    src: "./images/galeria/2.webp",
    title: "Imagen 2",
    description: "Descripción de la imagen 2",
  },
  {
    src: "./images/galeria/3.webp",
    title: "Imagen 3",
    description: "Descripción de la imagen 3",
  },
  {
    src: "./images/galeria/4.webp",
    title: "Imagen 4",
    description: "Descripción de la imagen 4",
  },
  {
    src: "./images/galeria/5.webp",
    title: "Imagen 5",
    description: "Descripción de la imagen 5",
  },
  {
    src: "./images/galeria/6.webp",
    title: "Imagen 6",
    description: "Descripción de la imagen 6",
  },
  {
    src: "./images/galeria/7.webp",
    title: "Imagen 7",
    description: "Descripción de la imagen 7",
  },
  {
    src: "./images/galeria/8.webp",
    title: "Imagen 8",
    description: "Descripción de la imagen 8",
  },
  {
    src: "./images/galeria/9.webp",
    title: "Imagen 9",
    description: "Descripción de la imagen 9",
  },
  {
    src: "./images/galeria/10.webp",
    title: "Imagen 10",
    description: "Descripción de la imagen 10",
  },
  {
    src: "./images/galeria/11.webp",
    title: "Imagen 11",
    description: "Descripción de la imagen 11",
  },
  {
    src: "./images/galeria/12.webp",
    title: "Imagen 12",
    description: "Descripción de la imagen 12",
  },
];

const GalleryMasonry: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const imagesPerPage = 4;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const currentImages = images.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  return (
    <div className="gallery-container">
      {/* Contenedor de la cuadrícula de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-700 ease-in-out">
        {currentImages.map((image, index) => (
          <div
            key={index}
            className="gallery-item transition-transform duration-700 ease-in-out transform hover:scale-105"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-96 object-cover rounded-md cursor-pointer"
              onClick={() => openModal(image.src)}
            />
            <div className="mt-2 text-center">
              <p className="font-semibold text-lg">{image.title}</p>
              <p className="text-sm text-gray-300">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="pagination mt-6 flex justify-center space-x-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300"
            } hover:bg-blue-500 hover:text-white`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Modal para ver la imagen en grande */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={modalImage}
              alt="Imagen ampliada"
              className="w-full h-[100dvh] object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
            >
              <span className="text-2xl">&times;</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryMasonry;
