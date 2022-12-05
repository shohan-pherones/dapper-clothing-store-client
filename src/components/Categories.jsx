const Categories = () => {
  return (
    <div className="categories">
      <div className="px-5 py-20 grid grid-cols-4 grid-rows-2 gap-5 h-[100vh]">
        <div className="men relative">
          <img
            src="https://images.pexels.com/photos/2860887/pexels-photo-2860887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Men"
            className="w-full h-full object-cover"
          />
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto text-white uppercase text-4xl font-semibold bg-black w-fit h-fit py-3 px-7 mb-10">
            Men
          </button>
        </div>
        <div className="new row-span-2 relative">
          <img
            src="https://images.pexels.com/photos/2728762/pexels-photo-2728762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="New Arrival"
            className="w-full h-full object-cover"
          />
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto text-white uppercase text-4xl font-semibold bg-black w-fit h-fit py-3 px-7 mb-10">
            New Arrival
          </button>
        </div>
        <div className="children relative">
          <img
            src="https://images.pexels.com/photos/3662979/pexels-photo-3662979.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Children"
            className="w-full h-full object-cover"
          />
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto text-white uppercase text-4xl font-semibold bg-black w-fit h-fit py-3 px-7 mb-10">
            Children
          </button>
        </div>
        <div className="accessories relative">
          <img
            src="https://images.pexels.com/photos/3757030/pexels-photo-3757030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Accessories"
            className="w-full h-full object-cover"
          />
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto text-white uppercase text-4xl font-semibold bg-black w-fit h-fit py-3 px-7 mb-10">
            Accessories
          </button>
        </div>
        <div className="women relative">
          <img
            src="https://images.pexels.com/photos/1845831/pexels-photo-1845831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Women"
            className="w-full h-full object-cover"
          />
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto text-white uppercase text-4xl font-semibold bg-black w-fit h-fit py-3 px-7 mb-10">
            Women
          </button>
        </div>
        <div className="trending col-span-2 relative">
          <img
            src="https://images.pexels.com/photos/8973457/pexels-photo-8973457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Trending"
            className="w-full h-full object-cover"
          />
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto text-white uppercase text-4xl font-semibold bg-black w-fit h-fit py-3 px-7 mb-10">
            Trending
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
