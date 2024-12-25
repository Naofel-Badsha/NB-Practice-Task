

const BrandCard = () => {
    return (
        <div className="container m-auto py-36">
            <h2 className="text-xl font-medium text-gray-800 uppercase text-center">We worked with global largest brands</h2>
            
            <div className="flex items-center justify-center flex-wrap  gap-10 mt-16">
                {/*---------Brand-----1-----*/}
                <div>
                    <img src="https://i.ibb.co.com/nfJcKKC/brand-1.png" className="w-[180px]" />
                </div>
                {/*---------Brand-----2-----*/}
                <div>
                    <img src="https://i.ibb.co.com/JpxZmtq/brand-2.png" className="w-[180px]" />
                </div>
                {/*---------Brand-----3-----*/}
                <div>
                    <img src="https://i.ibb.co.com/r2B10s9/brand-3.png" className="w-[180px]" />
                </div>
                {/*---------Brand-----4-----*/}
                <div>
                    <img src="https://i.ibb.co.com/9TYNm7p/brand-5.png" className="w-[180px]" />
                </div>
                {/*---------Brand-----5-----*/}
                <div>
                    <img src="https://i.ibb.co.com/QNykVmq/brand-4.png" className="w-[180px]" />
                </div>
                {/*---------Brand-----6-----*/}
                <div>
                    <img src="https://i.ibb.co.com/r6xsFgZ/brand-7.png" className="w-[180px]" />
                </div>
            </div>
        </div>
    );
};

export default BrandCard;