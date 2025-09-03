import { ReactNode } from "react";

type CategPropsTypes = {
  categName: string;
  children:ReactNode;
};

const CardBox = ({ categName, children }: CategPropsTypes) => {
  return (
    <section className="py-5">
      <h2 className="text-4xl font-semibold my-5">{categName}</h2>
      <div className="flex justify-center lg:justify-start flex-wrap gap-x-7 gap-y-10">{children}</div>
    </section>
  );
};

export default CardBox;
