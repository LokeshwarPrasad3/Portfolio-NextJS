import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "@/services/contact";
import { toast } from "sonner";
import { ContactFormData } from "@/schemas/contact";

export const useSendMessage = () => {
  return useMutation({
    mutationFn: (data: ContactFormData) => sendMessage(data),
    onSuccess: () => {
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    },
    onError: (error: any) => {
      console.error("Error sending message:", error);
      const errorMessage =
        error.response?.data?.error || error.message || "Failed to send message. Please try again.";
      toast.error("Something went wrong.", {
        description: errorMessage,
      });
    },
  });
};
