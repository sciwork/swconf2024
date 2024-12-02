import NextLink from "next/link";

const DrawerSecondaryLink = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) => {
  return (
    <NextLink className="tw-block tw-w-full tw-font-yk" href={to}>
      <div className="tw-px-7 tw-py-2 tw-text-2xl tw-font-medium tw-leading-loose tw-text-gray-400 hover:tw-text-sky-400">
        {children}
      </div>
    </NextLink>
  );
};

export default DrawerSecondaryLink;
