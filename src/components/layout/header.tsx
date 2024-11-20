import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
const navlinks = [
  { label: "Product", href: "/products", drop: true },
  { label: "Developer", href: "/developer", drop: true },
  { label: "Community", href: "/community", drop: true },
  { label: "Resources", href: "/resources", drop: true },
  { label: "Pricing", href: "/pricing", drop: false },
];
export default function Header() {
  return (
    <header className="bg-[#f5f8fb] px-4 py-3 text-[#1c2022]">
      <div className="max-w-[1200px] mx-auto flex justify-start items-center">
        <div>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Penpot logo"
              width={155}
              height={47.97}
            />
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-5 justify-start ml-3 p-2 w-full">
            {navlinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className="py-2 pl-[10px] pr-[3px]"
              >
                <div className="flex items-center justify-center gap-1 group">
                  <li className="text-base font-medium group-hover:opacity-70 ease-in duration-500">
                    {link.label}
                  </li>
                  {link.drop && (
                    <IoIosArrowDown className=" opacity-50 group-hover:opacity-100 ease-out" />
                  )}
                </div>
              </Link>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-7 justify-start ml-auto">
          <button className="hover:text-white hover:bg-[#32efb9] cursor-pointer px-5 py-3 rounded-lg ease-in duration-300">
            Log in
          </button>
          <button className="bg-[#32efb9] hover:bg-[#2ed8a8] cursor-pointer px-5 py-3 rounded-lg hover:text-white ease-in duration-300">
            <span className="font-semibold ">Sign Up for free</span>
          </button>
        </div>
      </div>
    </header>
  );
}
