import { v2 as cloudinary } from "cloudinary";

import fs from "fs";
//import { upload } from "../middlewares/multter.middleware";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // Uploads file to cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has uploaded successfully
    //console.log("File uploaded to Cloudinary", response.url);
    fs.unlinkSync(localFilePath); // Delete the local file after successful upload
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // Delete the local file in case of error
    return null;
  }
};

export { uploadOnCloudinary };
