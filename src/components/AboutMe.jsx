import profileImg from '../assets/profile-img.png';

const AboutMe = () => {
    return (
        <div className="p-4">
            <div className="flex">
                <img
                    src={profileImg}
                    alt="profile image"
                    className="w-30 h-30 rounded-full hover:scale-110 transition-transform duration-200"
                />
                <div className="ml-6">
                    <h1 className="font-bold text-3xl mb-2">Alex Cottam</h1>
                    <p className="text-lg">
                        iOS Developer @{" "}
                        <a className="text-amber-400 underline" target='_blank' href="https://www.amanocare.com/">
                            Amano Technologies
                        </a>
                    </p>
                    <p className="text-lg">
                        Web Dev Instructor @{" "} <a className="text-amber-400 underline" target='_blank' href="https://slcc.edu">SLCC</a>
                    </p>
                </div>
            </div>
            <hr className="border-t border-gray-300 my-4" />
            <div className="mt-4">
                <p className="text-lg mb-2 font-semibold">
                    Hi! I'm Alex, an iOS and Web Developer. I...
                </p>
                <ul className="list-disc list-inside mb-2">
                    <li className="text-sm">
                        Create user-friendly and performant mobile applications and websites
                    </li>
                    <li className="text-sm">
                        Develop and maintain RESTful APIs in Django and Node
                    </li>
                    <li className="text-sm">
                        Work with Google Cloud and Firebase
                    </li>
                    <li className="text-sm">
                        Teach web development concepts to students at SLCC in
                        evening classes
                    </li>
                </ul>
            </div>
            <div className="mt-4">
                <p className="text-lg mb-2 font-semibold">
                    Other interests:
                </p>
                <ul className="list-disc list-inside mb-2">
                    <li className="text-sm">
                        Watch and play hockey (Go Mammoths!)
                    </li>
                    <li className="text-sm">
                        Backend development with Python
                    </li>
                    <li className="text-sm">
                        Cook and eat delicious food from all cultures
                    </li>
                    <li className="text-sm">
                        Read sci-fi and fantasy novels
                    </li>
                    <li className="text-sm">
                        Playing video games (especially Nintendo)
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AboutMe
