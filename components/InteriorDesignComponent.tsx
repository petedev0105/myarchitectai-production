"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, ChangeEvent, useEffect, useCallback } from "react";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
import { CompareSlider } from "../components/CompareSlider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";
import Toggle from "../components/Toggle";
import appendNewToName from "../utils/appendNewToName";
import downloadPhoto from "../utils/downloadPhoto";
import DropDown from "../components/DropDown";
import { useDropzone } from "react-dropzone";
import DropDownRestricted from "../components/DropDownRestricted";
import Link from "next/link";
// import { grid } from "ldrs";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/dist/client/components/headers";

import { Image } from "antd";
import ImageUploading from "react-images-uploading";
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
  lightingType,
  lightings,
  interiorStyleType,
  interiorStyles,
  buildingTypes,
  buildingType,
} from "../utils/dropdownTypes";
import { useSupabase } from "../components/supabaseProvider";

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

function InteriorDesignComponent() {
  const [originalPhoto, setOriginalPhoto] = useState<string | null>(null);
  const [restoredImage, setRestoredImage] = useState<string | null>(null);
  const [upscaledImage, setUpscaledImage] = useState<string | null>(null);

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
  const [buildingType, setBuildingType] =
    useState<buildingType>("Residential Home");

  const [interiorStyle, setInteriorStyle] =
    useState<interiorStyleType>("Minimalist Haven");
  const [lighting, setLighting] = useState<lightingType>("Ambient");

  const [edit, setEdit] = useState(true);
  const [uploaded, setUploaded] = useState(false);

  const [imageURL, setImageURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [user, setUser] = useState({});
  const [userEmail, setUserEmail] = useState("");
  const [packageName, setPackageName] = useState("");
  const [extraPrompt, setExtraPrompt] = useState("");

  const [selectedArchitectureType, setSelectedArchitectureType] =
    useState("interior");

  // supaabse stuff
  const { supabase, packageType } = useSupabase();

  const acceptedFileTypes = ["image/png", "image/jpeg"];

  const onDrop = useCallback((acceptedFiles: File[]) => {
    for (const file of acceptedFiles) {
      if (file && acceptedFileTypes.includes(file.type)) {
        const reader = new FileReader();

        reader.onload = () => {
          setImageURL(reader.result as string);
          setOriginalPhoto(reader.result as string);
          setIsLoading(false);
        };
        if (file) {
          reader.readAsDataURL(file);
        }
      } else {
        alert(
          "We only accept PNG, JPG and JPEG files, please try uploading another image."
        );
      }
    }
    // console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onloadstart = () => {
      setIsLoading(true);
    };

    reader.onload = () => {
      setImageURL(reader.result as string);
      const re = reader.result;
      if (typeof reader.result === "string") {
        setOriginalPhoto(reader.result.replace("raw", "thumbnail"));
      } else {
        // Handle the case when reader.result is not a string
      }

      setIsLoading(false);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  function newImage() {
    setOriginalPhoto("");
    setRestoredImage("");
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

  async function generateUpscale(fileUrl: string) {
    try {
      setLoading(true);
      window.scrollTo({ top: 0, behavior: "smooth" });

      const response = await fetch("/api/generate-upscale", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageUrl: fileUrl,
        }),
      });

      if (response.ok) {
        const upscaledPhoto = await response.json();
        console.log(upscaledPhoto);
        setRestoredImage(upscaledPhoto);
      } else if (response.status === 504) {
        alert(
          "Experiencing timeouts? Upgrade to our Pro plan for unlimited images and priority access. Elevate your design process with AIHomeRenders's seamless performance."
        );
      } else if (response.status === 413) {
        alert("Try uploading another picture, file size is too large.");
      } else {
        throw new Error("Failed to generate photo");
      }
    } catch (error: any) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  async function generatePhoto(fileUrl: string) {
    try {
      setLoading(true);
      window.scrollTo({ top: 0, behavior: "smooth" });

      const response = await fetch("/api/generate-interior", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageUrl: fileUrl,
          lighting,
          interiorStyle,
          buildingType,
          extraPrompt
        }),
      });

      if (response.ok) {
        const newPhoto = await response.json();
        console.log(newPhoto);
        setRestoredImage(newPhoto[1]);
      } else if (response.status === 504) {
        alert(
          "Experiencing timeouts? Upgrade to our Pro plan for unlimited images and priority access. Elevate your design process with AIHomeRenders's seamless performance."
        );
      } else if (response.status === 413) {
        alert("Try uploading another picture, file size is too large.");
      } else {
        throw new Error("Failed to generate photo");
      }
    } catch (error: any) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="m-auto">
      <div className="p-7 lg:flex space-x-5">
        <div className="lg:w-1/4 ">
          <div className="p-7 space-y-3  rounded-xl shadow-xl border-2 shadow-sm">
            <div className="flex justify-between w-full">
              <span className="font-bold text-stone-600">Upload Image</span>
              {!originalPhoto ? null : (
                <div className="cursor-pointer" onClick={() => newImage()}>
                  <span className="underline">New image</span>
                </div>
              )}
            </div>
            {originalPhoto ? (
              <Image src={originalPhoto} className="rounded-md border" />
            ) : (
              <div
                {...getRootProps()}
                className={`${
                  isDragActive ? "bg-sky-200" : "bg-white"
                } cursor-pointer text-center p-10 rounded-md border-dashed border-2 bg-slate-50`}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the file here ...</p>
                ) : (
                  <p>
                    Drag and drop or click to upload image of your interior +
                  </p>
                )}
              </div>
            )}

            {packageType == "free" ? (
              <>
                {/* <div className="space-y-4 w-full ">
                <div className="flex mt-10 items-center space-x-3 text-stone-600">
                  <p className="text-left font-bold">
                    Choose your building type ({buildingTypes.length})
                  </p>
                </div>
                <DropDownRestricted
                  theme={buildingType}
                  setTheme={(newBuildingType) =>
                    setBuildingType(newBuildingType as typeof buildingType)
                  }
                  themes={buildingTypes}
                />
              </div> */}
                <div className="space-y-4 w-full ">
                  <div className="flex mt-10 items-center space-x-3 text-stone-600">
                    <p className="text-left font-bold">
                      Interior Styles ({interiorStyles.length})
                    </p>
                  </div>
                  <DropDownRestricted
                    theme={interiorStyle}
                    setTheme={(newInteriorStyle) =>
                      setInteriorStyle(newInteriorStyle as typeof interiorStyle)
                    }
                    themes={interiorStyles}
                  />
                </div>

                <div className="space-y-4 w-full ">
                  <div className="flex mt-10 items-center space-x-3 text-stone-600">
                    <p className="text-left font-bold">
                      Lighting Options ({lightings.length})
                    </p>
                  </div>
                  <DropDownRestricted
                    theme={lighting}
                    setTheme={(newLighting) =>
                      setLighting(newLighting as typeof lighting)
                    }
                    themes={lightings}
                  />
                </div>

                <div className="space-y-4 w-full">
                  <div className="items-center text-stone-600 mt-10">
                    <span className="text-left font-bold">
                      Custom Preferences
                    </span>
                  </div>
                  <textarea
                    disabled
                    onChange={(e) => setExtraPrompt(e.target.value)}
                    className="rounded-md border border-stone-300 px-3 py-2 w-full h-24"
                    placeholder="This is a Pro feature, please upgrade 🔒"
                  />
                </div>
              </>
            ) : (
              <>
                {/* <div className="space-y-4 w-full ">
                <div className="flex mt-10 items-center space-x-3 text-stone-600">
                  <p className="text-left font-bold">
                    Choose your building type ({buildingTypes.length})
                  </p>
                </div>
                <DropDown
                  theme={buildingType}
                  setTheme={(newBuildingType) =>
                    setBuildingType(newBuildingType as typeof buildingType)
                  }
                  themes={buildingTypes}
                />
              </div> */}
                <div className="space-y-4 w-full ">
                  <div className="flex mt-10 items-center space-x-3 text-stone-600">
                    <p className="text-left font-bold">
                      Interior Styles ({interiorStyles.length})
                    </p>
                  </div>
                  <DropDown
                    theme={interiorStyle}
                    setTheme={(newInteriorStyle) =>
                      setInteriorStyle(newInteriorStyle as typeof interiorStyle)
                    }
                    themes={interiorStyles}
                  />
                </div>

                <div className="space-y-4 w-full ">
                  <div className="flex mt-10 items-center space-x-3 text-stone-600">
                    <p className="text-left font-bold">
                      Lighting Options ({lightings.length})
                    </p>
                  </div>
                  <DropDown
                    theme={lighting}
                    setTheme={(newLighting) =>
                      setLighting(newLighting as typeof lighting)
                    }
                    themes={lightings}
                  />
                </div>

                <div className="space-y-4 w-full">
                  <div className="items-center text-stone-600 mt-10">
                    <span className="text-left font-bold">
                      Custom Preferences
                    </span>
                  </div>
                  <textarea
                    onChange={(e) => setExtraPrompt(e.target.value)}
                    className="rounded-md border border-stone-300 px-3 py-2 w-full h-24"
                    placeholder="Night time, Wooden, Cozy, Swimming Pool, Backyard,..."
                  />
                </div>
              </>
            )}

            <div className="z z">
              <button
                onClick={() => {
                  originalPhoto
                    ? generatePhoto(originalPhoto)
                    : console.log("no photo");
                }}
                className="flex space-x-3 items-center justify-center bg-black rounded-md text-white font-bold px-4 py-3 mt-8 hover:bg-stone-700 transition w-full"
              >
                <img src="/img/magic.png" className="w-5 h-5" />
                <span>Build my dream home </span>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-3/4 p-7 space-y-5 rounded-xl ">
          <div className="">
            <span className="font-bold text-stone-600 text-xl">
              Your Generated Image
            </span>
          </div>

          {!restoredImage && (
            <div className="">
              <span className="">Your design will show up here.</span>
            </div>
          )}

          {loading && (
            <button
              disabled
              className="bg-blue-500 rounded-full text-white font-medium px-4 pt-2 pb-3 mt-8 w-40"
            >
              <span className="pt-4">
                <LoadingDots color="black" style="large" />
                {/* <l-grid size="60" speed="1.5" color="black"></l-grid> */}
              </span>
            </button>
          )}
          <div>
            {restoredImage && originalPhoto && !sideBySide && !loading && (
              <div className="">
                <div className="sm:mt-0">
                  <div className="rounded-md">
                    {/* Restored image will show up here */}
                    <Image
                      alt="restored photo"
                      src={restoredImage}
                      className="rounded-md w-full"
                    />
                  </div>
                </div>
                {/* <button
                  onClick={() => {
                    restoredImage
                      ? downloadPhoto(
                          restoredImage,
                          `${interiorStyle} interior, ${lighting} lighting.`
                        )
                      : console.log("no photo");
                  }}
                  className="bg-black rounded-full text-white font-medium px-4 py-2 mt-8 hover:bg-blue-500/80 transition"
                >
                  Download Image
                </button> */}
              </div>
            )}

            {/* {!restoredImage && (
              <div className="py-12">
                <span className="text-xl text-stone-600">
                  No image generated yet, your AI generated design will show up
                  here.
                </span>
              </div>
            )} */}

            {restoredImage && !loading && (
              <div className="flex items-center justify-between pt-5">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={
                      packageType == "free"
                        ? () => alert("This is a Pro feature, please upgrade.")
                        : () => {
                            restoredImage && generateUpscale(restoredImage);
                          }
                    }
                    className="space-x-2 flex px-5 py-3 border-2 rounded-md text-sm font-semibold text-stone-800 hover:bg-slate-50"
                  >
                    <img src="/img/upscale.png" className="h-5 w-5" />
                    <span>Upscale to higher resolution</span>
                  </button>
                  <button
                    onClick={() => {
                      restoredImage
                        ? downloadPhoto(
                            restoredImage,
                            `${interiorStyle} interior, ${lighting} lighting.`
                          )
                        : console.log("no photo");
                    }}
                    className="space-x-2 flex px-5 py-3 border-2 rounded-md text-sm font-semibold text-stone-800 hover:bg-slate-50"
                  >
                    <img src="/img/download.png" className="h-5 w-5" />
                    <span>Download design</span>
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      originalPhoto
                        ? generatePhoto(originalPhoto)
                        : console.log("no photo");
                    }}
                    className="space-x-2 flex px-5 py-3  rounded-md text-sm font-semibold text-white bg-black hover:bg-stone-700"
                  >
                    <img src="/img/regenerate.png" className="h-5 w-5" />
                    <span>Regenerate design</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="pt-10">
            <span className="font-bold text-stone-600 text-xl">
              What others have created
            </span>
          </div>

          <div className="gap-5 grid grid-cols-2">
            <img src="/img/image 83.png" className="rounded-md" />
            <img src="/img/image 84.png" className="rounded-md" />
            <img src="/img/image 85.png" className="rounded-md" />
            <img src="/img/image 86.png" className="rounded-md" />
            <img src="/img/image 87.png" className="rounded-md" />
            <img src="/img/image 88.png" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InteriorDesignComponent;
