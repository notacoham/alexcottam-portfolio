import { useState } from "react";
import { IoSend } from "react-icons/io5";

const ContactForm = () => {
    const apiKey = import.meta.env.VITE_WEB_3_FORMS_ACCESS_KEY;
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", apiKey);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-[#f6fff8] rounded-lg">
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                    name="message"
                    required
                    placeholder="Your Message"
                    className="border border-gray-300 rounded px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
                <button
                    type="submit"
                    className="bg-[#eaf4f4] hover:bg-[#A4C3B2] p-2 border-2 border-solid border-gray-300 shadow-md rounded-md"
                >
                    <IoSend className="inline-block mr-2" />
                    Submit Form
                </button>
            </form>
            <span className="block mt-4 text-center text-sm text-gray-600">
                {result}
            </span>
        </div>
    );
}

export default ContactForm;