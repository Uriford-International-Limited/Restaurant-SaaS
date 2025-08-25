import React from 'react';

const PickupSidebar = () => {
    return (

        <div className="border-1 p-5 rounded-3xl border-slate-300 space-y-3 overflow-y-scroll">
            <div className='flex justify-between'>
                <h3 className="text-lg font-bold">Filter</h3>
                <button>Reset all</button>
            </div>

            <div className="space-y-2">
                <p className="text-sm font-medium">Short by</p>
                <div className='flex gap-3 text-sm'>
                    <input type="radio" name="short" />
                    <span>Relevance</span>
                </div>
                <div className='flex gap-3 text-sm'>
                    <input type="radio" name="short" />
                    <span>top rated</span>
                </div>
                <div className='flex gap-3 text-sm'>
                    <input type="radio" name="short" className="" />
                    <span>Distance</span>
                </div>


            </div>

            <div className="space-y-2">
                <p className="text-lg font-bold">Offers</p>
                <div>
                    <input type="checkbox" className="mr-3" />
                    <span>Accepts vouchers</span>
                </div>
                <div>
                    <input type="checkbox" className="mr-3" />
                    <span>Deals</span>
                </div>
            </div>


            <div className="space-y-2">
                <p className="text-lg font-bold">Cuisines</p>
                <input type="search" className="outline-1 rounded-2xl" />

                {
                    cuisines.map((list, index) => (
                        <div key={index}>
                            <input type="checkbox" className="mr-3" />
                            <span>{list.name}</span>
                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default PickupSidebar;


const cuisines = [
    { name: "Asian" },
    { name: "Bakery" },
    { name: "Bangladeshi" },
    { name: "Beverage" },
    { name: "Biryani" },
    { name: "Breakfast" },
    { name: "Asian" },
    { name: "Bakery" },
    { name: "Bangladeshi" },
    { name: "Beverage" },
    { name: "Biryani" },
    { name: "Breakfast" },
    { name: "Bakery" },
    { name: "Test" },
]