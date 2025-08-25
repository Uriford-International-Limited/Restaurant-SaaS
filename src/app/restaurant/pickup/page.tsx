import Cuisines from "@/components/pickup/Cuisines";


const Pickup = () => {
    return (
        <div className=''>

            <div className='min-h-screen' >
                <div className='bg-green-300 min-h-28 w-full rounded-3xl'>
                    {/* <h1>This position includes map direction</h1> */}
                </div>

                <div className="my-5">
                    {/* <input type="text" className="p-5 bg-gray-200 w-full rounded-full" /> */}
                    <label className="input flex items-center space-x-5 bg-gray-200 p-3 rounded-full">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input className="w-full text-sm font-bold p-2 outline-0" type="search" required placeholder="Search for restaurant, cuisines, and dishes" />
                    </label>
                </div>

                <Cuisines/>
            </div>
        </div>
    );
};

export default Pickup;