"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, ChangeEvent, useEffect, useCallback } from "react";
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
import { useDropzone } from "react-dropzone";
import DropDownRestricted from "../../components/DropDownRestricted";
import Link from "next/link";

import InteriorDesignComponent from "../../components/InteriorDesignComponent";
import ArchitectureIdeaComponent from "../../components/ArchitectureIdeaComponent";
import ExteriorDesignComponent from "../../components/ExteriorDesignComponent";

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
} from "../../utils/dropdownTypes";
import { useSupabase } from "../../components/supabaseProvider";

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

      const response = await fetch("/generate-upscale", {
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
          "Experiencing timeouts? Upgrade to our Pro plan for unlimited images and priority access. Elevate your design process with MyArchitectAI's seamless performance."
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

      const response = await fetch("/generate-interior", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageUrl: fileUrl,
          lighting,
          interiorStyle,
          buildingType,
        }),
      });

      if (response.ok) {
        const newPhoto = await response.json();
        console.log(newPhoto);
        setRestoredImage(newPhoto[1]);
      } else if (response.status === 504) {
        alert(
          "Experiencing timeouts? Upgrade to our Pro plan for unlimited images and priority access. Elevate your design process with MyArchitectAI's seamless performance."
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
      {packageType !== "free" ? null : (
        <div className="bg-green-600 text-center text-white py-3">
          <span>
            You are currently on the Free Plan.{" "}
            <Link
              href="/pricing"
              target="_blank"
              className="underline font-semibold"
            >
              Use code HR50 at checkout to get 50% OFF all orders
            </Link>
          </span>
        </div>
      )}
      <div className="px-5">
        <Header />
      </div>

      <div className="flex space-x-5 font-semibold py-3 px-7">
        <div
          onClick={() => setSelectedArchitectureType("interior")}
          className={
            selectedArchitectureType == "interior"
              ? "pb-2 px-5 border-b-2 border-black cursor-pointer"
              : "pb-2 px-5 cursor-pointer text-stone-500"
          }
        >
          <span>Home Interior Designer</span>
        </div>
        <div
          onClick={() => setSelectedArchitectureType("exterior")}
          className={
            selectedArchitectureType == "exterior"
              ? "pb-2 px-5 border-b-2 border-black cursor-pointer"
              : "pb-2 px-5 cursor-pointer text-stone-500"
          }
        >
          <span>Home Exterior Designer</span>
        </div>
        <div
          onClick={() => setSelectedArchitectureType("idea-generator")}
          className={
            selectedArchitectureType == "idea-generator"
              ? "pb-2 px-5 border-b-2 border-black cursor-pointer"
              : "pb-2 px-5 cursor-pointer text-stone-500"
          }
        >
          <span>Architecture Idea Visualizer</span>
        </div>
      </div>

      {selectedArchitectureType == "interior" && <InteriorDesignComponent />}

      {selectedArchitectureType == "exterior" && <ExteriorDesignComponent />}

      {selectedArchitectureType == "idea-generator" && (
        <ArchitectureIdeaComponent />
      )}
    </div>
  );
}

export default page;