import Container from "@/components/common/Container";
import Card from "@/components/gallary/Card";
import Header from "@/components/gallary/Header";
import UploadImageCard from "@/components/gallary/UploadImageCard";
import { ImageCollectionData } from "@/data/data";
const HomePage = () => {
  return (
    <Container>
      <div className="border-2 rounded-md shadow-md">
        <Header />
        <div className="grid grid-cols-2 gap-4 p-4 mt-6 md:grid-cols-3 lg:grid-cols-5">
          {ImageCollectionData.map((img, index) => (
            <Card img={img} index={index} />
          ))}
          <UploadImageCard handleUpload={() => {}} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
