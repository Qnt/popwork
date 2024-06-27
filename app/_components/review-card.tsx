import Image, { StaticImageData } from "next/image";
import ReviewCardWraper from "./ui/review-card-wrapper";

type ReviewCcardProps = {
  reviewerName: string;
  reviewText: string;
  companyLogo: StaticImageData;
  reviewerPosition: string;
  reviewerAvatar: StaticImageData;
};

export default function ReviewCard({ props }: { props: ReviewCcardProps }) {
  return (
    <ReviewCardWraper>
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <Image src={props.companyLogo} alt="companyLogo" height={25} />
            <p className="text-xs text-secondary/60">
              {props.reviewerPosition}
            </p>
          </div>
          <div className="flex justify-between gap-16">
            <p className="text-sm text-primary">{props.reviewText}</p>
            <Image
              src={props.reviewerAvatar}
              alt="reviewerAvatar"
              width={56}
              height={56}
            />
          </div>
        </div>
        <p className="text-sm text-primary">{props.reviewerName}</p>
      </div>
    </ReviewCardWraper>
  );
}
