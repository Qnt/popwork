import logo from "@/public/popwork-logo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="mx-auto mt-2 flex w-[1200px] items-center justify-between rounded-lg border border-white/60 bg-white/60 px-10 py-6 leading-[21px]">
      <div>
        <Image src={logo} alt="popwork" />
      </div>
      <div className="flex items-center gap-8">
        <nav className="text-[rbga(34,34,34,1)]">
          <ul className="flex items-center gap-8">
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Manifesto</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="bg-primary/5 rounded-lg px-5 pb-[6px] pt-[5px]"
          >
            Log In
          </a>
          <a
            href="#"
            className="bg-primary rounded-lg px-5 pb-[6px] pt-[5px] text-white"
          >
            Try it now
          </a>
        </div>
      </div>
    </header>
  );
}
