import Image from "next/image";
import {
  faDiscord,
  faFacebook,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <section id="hero-section">
      <div className="tw-w-screen tw-h-screen tw-bg-gradient-to-b tw-from-[#FEDFE1] tw-to-[#FFF] tw-relative overflow-y-scroll">
        <header className="tw-w-[100%] tw-h-[100%]">
          <div className="lg:tw-pt-20 tw-w-[100%] tw-h-[100%] tw-flex tw-flex-col tw-items-center tw-pt-5">
            <div className="tw-flex tw-w-[100%] xl:tw-w-[110rem]  tw-justify-between tw-items-center tw-relative tw-px-5 tw-pt-8 tw-pb-14 border-l-2 tw-border-white">
              <div className="tw-absolute tw-h-[100%] tw-top-0 tw-left-0 tw-w-full tw-border-t-2 tw-border-l-2 tw-border-r-2 tw-rounded-md tw-border-white tw-hidden xl:tw-block tw-z-[5]"></div>
              <div className="tw-flex">
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="tw-text-3xl tw-cursor-pointer hover:tw-text-white active:tw-text-sky-400  tw-mr-3"
                />
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="tw-text-3xl tw-cursor-pointer hover:tw-text-white active:tw-text-sky-400  tw-mr-3"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="tw-text-3xl tw-cursor-pointer hover:tw-text-white active:tw-text-sky-400  tw-mr-3"
                />
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="tw-text-3xl tw-cursor-pointer hover:tw-text-white active:tw-text-sky-400 "
                />
              </div>
              <div className="tw-flex tw-items-center">
                <FontAwesomeIcon
                  icon={faUser}
                  className="tw-text-2xl tw-cursor-pointer hover:tw-text-white active:tw-text-sky-400 tw-mr-3"
                />
                <button className="tw-bg-blue-500 hover:tw-bg-blue-700 tw-text-white tw-font-bold tw-py-1 tw-px-4 tw-rounded-full opacity-0">
                  Menu
                </button>
              </div>
            </div>
            <div className="tw-flex tw-w-[100%] xl:tw-w-[110rem] tw-h-[100%] tw-justify-center tw-border-l-2 tw-border-r-2 tw-border-white">
              <p> The main hero section Content</p>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
