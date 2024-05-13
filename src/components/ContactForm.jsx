import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8080/portfolio/v1/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", message: "" });
      } else {
        alert("Failed to send message: " + result.error);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message due to an error.");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 text-white font-primary"
    >
      <p>Contact Me!</p>
      <div className="flex items-center">
        <label className="flex-shrink-0 text-sm text-white">
          your@name: <span className="text-orange-500">~ </span>$
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="who you are"
          className="flex-1 ml-2 text-sm text-white bg-transparent outline-none"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <label className="text-sm text-white">
          your@message: <span className="text-orange-500">~ </span>$
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          className="text-sm text-white bg-transparent outline-none"
          rows="3"
          placeholder="whatever you want to say"
          style={{ width: "100%" }}
        />
      </div>
      <button
        type="submit"
        className="self-start p-1.5 text-white bg-black hover:bg-white hover:text-black"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
