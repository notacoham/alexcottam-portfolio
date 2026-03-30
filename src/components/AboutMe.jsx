import profileImg from "../assets/profile-img.png";

const AboutMe = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <img
          src={profileImg}
          alt="profile image"
          className="w-30 h-30 rounded-full hover:scale-110 transition-transform duration-200 mb-4 sm:mb-0 flex-shrink-0"
        />
        <div className="sm:ml-6 text-center sm:text-left">
          <h1 className="font-bold text-2xl sm:text-3xl mb-2">Alex Cottam</h1>
          <p className="text-lg">
            SDET 1 @{" "}
            <a
              className="text-amber-400 underline"
              target="_blank"
              href="https://www.verisk.com/"
            >
              Verisk
            </a>
          </p>
          <p className="text-lg">
            Web Developer @{" "}
            <a
              className="text-amber-400 underline"
              target="_blank"
              href="https://atonom.ai/"
            >
              Atonom
            </a>
          </p>
        </div>
      </div>
      <hr className="border-t border-gray-300 my-4" />
      <div className="mt-4">
        <p className="text-lg mb-2 font-semibold">
          Hi! I'm Alex, a Full-Stack Software Developer. I...
        </p>
        <ul className="list-disc list-inside mb-2">
          <li className="text-sm">
            Create user-friendly and performant mobile applications and websites
          </li>
          <li className="text-sm">
            Develop and maintain RESTful APIs in Django and Node
          </li>
          <li className="text-sm">
            Work with Google Cloud, Firebase, and Supabase
          </li>
          <li className="text-sm">
            Architect and manage automated testing frameworks for UI, unit, and
            API testing with tools such as Playwright and TestNG.
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <p className="text-lg mb-2 font-semibold">Other interests:</p>
        <ul className="list-disc list-inside mb-2">
          <li className="text-sm">Watch and play hockey (Go Mammoths!)</li>
          <li className="text-sm">Backend development with Express.js</li>
          <li className="text-sm">
            Cook and eat delicious food from all cultures
          </li>
          <li className="text-sm">Read sci-fi and fantasy novels</li>
          <li className="text-sm">Playing video games (especially Nintendo)</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
