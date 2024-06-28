import logo from "@/public/popwork-logo.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="grid grid-cols-5 gap-12 px-40 py-24 text-[15px]">
      <div className="flex flex-col gap-3">
        <Image src={logo} alt="popwork" />
        <div className="flex flex-col gap-4">
          <p className="text-xs text-[#373528]">
            Popwork, the app that makes managers and teams work better together.
          </p>
          <p className="text-xs text-[#373528]">
            &copy; People over Process SAS
          </p>
          <a href="#">Popwork on LinkedIn</a>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-base font-bold">Discover Popwork</h3>
        <ul className="flex flex-col gap-4">
          <li>
            <a href="#">How ot works</a>
          </li>
          <li>
            <a href="#">Mood tracker</a>
          </li>
          <li>
            <a href="#">Check-in ritual</a>
          </li>
          <li>
            <a href="#">Topics follow-up</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-base font-bold">About</h3>
        <ul className="flex flex-col gap-4">
          <li>
            <a href="#">Manifesto</a>
          </li>
          <li>
            <a href="#">How much it costs</a>
          </li>
          <li>
            <a href="#">User terms</a>
          </li>
          <li>
            <a href="#">Privacy policy</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-base font-bold">Resourses & Help</h3>
        <ul className="flex flex-col gap-4">
          <li>
            <a href="#">Log in</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Product news</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Popwork management guide</a>
          </li>
          <li>
            <a href="#">Popwork questions guide</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-base font-bold">From the Blog</h3>
        <div className="flex flex-col gap-4">
          <a href="#">
            Product update: Better, faster, stronger text editing on Popwork
          </a>
          <a href="#">Prioritize prioritizing!</a>
          <a href="#">Product update: improved objectives are live</a>
          <a href="#">Read more</a>
        </div>
      </div>
    </footer>
  );
}
