import ReviewCard from "./review-card";

import auCdeurDesVilles from "@/app/assets/companies/au-cdeur-des-villes.png";
import creditChateaudun from "@/app/assets/companies/credit-chateaudun.png";
import equiGenerali from "@/app/assets/companies/equi-generali.png";
import forestAdmin from "@/app/assets/companies/forest-admin.png";
import kipli from "@/app/assets/companies/kipli.png";
import merciAlex from "@/app/assets/companies/merci-alex.png";
import moodz from "@/app/assets/companies/moodz.png";
import phenix from "@/app/assets/companies/phenix.png";
import pony from "@/app/assets/companies/pony.png";
import prestashop from "@/app/assets/companies/prestashop.png";
import staffme from "@/app/assets/companies/staffme.png";
import vroomly from "@/app/assets/companies/vroomly.png";
import webforce from "@/app/assets/companies/webforce.png";
import welcomeToTheJungle from "@/app/assets/companies/welcome-to-the-jungle.png";

import alienorBeheghel from "@/app/assets/reviewers/alienor-behaghel.jpg";
import antoineLoredo from "@/app/assets/reviewers/antoine-loredo.png";
import benoitYeche from "@/app/assets/reviewers/benoit-yeche.png";
import charlotteBregeon from "@/app/assets/reviewers/charlotte-bregeon.jpg";
import claraVaisse from "@/app/assets/reviewers/clara-vaisse.jpg";
import gregoireTayeau from "@/app/assets/reviewers/gregoire-tayeau.jpg";
import jeanneLatilFlamme from "@/app/assets/reviewers/jeanne-latil-flamme.jpg";
import marieLouiseNielsen from "@/app/assets/reviewers/marie-louise-nielsen.jpg";
import mathieuPagache from "@/app/assets/reviewers/mathieu-pagache.jpg";
import maximeBertin from "@/app/assets/reviewers/maxime-bertin.jpg";
import melanieBabinot from "@/app/assets/reviewers/melanie-babinot.jpg";
import nelsonBurton from "@/app/assets/reviewers/nelson-burton.jpg";
import nicolasChagny from "@/app/assets/reviewers/nicolas-chagny.jpg";
import pawelVisor from "@/app/assets/reviewers/pawel-visor.jpg";
import tancredeLeMerrer from "@/app/assets/reviewers/tancrede-le-merrer.jpg";

const reviews = [
  [
    {
      reviewerName: "Aliénor Behaghel",
      reviewText:
        "With Popwork, I have access to all the important information of my team.",
      companyLogo: staffme,
      reviewerPosition: "Manager",
      reviewerAvatar: alienorBeheghel,
    },
    {
      reviewerName: "Antoine Loredo",
      reviewText:
        "After a few weeks, I can’t imagine managing my team without Popwork.",
      companyLogo: kipli,
      reviewerPosition: "Manager",
      reviewerAvatar: antoineLoredo,
    },
    {
      reviewerName: "Benoit Yèche",
      reviewText:
        "It’s super user friendly to follow your team and discuss the right topics.",
      companyLogo: vroomly,
      reviewerPosition: "Manager",
      reviewerAvatar: benoitYeche,
    },
    {
      reviewerName: "Charlotte Bregeon",
      reviewText:
        "Thanks to Popwork, I can easily update my manager and ask for support when I need it.",
      companyLogo: moodz,
      reviewerPosition: "Team member",
      reviewerAvatar: charlotteBregeon,
    },
    {
      reviewerName: "Clara Vaisse",
      reviewText:
        "This gorgeous tool was immediately adopted by the team. It sets the right dynamics without any extra mental load.",
      companyLogo: pony,
      reviewerPosition: "Executive",
      reviewerAvatar: claraVaisse,
    },
  ],
  [
    {
      reviewerName: "Grégoire Tayeau",
      reviewText: "Clear, simple and efficient.",
      companyLogo: equiGenerali,
      reviewerPosition: "Manager",
      reviewerAvatar: gregoireTayeau,
    },
    {
      reviewerName: "Jeanne Latil-Flamme",
      reviewText:
        "With Popwork, I can focus on the right topics with my manager and make progress week after week.",
      companyLogo: phenix,
      reviewerPosition: "Team member",
      reviewerAvatar: jeanneLatilFlamme,
    },
    {
      reviewerName: "Marie Louise Neilsen",
      reviewText: "Popwork helps me prioritize my work every week.",
      companyLogo: prestashop,
      reviewerPosition: "Team member",
      reviewerAvatar: marieLouiseNielsen,
    },
    {
      reviewerName: "Mathieu Pagache",
      reviewText:
        "Our teams are distributed over 3 cities. I've found the right tool to keep connected with each of them regularly.",
      companyLogo: merciAlex,
      reviewerPosition: "CEO",
      reviewerAvatar: mathieuPagache,
    },
    {
      reviewerName: "Maxime Bertin",
      reviewText:
        "Super useful to have that moment every week when we talk about them and not only their to-do lists.",
      companyLogo: creditChateaudun,
      reviewerPosition: "Manager",
      reviewerAvatar: maximeBertin,
    },
  ],
  [
    {
      reviewerName: "Melanie Babinot",
      reviewText:
        "Popwork gives an intuitive and clear framework that facilitates feedback and follow-up.",
      companyLogo: welcomeToTheJungle,
      reviewerPosition: "Manager",
      reviewerAvatar: melanieBabinot,
    },
    {
      reviewerName: "Nelsor Burton",
      reviewText:
        "Popwork helps me structure the topics of my team; I save time every week !",
      companyLogo: auCdeurDesVilles,
      reviewerPosition: "Executive",
      reviewerAvatar: nelsonBurton,
    },
    {
      reviewerName: "Nicolas Chagny",
      reviewText:
        "Great tool that allows me to take the pulse and bring up topics that are not necessarily on my radar.",
      companyLogo: webforce,
      reviewerPosition: "Executive",
      reviewerAvatar: nicolasChagny,
    },
    {
      reviewerName: "Pawel Visor",
      reviewText:
        "Popwork has everything I need to work in a trustful environment with my team, especially as a remote manager.",
      companyLogo: prestashop,
      reviewerPosition: "Manager",
      reviewerAvatar: pawelVisor,
    },
    {
      reviewerName: "Tancrède Le Merrer",
      reviewText:
        "Popwork helps to spot and tackle topics with anticipation without micromanaging things. Best no bullshit tool!",
      companyLogo: forestAdmin,
      reviewerPosition: "Manager",
      reviewerAvatar: tancredeLeMerrer,
    },
  ],
];

export default function ReviewsCarousel() {
  return (
    <div className="mt-[50px] w-full overflow-hidden">
      <div className="flex animate-ticker flex-col gap-8">
        <div className="flex gap-4">
          {[...reviews[0], ...reviews[0]].map((review, i) => (
            <ReviewCard key={review.reviewerName + i} props={review} />
          ))}
        </div>
        <div className="flex -translate-x-32 gap-4">
          {[...reviews[1], ...reviews[1]].map((review, i) => (
            <ReviewCard key={review.reviewerName + i} props={review} />
          ))}
        </div>
        <div className="flex gap-4">
          {[...reviews[2], ...reviews[2]].map((review, i) => (
            <ReviewCard key={review.reviewerName + i} props={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
