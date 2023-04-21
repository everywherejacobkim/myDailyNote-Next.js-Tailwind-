import Link from "next/link";
import { HiOutlineBookOpen } from "react-icons/hi";

const Landing: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <main className="border-4 border-white rounded-lg w-1/3 transform -translate-y-1/4 p-8">
        <nav className="hover:translate-y-[-0.5rem] transition duration-250 ease-in-out">
          <Link href="/">
            <div className="text-white text-center mt-2">
                <h1 className="text-4xl font-bold mb-4">My Daily Note</h1>
                <div className="flex justify-center">
                    <HiOutlineBookOpen className="text-4xl" />
                </div>
            </div>
          </Link>
        </nav>
      </main>
    </div>
  );
};

export default Landing;
