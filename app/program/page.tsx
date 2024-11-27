import { Metadata } from "next";
import Article from "@/components/Article";
import ScheduleTime from "@/components/ScheduleTime";
import TalkInfoCard from "@/components/TalkInfoCard";

export const metadata: Metadata = {
  title: "Page",
};

const Page = () => {
  return (
    <Article>
      <div className="tw-flex tw-flex-col tw-gap-6 tablet:tw-gap-8">
        <ScheduleTime time="09:30" />
        <TalkInfoCard
          talk={{
            title: "Check-in",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            room: "All",
            start: "9:30",
            end: "10:00",
          }}
          variant="general"
        />
        <ScheduleTime time="10:00" />
        <TalkInfoCard
          talk={{
            title: "Opening",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            room: "All",
            persons: ["Yung-Yu Chen"],
            start: "10:00",
            end: "10:20",
          }}
          variant="general"
        />
        <ScheduleTime time="10:30" />
        <TalkInfoCard
          talk={{
            title: "Introduction - cyntx",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            room: "Talks",
            start: "10:30",
            end: "10:40",
          }}
          variant="talks"
        />
        <TalkInfoCard
          talk={{
            title: "Introduction - modmesh",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            room: "Talks",
            start: "10:45",
            end: "10:55",
          }}
          variant="talks"
        />
        <TalkInfoCard
          talk={{
            title: "Training",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            room: "DUTC",
            start: "10:30",
            end: "12:00",
          }}
          variant="training"
        />
        <ScheduleTime time="11:00" />
        <TalkInfoCard
          talk={{
            title: "Introduction - swprotal",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            room: "Talks",
            start: "11:00",
            end: "11:10",
          }}
          variant="talks"
        />
        <TalkInfoCard
          talk={{
            title: "Introduction - Altlas",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            room: "Talks",
            start: "11:25",
            end: "11:30",
          }}
          variant="talks"
        />
        <ScheduleTime time="11:30" />
        <TalkInfoCard
          talk={{
            title: "Introduction - utensor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            room: "Talks",
            start: "11:35",
            end: "11:45",
          }}
          variant="talks"
        />
        <TalkInfoCard
          talk={{
            title: "Introduction - Pydoc-zhtw",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            room: "Talks",
            start: "11:50",
            end: "12:00",
          }}
          variant="talks"
        />
        <ScheduleTime time="12:00" />
        <TalkInfoCard
          talk={{
            title: "Lunch",
            description: "Lunch time.",
            start: "12:00",
            end: "13:30",
          }}
          variant="general"
        />
        <ScheduleTime time="13:30" />
        <TalkInfoCard
          talk={{
            title: "Training",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            room: "DUTC",
            start: "13:30",
            end: "15:00",
          }}
          variant="training"
        />
        <TalkInfoCard
          talk={{
            title: "Sprint Booths",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            room: "Booths",
            start: "13:30",
            end: "15:00",
          }}
          variant="booths"
        />
        <ScheduleTime time="16:00" />
        <TalkInfoCard
          talk={{
            title: "Training",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            room: "DUTC",
            start: "16:00",
            end: "17:00",
          }}
          variant="training"
        />
        <TalkInfoCard
          talk={{
            title: "Sprint Booths",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            room: "Booths",
            start: "16:00",
            end: "17:00",
          }}
          variant="booths"
        />
        <ScheduleTime time="17:00" />
        <TalkInfoCard
          talk={{
            title: "Reception",
            description: "Reception",
            start: "17:00",
            end: "20:00",
          }}
          variant="general"
        />
      </div>
    </Article>
  );
};

export default Page;
