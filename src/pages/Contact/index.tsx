import { useState } from "react";
import { ContactForm, StatusSendMessage, Wrapper } from "./style";
import { handleChange, handleSubmit } from "../../utils/formUtils";
import { useHandleTransition } from "../../context/transitionContext";

interface FormStateInterface {
  name: string;
  email: string;
  subject: string;
}

const Contact = () => {
  const [buttonVisible, setButtonVisible] = useState<boolean>(true);
  const [statusMessage, setStatusMessage] = useState<string>("Loading...");

  const { transitionOut } = useHandleTransition();

  const [formData, setFormData] = useState<FormStateInterface>({
    name: "",
    email: "",
    subject: "",
  });

  const handleFormChange = (e: any) => handleChange(e, formData, setFormData);

  const handleFormSubmit = (e: any) =>
    handleSubmit(e, setButtonVisible, setStatusMessage, formData, setFormData);

  return (
    <Wrapper
      initial={{ y: 20, opacity: 0 }}
      animate={{
        y: transitionOut ? 20 : 0,
        opacity: transitionOut ? 0 : 1,
      }}
      transition={{ duration: 0.2, delay: 0 }}
    >
      <ContactForm onSubmit={handleFormSubmit}>
        <div>
          <h4>My name is</h4>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            autoComplete="random-string"
            value={formData.name}
            required
            onChange={handleFormChange}
          />
        </div>
        <div>
          <h4>And i have a</h4>
          <input
            type="text"
            name="subject"
            placeholder="Web site, Full time job, etc"
            autoComplete="random-string"
            value={formData.subject}
            required
            onChange={handleFormChange}
          />
        </div>
        <div>
          <h4>that need help. you can reach me at</h4>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            autoComplete="random-string"
            value={formData.email}
            required
            onChange={handleFormChange}
          />
          <h4>to get things</h4>
          <h4>started.</h4>
        </div>

        {buttonVisible ? (
          <button type="submit">Send info</button>
        ) : (
          <StatusSendMessage $success={statusMessage !== "Loading..." && true}>
            {statusMessage}
          </StatusSendMessage>
        )}
      </ContactForm>
    </Wrapper>
  );
};

export default Contact;
