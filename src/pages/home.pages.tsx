import Container from "@/components/common/Container";
import Card from "@/components/gallary/Card";
import Header from "@/components/gallary/Header";
import UploadImageCard from "@/components/gallary/UploadImageCard";
import { ImageCollectionData } from "@/data/data";
import { IImageCollectionData } from "@/libs/types";
import { useState } from "react";

const HomePage = () => {
  const [images, setImages] = useState(ImageCollectionData);
  const [selectedImages, setSeletedImages] = useState<number[]>([]);
  const [indexToDrop, setIndexToDrop] = useState<number | null>(null);
  const [draggedImage, setDraggedImage] = useState<IImageCollectionData | null>(
    null
  );

  const handleSelectImage = (imageId: number) => {
    const isSelected = selectedImages.includes(imageId);
    if (isSelected) {
      setSeletedImages((pervImages) =>
        pervImages.filter((id) => id !== imageId)
      );
    } else {
      setSeletedImages((pervImages) => [...pervImages, imageId]);
    }
  };
  const handleDeleteImages = () => {
    setImages((prevImgs) =>
      prevImgs.filter((img) => !selectedImages.includes(img.id))
    );
    setSeletedImages([]);
  };

  const handleUploadImage = (imgFile: File) => {
    setImages((prevCollection) => [
      ...prevCollection,
      {
        id: images.length + 1,
        imgSrc: imgFile,
      },
    ]);
  };
  // dragOverImage to another image
  const dragOverImage = (index: number) => {
    if (indexToDrop !== null) {
      const newImages = [...images];
      newImages[index] = images[indexToDrop];
      newImages[indexToDrop] = images[index];
      setImages(newImages);
    }
  };

  //drag image
  const dragImage = (index: number) => {
    setDraggedImage(images[index]);
    setIndexToDrop(index);
  };

  // drop the image
  const dropImage = (index: number) => {
    if (draggedImage !== null) {
      const newImages = [...images];
      const draggedImageIndex = images.indexOf(draggedImage);
      newImages.splice(index, 0, newImages.splice(draggedImageIndex, 1)[0]);
      setImages(newImages);
      setDraggedImage(null);
      setIndexToDrop(null);
    }
  };
  //
  const handleImageToIndexDrop = (index: number | null) => {
    setIndexToDrop(index);
  };
  return (
    <Container>
      <div className="border-2 rounded-md shadow-md">
        <Header
          handleDelete={() => {
            handleDeleteImages();
          }}
          handleToggleAllSelected={() => {}}
          selectedImgCount={selectedImages.length}
        />
        <div
          className="grid grid-cols-2 gap-4 p-4 mt-6 md:grid-cols-3 lg:grid-cols-5"
          draggable={true}
        >
          {images.map((img, index) => (
            <Card
              img={img}
              index={index}
              toggleChecked={handleSelectImage}
              isSelected={selectedImages.includes(img.id)}
              dragImage={dragImage}
              dragOverImage={dragOverImage}
              dropImage={dropImage}
              handleImageToIndexDrop={handleImageToIndexDrop}
              newDroppableIndex={indexToDrop}
            />
          ))}
          <UploadImageCard handleUpload={handleUploadImage} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
