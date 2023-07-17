"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
import { CompareSlider } from "../../components/CompareSlider";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoadingDots from "../../components/LoadingDots";
import ResizablePanel from "../../components/ResizablePanel";
import Toggle from "../../components/Toggle";
import appendNewToName from "../../utils/appendNewToName";
import downloadPhoto from "../../utils/downloadPhoto";
import DropDown from "../../components/DropDown";
import { Image } from "antd";
import {
  roomType,
  rooms,
  themeType,
  themes,
  locations,
  houseStyles,
  materials,
  seasons,
  houseStyleType,
  materialType,
  locationType,
  seasonType,
} from "../../utils/dropdownTypes";

const uploader = Uploader({
  apiKey: !!process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    ? process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    : "free",
});

const options = {
  maxFileCount: 1,
  mimeTypes: ["image/jpeg", "image/png", "image/jpg"],
  editor: { images: { crop: false } },
  // styles: {
  //   colors: {
  //     primary: "#2563EB", // Primary buttons & links
  //     error: "#d23f4d", // Error messages
  //     shade100: "#fff", // Standard text
  //     shade200: "#fffe", // Secondary button text
  //     shade300: "#fffd", // Secondary button text (hover)
  //     shade400: "#fffc", // Welcome text
  //     shade500: "#fff9", // Modal close button
  //     shade600: "#fff7", // Border
  //     shade700: "#fff2", // Progress indicator background
  //     shade800: "#fff1", // File item background
  //     shade900: "#ffff", // Various (draggable crop buttons, etc.)
  //   },
  // },
};

function page() {
  const [originalPhoto, setOriginalPhoto] = useState<string | null>(null);
  const [restoredImage, setRestoredImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [restoredLoaded, setRestoredLoaded] = useState<boolean>(false);
  const [sideBySide, setSideBySide] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [theme, setTheme] = useState<themeType>("Modern");
  const [room, setRoom] = useState<roomType>("Living Room");

  const [houseStyle, setHouseStyle] = useState<houseStyleType>("Modern");
  const [season, setSeason] = useState<seasonType>("Autumn");
  const [material, setMaterial] = useState<materialType>("Wooden");
  const [location, setLocation] = useState<locationType>("Cliff");

  const [edit, setEdit] = useState(true);
  const [uploaded, setUploaded] = useState(false);

  function newImage() {
    setOriginalPhoto("");
  }

  const UploadDropZone = () => (
    <UploadDropzone
      uploader={uploader}
      options={options}
      onUpdate={(file) => {
        if (file.length !== 0) {
          setPhotoName(file[0].originalFile.originalFileName);
          setOriginalPhoto(file[0].fileUrl.replace("raw", "thumbnail"));

          // generatePhoto(file[0].fileUrl.replace("raw", "thumbnail"));
        }
      }}
      width="700px"
      height="250px"
    />
  );

  async function generatePhoto(fileUrl: string) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    // setEdit(false);
    setLoading(true);
    const res = await fetch("/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imageUrl: fileUrl,
        theme,
        room,
        location,
        season,
        houseStyle,
        material,
      }),
    });

    let newPhoto = await res.json();
    if (res.status !== 200) {
      setError(newPhoto);
    } else {
      setRestoredImage(newPhoto[1]);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }
  return (
    <div className="px-10 m-auto">
      <Header />

      <div className="border-t lg:flex">
        <div className="lg:w-1/3 border-r p-7 space-y-5">
          <span className="font-bold text-2xl underline">
            Exterior Architecture Design Studio
          </span>
          <div>
            <span className="text-stone-600 text-sm">
              Our AI-powered app automates the process of remodeling and
              revisualizing scenes. Simply upload your sketches or photos, and
              watch as the app transforms them into stunning designs in various
              styles and preferences.
            </span>
          </div>
          <div className="flex justify-between w-full pb-5">
            <span className="font-bold text-stone-600">Upload Image</span>
            {!originalPhoto ? null : (
              <div className="cursor-pointer" onClick={() => newImage()}>
                <span className="underline">New image</span>
              </div>
            )}
          </div>
          {!originalPhoto && <UploadDropZone />}
          {originalPhoto && (
            <Image
              alt="original photo"
              src={originalPhoto}
              //   className="rounded-2xl "
              // height={475}
            />
          )}

          <div className="space-y-4 w-full ">
            <div className="flex mt-10 items-center space-x-3">
              <p className="text-left font-bold font-bold text-stone-600">
                Choose your house style
              </p>
            </div>
            <DropDown
              theme={houseStyle}
              setTheme={(newHouseStyle) =>
                setHouseStyle(newHouseStyle as typeof houseStyle)
              }
              themes={houseStyles}
            />
          </div>

          <div className="space-y-4 w-full ">
            <div className="flex mt-10 items-center space-x-3 text-stone-600">
              <p className="text-left font-bold">Choose your location</p>
            </div>
            <DropDown
              theme={location}
              setTheme={(newLocation) =>
                setLocation(newLocation as typeof location)
              }
              themes={locations}
            />
          </div>

          <div className="space-y-4 w-full ">
            <div className="flex mt-10 items-center space-x-3 text-stone-600">
              <p className="text-left font-bold">Choose your house material</p>
            </div>
            <DropDown
              theme={material}
              setTheme={(newMaterial) =>
                setMaterial(newMaterial as typeof material)
              }
              themes={materials}
            />
          </div>

          <div className="space-y-4 w-full">
            <div className="flex mt-10 items-center space-x-3 text-stone-600">
              <p className="text-left font-bold">Choose the season</p>
            </div>
            <DropDown
              theme={season}
              setTheme={(newSeason) => setSeason(newSeason as typeof season)}
              themes={seasons}
            />
          </div>
          <button
            onClick={() => {
              originalPhoto
                ? generatePhoto(originalPhoto)
                : console.log("no photo");
            }}
            className="bg-blue-500 rounded-full text-white font-medium px-4 py-2 mt-8 hover:bg-blue-500/80 transition w-full"
          >
            Generate my house
          </button>
        </div>
        <div className="lg:w-2/3 p-7 space-y-5">
          <div>
            <span className="font-bold">Generated Image</span>
          </div>
          {loading && (
            <button
              disabled
              className="bg-blue-500 rounded-full text-white font-medium px-4 pt-2 pb-3 mt-8 w-40"
            >
              <span className="pt-4">
                <LoadingDots color="white" style="large" />
              </span>
            </button>
          )}
          <div>
            {restoredImage && originalPhoto && !sideBySide && (
              <div className="flex sm:space-x-4 sm:flex-row flex-col">
                <div className="sm:mt-0 mt-8">
                  <a>
                    <Image
                      //   alt="restored photo"
                      src={restoredImage}
                      //   className="rounded-2xl relative sm:mt-0 mt-2 cursor-zoom-in w-full "
                      width={600}
                      onLoad={() => setRestoredLoaded(true)}
                    />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
