import Image from "next/image";
import {
  faDiscord,
  faFacebook,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Button from "@/components/Button";
import SocialLink from "@/components/SocialLink";
import iconImg from "@/assets/android-chrome-192x192.png";

const Hero = () => {
  return (
    <div className="tw-w-screen tw-bg-gradient-to-b tw-from-rose-100 tw-to-white">
      <div className="tw-w-full">
        <div className="tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-px-8 tw-pt-5 lg:tw-pt-20">
          <div className="tw-w-full tw-rounded-md tw-border-x-2 tw-border-t-2 tw-border-none tw-border-white tablet:tw-border-solid">
            <div className="tw-flex tw-w-full tw-items-center tw-justify-between tw-px-5 tw-pb-14 tw-pt-8">
              <div className="tw-flex">
                <SocialLink icon={faDiscord} to="https://discord.gg/PaWC7vHz" />
                <SocialLink
                  icon={faXTwitter}
                  to="https://twitter.com/intent/tweet?screen_name=sciwork&ref_src=twsrc%5Etfw"
                />
                <SocialLink
                  icon={faLinkedin}
                  to="https://tw.linkedin.com/company/sciwork"
                />
                <SocialLink
                  icon={faFacebook}
                  to="https://www.facebook.com/sciworkdev"
                />
              </div>
              <div className="tw-flex tw-items-center">
                <Button className="tw-hidden" to="/hello">
                  Menu
                </Button>
              </div>
            </div>
            <div className="tw-flex tw-w-full tw-flex-col tw-items-center">
              <div className="tw-mb-4 tw-flex tw-items-center tw-gap-x-2">
                <Image
                  className="tw-size-12"
                  src={iconImg}
                  alt="sciwork icon"
                />
                <div className="tw-font-yk tw-text-5xl">sciwork conference</div>
              </div>
              <div className="tw-font-yk tw-text-xl">Date: TBD</div>
              <div className="tw-font-yk tw-text-xl">Location: TBD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
