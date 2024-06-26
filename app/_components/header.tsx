import logo from "@/public/popwork-logo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="mx-auto mt-2 flex items-center justify-between gap-10 rounded-lg border border-white/60 bg-white/60 px-10 py-6 leading-[21px] xl:w-[1200px]">
      <Image src={logo} alt="popwork" />
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
            className="rounded-lg bg-primary/5 px-5 pb-[6px] pt-[5px]"
          >
            Log In
          </a>
          <a
            href="#"
            className="rounded-lg bg-primary px-5 pb-[6px] pt-[5px] text-white"
          >
            Try it now
          </a>
        </div>
      </div>
    </header>
  );
}
