import clsx from "clsx";

type SimpleTalkType = {
  title: string;
  description: string;
  room?: string;
  persons?: string[];
  start: string;
  end: string;
};

type Props = {
  className?: string;
  variant: "general" | "talks" | "training" | "booths";
  talk: SimpleTalkType;
};

const TalkInfoCard = ({ className, variant, talk, ...props }: Props) => {
  return (
    <div
      className={clsx(
        "tw-rounded-3xl tw-bg-gradient-to-b tw-p-8 tablet:tw-rounded-2xl",
        "tw-from-red-200 tw-to-red-100",
        variant === "talks" && "tw-from-indigo-200 tw-to-indigo-100",
        variant === "training" && "tw-from-purple-200 tw-to-purple-100",
        variant === "booths" && "tw-from-pink-200 tw-to-pink-100",
        className,
      )}
      {...props}
    >
      <div className="tw-flex tw-items-center tw-gap-2">
        <div
          className={clsx(
            "tw-font-yk tw-text-2xl tw-font-medium",
            variant === "general" && "tw-text-rose-800",
            variant === "talks" && "tw-text-indigo-800",
            variant === "training" && "tw-text-purple-800",
            variant === "booths" && "tw-text-pink-800",
          )}
        >
          {talk.title}
        </div>
        {talk.room && (
          <div
            className={clsx(
              "-tw-mt-1 tw-rounded-lg tw-border tw-px-1.5 tw-py-1 tw-text-xs tw-uppercase",
              variant === "general" &&
                "tw-border-rose-500 tw-bg-rose-100 tw-text-rose-700",
              variant === "talks" &&
                "tw-border-indigo-500 tw-bg-indigo-100 tw-text-indigo-700",
              variant === "training" &&
                "tw-border-purple-500 tw-bg-purple-100 tw-text-purple-700",
              variant === "booths" &&
                "tw-border-pink-500 tw-bg-pink-100 tw-text-pink-700",
            )}
          >
            {talk.room}
          </div>
        )}
      </div>
      <div
        className={clsx(
          "tw-text-sm",
          variant === "general" && "tw-text-rose-600",
          variant === "talks" && "tw-text-indigo-600",
          variant === "training" && "tw-text-purple-600",
          variant === "booths" && "tw-text-pink-600",
        )}
      >
        {talk?.persons?.map((person) => person).join(", ")}
      </div>
      <div
        className={clsx(
          "tw-text-sm",
          variant === "general" && "tw-text-rose-400",
          variant === "talks" && "tw-text-indigo-400",
          variant === "training" && "tw-text-purple-400",
          variant === "booths" && "tw-text-pink-400",
        )}
      >
        {talk.start} - {talk.end}
      </div>
      <div
        className={clsx(
          "tw-mt-2 tw-line-clamp-3 tablet:tw-mt-4",
          variant === "general" && "tw-text-rose-700",
          variant === "talks" && "tw-text-indigo-700",
          variant === "training" && "tw-text-purple-700",
          variant === "booths" && "tw-text-pink-700",
        )}
      >
        {talk.description}
      </div>
    </div>
  );
};

export default TalkInfoCard;
