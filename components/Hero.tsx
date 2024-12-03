"use client";

import Image from "next/image";
import { REGISTER_URL } from "@/configurations/constants";
import {
  faDiscord,
  faFacebook,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import routes from "@/configurations/routes";
import Button from "@/components/Button";
import SocialLink from "@/components/IconLink";
import MobileNavigator from "@/components/MenuDrawer";
import iconImg from "@/assets/android-chrome-192x192.png";

const Hero = () => {
  const hasOtherPages =
    routes.filter((route) => !route.disabled && route.path !== "/").length > 0;
  const eventDate = new Date('2024-12-14T00:00:00-08:00');
  const currentDate = new Date();

  return (
    <div className="tw-w-screen tw-bg-gradient-to-b tw-from-rose-100 tw-to-white">
      <div className="tw-w-full">
        <div className="tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-px-8 tw-pt-5 lg:tw-pt-20">
          <div className="tw-w-full tw-rounded-md tw-border-x-2 tw-border-t-2 tw-border-none tw-border-white tablet:tw-border-solid">
            <div className="tw-flex tw-w-full tw-items-center tw-justify-between tw-px-5 tw-pb-14 tw-pt-8">
              <div className="tw-flex">
                <SocialLink icon={faDiscord} to="https://discord.gg/6MAkFrD" />
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
              {hasOtherPages && (
                <div className="tw-flex tw-items-center">
                  <MobileNavigator />
                </div>
              )}
            </div>
            <div className="tw-flex tw-w-full tw-flex-col tw-items-center">
              <div className="tw-mb-6 tw-flex tw-flex-col tw-items-center tw-gap-4 tablet:tw-mb-8 tablet:tw-flex-row tablet:tw-gap-2">
                <Image
                  className="tw-size-12"
                  src={iconImg}
                  alt="sciwork icon"
                />
                <div className="tw-font-yk tw-text-5xl tablet:tw-text-7xl">
                  sciwork conference
                </div>
              </div>
              <div className="tw-font-yk tw-text-xl tablet:tw-text-3xl">
                December 14th
              </div>
              <div className="tw-font-yk tw-text-xl tablet:tw-text-3xl">
                National Taiwan University
              </div>
              {currentDate < eventDate && (
                <div className="tw-pt-5">
                  <Button variant="action" to={REGISTER_URL} target="_blank">
                    Sign up now!
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
