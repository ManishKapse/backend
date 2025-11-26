import { v2 as cloudinary } from "cloudinary";

import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async (filePath, folder) => {
  try {
    if (!filePath) return;
    // Uploads file to cloudinary
    const response = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });
    // file has uploaded successfully
    console.log("File uploaded to Cloudinary", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(filePath); // Delete the local file in case of error
    return null;
  }
};
