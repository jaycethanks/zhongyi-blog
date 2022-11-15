import { PropsWithChildren } from "react";

export default ({ children }: PropsWithChildren) => {
  return (
    <div className="container mx-auto max-w-[80rem] p-2 md:py-4 md:px-4 xl:w-[70%]">
      {children}
    </div>
  );
};
