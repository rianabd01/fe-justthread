import { FaFire } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gray-900/75 backdrop-blur-2xl text-white h-14">
      <div className="container text-2xl flex flex-row w-full h-full items-center justify-between">
        <h1 className="font-bold">JustThread</h1>
        <Link
          href="/leaderboards"
          className="hover:text-orange-500 transition duration-200"
        >
          <FaFire />
        </Link>
      </div>
    </header>
  );
}
