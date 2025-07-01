import React from "react";
import { useAppSelector } from "../../../../Redux Toolkit/Store";

const placeholderImage = "https://via.placeholder.com/300x200?text=Imagen+no+disponible";

const TopBrand = () => {
  const { homePage } = useAppSelector((store) => store);

  const grid = homePage.homePageData?.grid?.slice(0, 4) || [];
  const safeGrid = Array.from({ length: 4 }, (_, i) => grid[i] || { image: placeholderImage });

  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4 px-5 lg:px-20">
      {safeGrid.map((item, index) => (
        <div key={index} className="w-full h-[300px]">
          <img
            src={item.image}
            alt={item.name || `Top brand ${index + 1}`}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default TopBrand;
