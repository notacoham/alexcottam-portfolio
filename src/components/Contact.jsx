import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <div>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
                <hr className="border-t border-gray-300 mb-4" />
                <p className="mt-2 text-gray-600 text-md">
                    The best way to get in touch with me is through email!
                </p>
                <p className=" text-gray-600 text-md">
                    You can email me at: alexcottam12@gmail.com
                </p>
                <p className="text-gray-600 text-md">
                    Alternatively, you can fill out the form below!
                </p>
            </div>
            <ContactForm />
        </div>
    );
};

export default Contact;
