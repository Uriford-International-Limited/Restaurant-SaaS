const length = 50;

const AllCategSection = () => {
  return (
    <section>
      <div className="flex justify-between items-end px-2.5">
        <h2 className="text-xl md:text-3xl font-bold">All categories</h2>
        <p className="underline cursor-pointer text-sm">View All</p>
      </div>

      <div className="scrollbarHide grid grid-flow-col grid-rows-2 overflow-x-auto xl:flex xl:justify-between gap-5 p-5">
        {Array.from({ length }).map((_, i) => (
          <div
            key={i}
            className="w-26 text-center font-medium text-sm leading-5"
          >
            <div className="size-26 rounded-lg shadow-sm hover:shadow-lg bg-fp-light mb-2 overflow-hidden cursor-pointer bg-[url('https://images.deliveryhero.io/image/darkstores/nv-global-catalog/bd/c43dbc4a-3bd2-4c76-9615-6532e0b4ba46.png?height=104&dpi=1')] bg-center bg-cover"></div>
            <p>Limited Time Deals</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllCategSection;
