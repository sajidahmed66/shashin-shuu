import Container from "@/components/common/Container";
import Card from "@/components/gallary/Card";
import Header from "@/components/gallary/Header";
import UploadImageCard from "@/components/gallary/UploadImageCard";
import { ImageCollectionData } from "@/data/data";
import { useState } from "react";

const HomePage = () => {
  const [images, setImages] = useState(ImageCollectionData);
  const [selectedImages, setSeletedImages] = useState<number[]>([]);

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
        <div className="grid grid-cols-2 gap-4 p-4 mt-6 md:grid-cols-3 lg:grid-cols-5">
          {images.map((img, index) => (
            <Card
              img={img}
              index={index}
              toggleChecked={handleSelectImage}
              isSelected={selectedImages.includes(img.id)}
            />
          ))}
          <UploadImageCard handleUpload={() => {}} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
