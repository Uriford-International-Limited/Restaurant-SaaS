import PickupSidebar from "@/components/shared/PickupSidebar";


const RestaurantLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='flex gap-10'>
            <div className='max-w-1/5 flex-1 min-h-screen'>
                <PickupSidebar />
            </div>

            <div className='max-w-4/5 flex-1 min-h-screen' >
                {children}
            </div>
        </div>
    );
};

export default RestaurantLayout;