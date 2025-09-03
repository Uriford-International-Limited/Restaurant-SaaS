import Card from "@/app/_component/UI/Card";
import { StoreDataInterface } from "@/datas/stores";

type CategPropsTypes = {
  allStores: StoreDataInterface[];
};

const CardBoxForStore = ({ allStores }: CategPropsTypes) => {
  const openStore = allStores.filter((store) => store.isOpen === true);
  const closeStore = allStores.filter((store) => store.isOpen === false);

  return (
    <div className="py-5 space-y-10">
      {openStore.length > 0 && (
        <section>
          <h2 className="text-4xl font-semibold my-5">Shop by store</h2>
          <div className="flex justify-center md:justify-around xl:justify-start flex-wrap gap-x-7 gap-y-5 md:gap-y-10">
            {openStore.map((store, idx) => (
              <Card
                key={idx}
                size="md"
                content={{
                  banner: store.storeBanner,
                  label: store.label,
                  like: true ? "liked" : "nolike",
                  title: store.storeName,
                  deliveryTime: "15-25",
                  deliveryCharge: store.deliveryCharge,
                }}
              />
            ))}
          </div>
        </section>
      )}

      {closeStore.length > 0 && (
        <section>
          <h2 className="text-4xl font-semibold mb-5">Closed for now</h2>
          <div className="flex justify-center md:justify-around xl:justify-start flex-wrap gap-x-7 gap-y-5 md:gap-y-10">
            {closeStore.map((store, idx) => (
              <Card
                key={idx}
                overlay
                size="md"
                content={{
                  banner: store.storeBanner,
                  title: store.storeName,
                  deliveryTime: store.deliveryTime,
                  deliveryCharge: store.deliveryCharge,
                }}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default CardBoxForStore;
