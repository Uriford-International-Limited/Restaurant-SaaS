import { ReactNode } from "react";

type CategPropsTypes = {
  categName: string;
  children:ReactNode;
};

const CardBox = ({ categName, children }: CategPropsTypes) => {
  return (
    <section className="py-5">
      <h2 className="text-2xl font-semibold md:text-3xl md:font-bold my-5">{categName}</h2>
      <div className="flex justify-center lg:justify-start flex-wrap gap-x-7 gap-y-5 md:gap-y-10">{children}</div>
    </section>
  );
};

export default CardBox;
