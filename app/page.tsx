import Image from "next/image";

import Header from "./_components/header";
import ReviewsCarousel from "./_components/reviews-carousel";

import arrowDown from "@/app/assets/arrow-down.svg";
import featuresWave from "@/app/assets/features-wave.svg";
import manMage from "@/app/assets/man-mage-emoji.png";
import memoji1 from "@/app/assets/memoji-1.png";
import memoji2 from "@/app/assets/memoji-2.png";
import memoji3 from "@/app/assets/memoji-3.png";
import memoji4 from "@/app/assets/memoji-4.png";
import screenshot1 from "@/app/assets/screenshot-1.png";
import screenshot2 from "@/app/assets/screenshot-2.png";
import screenshot3 from "@/app/assets/screenshot-3.png";
import screenshot4 from "@/app/assets/screenshot-4.png";
import screenshot5 from "@/app/assets/screenshot-5.png";
import screenshot6 from "@/app/assets/screenshot-6.png";
import screenshot7 from "@/app/assets/screenshot-7.png";
import screenshot8 from "@/app/assets/screenshot-8.png";
import teamWave from "@/app/assets/team-wave.svg";
import technologist from "@/app/assets/technologist-emoji.png";
import womanElf from "@/app/assets/woman-elf-emoji.png";
import womanSupervillain from "@/app/assets/woman-supervillain-emoji.png";

import kipli from "@/app/assets/companies/kipli.png";
import moodz from "@/app/assets/companies/moodz.png";
import payfit from "@/app/assets/companies/payfit.png";
import prestashop from "@/app/assets/companies/prestashop.png";
import toGoodToGo from "@/app/assets/companies/to-good-to-go.png";
import welcomeToTheJungle from "@/app/assets/companies/welcome-to-the-jungle.png";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col items-center justify-center bg-hero-pattern bg-cover bg-[50%_100%] bg-no-repeat">
        <Header />
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mt-[72px] w-[969px] text-6xl font-bold leading-[72px] tracking-[0.8px]">
            Make your and your team&apos;s lives easier with Popwork
          </h1>
          <h2 className="mt-7 w-[594px] text-[26px] leading-[36px]">
            Boost your team’s performance and engagement with great weekly
            1-to-1 meetings
          </h2>
          <form className="mt-8 w-[400px]">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
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
            </div>
            <p className="mt-4 text-xs leading-3">
              Free 30-days trial, no credit card required
            </p>
          </form>
        </div>
        <div className="mt-16 flex w-[800px] flex-col items-center">
          <div className="flex items-center gap-8 pt-4">
            <Image
              src={welcomeToTheJungle}
              alt="Welcome to the jungle"
              objectFit="contain"
            />
            <Image src={moodz} alt="Moodz" objectFit="contain" />
            <Image src={kipli} alt="Kipli" objectFit="contain" />
            <Image src={payfit} alt="Payfit" objectFit="contain" />
            <Image src={prestashop} alt="Prestashop" objectFit="contain" />
            <Image src={toGoodToGo} alt="To Good to Go" objectFit="contain" />
          </div>
          <p className="mt-4 text-lg leading-[22px]">
            Their teams and hundreds more are using Popwork - in person or
            remote.
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
            src={memoji1}
            alt="memoji1"
            className="absolute left-[-90px] top-[140px]"
          />
        </div>
      </section>
      <section className="flex flex-col items-center text-[58px] font-bold leading-[68px] tracking-[1.2px]">
        <div className="flex gap-14 px-40 pt-16">
          <p>
            Take your{" "}
            <span className="inline-flex h-[55px] items-center bg-accent1">
              team
            </span>{" "}
            <span className="inline-flex h-[55px] items-center bg-accent1">
              management
            </span>{" "}
            to the next level with well prepared 1-to-1{" "}
            <span className="inline-flex h-[55px] items-center bg-accent1">
              meetings
            </span>
          </p>
          <div className="ml-20 flex min-w-[548px] grow flex-col items-center">
            <Image
              src={screenshot1}
              alt="screenshot1"
              className="shadow-[0px_4px_16px_0px_#673F1833]"
            />
            <div className="relative">
              <Image
                src={screenshot2}
                alt="screenshot2"
                className="mt-6 rounded-2xl shadow-[0px_4px_16px_0px_#673F1833]"
              />
              <Image
                src={screenshot3}
                alt="screenshot3"
                className="absolute -left-20 top-[60%] rounded-2xl shadow-[0px_4px_16px_0px_#673F1833]"
              />
            </div>
            <div className="relative mt-[122px]">
              <div className="w-[400px] rounded-l-2xl rounded-br-[4px] rounded-tr-2xl bg-primary pb-[15px] pl-4 pr-[42px] pt-[17px] shadow-[0px_4px_16px_0px_#9A5E2426]">
                <p className="text-base font-normal leading-[22px] tracking-normal text-white">
                  5 questions every week: your team members take 10 minutes to
                  check in with you.
                </p>
              </div>
              <Image
                src={memoji2}
                alt="memoji2"
                className="absolute right-[-90px] top-[26px]"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-14 px-40 pt-[180px]">
          <div className="mr-[65px] min-w-[548px] flex-col">
            <div className="relative">
              <Image
                src={screenshot4}
                alt="screenshot4"
                className="w-[468px] rounded-2xl shadow-[0px_4px_16px_0px_#673F1833]"
              />
              <Image
                src={screenshot5}
                alt="screenshot5"
                className="absolute bottom-[-3px] left-[65px] rounded-2xl shadow-[0px_4px_16px_0px_#673F1833]"
              />
            </div>
            <div className="relative ml-[62px] mt-6">
              <div className="w-[400px] rounded-r-2xl rounded-bl-[4px] rounded-tl-2xl bg-primary pb-[15px] pl-4 pr-[44px] pt-[17px] shadow-[0px_4px_16px_0px_#9A5E2426]">
                <p className="text-base font-normal leading-[22px] tracking-normal text-white">
                  Mood, achievements, priorities, challenges, topics for
                  discussion: Popwork’s workspace includes it all.
                </p>
              </div>
              <Image
                src={memoji3}
                alt="memoji3"
                className="absolute left-[-90px] top-[58px]"
              />
            </div>
          </div>
          <p className="mt-[114px]">
            Focus on the{" "}
            <span className="inline-flex h-[55px] items-center bg-accent2">
              right topics
            </span>{" "}
            and regularly share{" "}
            <span className="inline-flex h-[55px] items-center bg-accent2">
              feedback
            </span>{" "}
            with each team member
          </p>
        </div>
        <div className="relative flex gap-14 px-40 pb-[140px] pt-[260px]">
          <p>
            Turn your conversations{" "}
            <span className="inline-flex h-[55px] items-center bg-accent3">
              into actions
            </span>{" "}
            and make your team move{" "}
            <span className="inline-flex h-[55px] items-center bg-accent3">
              forward week
            </span>
            <span className="inline-flex h-[55px] items-center bg-accent3">
              after week
            </span>
          </p>
          <div className="relative flex min-w-[651px] flex-col gap-3">
            <div className="absolute right-[97px] top-[-78px]">
              <div className="w-[400px] rounded-l-2xl rounded-br-[4px] rounded-tr-2xl bg-primary pb-[15px] pl-4 pr-6 pt-[17px] shadow-[0px_4px_16px_0px_#9A5E2426]">
                <p className="text-base font-normal leading-[22px] tracking-normal text-white">
                  Never forget something again! Discussions are followed up on
                  and topics move forward with Popwork.
                </p>
              </div>
              <Image
                src={memoji4}
                alt="memoji4"
                className="absolute right-[-90px] top-[48px]"
              />
            </div>
            <Image
              src={screenshot6}
              alt="screenshot6"
              className="rounded-2xl shadow-[0px_4px_16px_0px_#673F1833]"
            />
            <Image
              src={screenshot7}
              alt="screenshot7"
              className="rounded-2xl shadow-[0px_4px_16px_0px_#673F1833]"
            />
            <Image
              src={screenshot8}
              alt="screenshot7"
              className="rounded-2xl shadow-[0px_4px_16px_0px_#673F1833]"
            />
          </div>
          <Image
            src={featuresWave}
            alt="featuresWave"
            objectFit="cover"
            className="leeft-0 absolute bottom-[10%] right-0 -z-50 w-full object-cover"
          />
        </div>
      </section>
      <section className="relative h-[510px] w-full bg-primary text-white">
        <div className="flex flex-col items-center gap-[44px] px-40 pb-20 pt-10">
          <h2 className="text-[2.5rem] leading-normal tracking-[0.6px]">
            Is Popwork right for my team ?
          </h2>
          <div className="flex gap-12 text-base font-normal">
            <div className="flex flex-col items-center text-center">
              <Image src={womanElf} alt="womanElf" width={100} />
              <p>C-Levels</p>
              <p className="mt-[18px]">
                Create the conditions needed for effective management at all
                levels of the company
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src={manMage} alt="manMage" width={100} />
              <p>Senior managers</p>
              <p className="mt-[18px]">
                Gain time and boost your team’s performance and engagement week
                after week
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src={womanSupervillain}
                alt="womanSupervillain"
                width={100}
              />
              <p>Junior managers</p>
              <p className="mt-[18px]">
                Start off on the right foot and rely on a simple and proven
                management framework
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src={technologist} alt="technologist" width={100} />
              <p>Remote managers</p>
              <p className="mt-[18px]">
                Maintain close contact with your team remotely while developing
                autonomy
              </p>
            </div>
          </div>
        </div>
        <Image
          src={teamWave}
          alt="pattern"
          objectFit="cover"
          className="absolute bottom-[-1px] w-full object-cover"
        />
      </section>
      <section>
        <div className="pt-20">
          <h1 className="text-center text-[2.5rem] leading-tight tracking-[0.6px]">
            Popwork is a game changer for teams
          </h1>
          <ReviewsCarousel />
        </div>
      </section>
    </main>
  );
}
