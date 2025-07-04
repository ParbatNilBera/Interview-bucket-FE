import { API_PATH } from "./apiPath";
import axiosInstance from "./axiosIntsance";

const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);
  try {
    const response = await axiosInstance.post(
      API_PATH.IMAGE.UPLOAD_IMAGE,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data; // should contain { imageUrl: "..." }
  } catch (error) {
    console.error("Image upload failed", error);
    throw error;
  }
};

export default uploadImage;
