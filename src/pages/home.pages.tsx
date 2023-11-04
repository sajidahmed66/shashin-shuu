import Container from "@/components/common/Container";
import { ImageCollectionData } from "@/data/data";
import { twJoin } from "tailwind-merge";
const HomePage = () => {
  return (
    <Container>
      <div className="border-2 rounded-md shadow-md">
        {/* select and delete file */}
        <div className="flex flex-row items-center justify-between h-20 px-6 border-b-2">
          <div className="flex flex-row items-center gap-4">
            <input
              type="checkbox"
              name="checkSelectd"
              id="none"
              className="w-6 h-6 "
            />
            <p className="text-base font-bold">{`${3} files selected`}</p>
          </div>
          <div>
            <p className="text-base text-red-600"> Delete File</p>
          </div>
        </div>
        {/* end */}
        {/* layout */}
        <div className="grid grid-cols-2 gap-4 p-4 mt-6 md:grid-cols-3 lg:grid-cols-5">
          {ImageCollectionData.map((img, index) => (
            <div
              className={twJoin(
                index === 0 && "col-span-2 row-span-2",
                "group relative cursor-pointer rounded-md border-gray-50 border-2 before:inset-0 before:absolute before:block before:content-normal before:w-full before:h-full before:rounded before:transition-all before:duration-700  before:ease-in-out before:hover:bg-gray-100 before:opacity-40"
              )}
              key={index}
              draggable={true}
            >
              <img
                src={img.imgSrc as string}
                className="object-cover w-full h-full overflow-hidden"
              />
              <div
                className={twJoin(
                  "absolute h-6 w-6 bg-white top-7 left-7 justify-center items-center text-lg group-hover:flex",
                  false ? "flex" : "hidden"
                )}
              >
                <input
                  type="checkbox"
                  className="w-full h-full"
                  name=""
                  id=""
                  // checked={}
                />
              </div>
            </div>
          ))}
          {/* upload image div */}
          <div
            className="flex items-center justify-center w-full h-full border-4 border-gray-500 border-dotted cursor-pointer"
            onClick={() => console.log("image uploaded")}
          >
            Add a image
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
