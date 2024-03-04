import axios from "axios";

interface HandleChangeInterface {
  (
    e: React.MouseEvent,
    formData: { name: string; subject: string; email: string },
    setFormData: Function
  ): void;
}

interface HandleSubmitInterface {
  (
    e: React.MouseEvent,
    setButtonVisible: Function,
    setStatusMessage: Function,
    formData: { name: string; subject: string; email: string },
    setFormData: Function
  ): void;
}

export const handleChange: HandleChangeInterface = (
  e,
  formData,
  setFormData
) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

export const handleSubmit: HandleSubmitInterface = async (
  e,
  setButtonVisible,
  setStatusMessage,
  formData,
  setFormData
) => {
  e.preventDefault();
  setButtonVisible(false);

  const params = new URLSearchParams();
  for (const key in formData) {
    params.append(key, formData[key]);
  }

  try {
    await axios.post(import.meta.env.VITE_SEND_EMAIL_URL, params.toString());
    //console.log("Email have been send");

    setStatusMessage("Email send succesfully");

    setTimeout(() => {
      setButtonVisible(true);
      setStatusMessage("Loading...");
    }, 2000);

    setFormData({
      name: "",
      email: "",
      subject: "",
    });
  } catch (error) {
    console.error("error: ", error);
    setButtonVisible(true);
  }
};
