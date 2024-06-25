import arrowDown from "@/app/assets/arrow-down.svg";
import kipli from "@/app/assets/kipli.png";
import memoji from "@/app/assets/memoji.png";
import moodz from "@/app/assets/moodz.png";
import payfit from "@/app/assets/payfit.png";
import prestashop from "@/app/assets/prestashop.png";
import toGoodToGo from "@/app/assets/to-good-to-go.png";
import welcomeToTheJungle from "@/app/assets/welcome-to-the-jungle.png";
import Image from "next/image";
import Header from "./header";

const companies = [
  welcomeToTheJungle,
  moodz,
  kipli,
  payfit,
  prestashop,
  toGoodToGo,
];

export default function Hero() {
  return (
    <div className="bg-hero-pattern flex flex-col items-center justify-center">
      <Header />
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="mt-[72px] w-[969px] text-6xl font-bold leading-[72px] tracking-[0.8px]">
          Make your and your team&apos;s lives easier with Popwork
        </h1>
        <h2 className="mt-7 w-[594px] text-[26px] leading-[36px]">
          Boost your team’s performance and engagement with great weekly 1-to-1
          meetings
        </h2>
        <form className="relative mt-8 w-[400px]">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="yourname@company.com"
            className="w-full rounded-2xl border border-white/40 bg-white/85 px-[26px] py-[18px] text-lg leading-3 shadow-[0px_4px_16px_0px_rgba(55,53,40,0.15)]"
          />

          <button
            type="button"
            className="absolute bottom-[5px] right-[5px] top-[5px] rounded-xl bg-[radial-gradient(92.4%_626.63%_at_7.6%_21.88%,#C67AF7_0%,#FF75C0_42.19%,#FFC95F_97.92%)] px-[22px] text-lg font-bold leading-3 text-white shadow-[0px_0px_0px_0px_rgba(183,102,255,0.3)]"
          >
            Try it now
          </button>
        </form>
        <p className="mt-4 text-xs leading-3">
          Free 30-days trial, no credit card required
        </p>
      </div>
      <div className="mt-16 flex w-[800px] flex-col items-center">
        <div className="flex items-center gap-8 pt-4">
          {companies.map((company, i) => (
            <Image key={i} src={company} alt="company" objectFit="contain" />
          ))}
        </div>
        <p className="mt-4 text-lg leading-[22px]">
          Their teams and hundreds more are using Popwork - in person or remote.
        </p>
        <Image src={arrowDown} alt="arrow" className="mt-8" />
      </div>
      <div className="relative mb-[120px] mt-16 h-[180px] w-[600px] rounded-r-xl rounded-bl-[4px] rounded-tl-xl bg-[#FEFCFA] p-6 pr-14 shadow-[0px_4px_16px_0px_#F4E6D7]">
        <div className="flex flex-col gap-[22px] text-lg leading-[22px]">
          <p>
            Every week, Popwork asks a few simple questions to your team about
            what matters. It’s what we call a check-in. ✌️
          </p>
          <p>
            Popwork is also an intuitive workspace to prepare 1-to-1 meetings,
            share feedback and follow up on topics week after week.
          </p>
        </div>
        <Image
          src={memoji}
          alt="memoji"
          className="absolute left-[-90px] top-[140px]"
        />
      </div>
    </div>
  );
}
