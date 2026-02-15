import axios from "axios";
import { ContactFormData } from "@/schemas/contact";

const API_URL = "/api/contact";

export const sendMessage = async (data: ContactFormData) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};
