import React from "react";
import { useAppSelector } from "../../../../Redux Toolkit/Store";

const grid = [
  {"categoryId":"women_lehenga_cholis",
        "section": "GRID",
        "name": "women lehenga cholis",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_972200-MLU74088420395_012024-O-audifonos-inalambricos-wh-ch520.webp",
  },
  {"categoryId":"men_formal_shoes",
        "section": "GRID",
        "name": "men formal shoes",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24651572/2023/8/25/4fbf6d8c-d093-46c5-a5a6-7dd67c0c76551692964752597HouseofPataudiMenTanFauxLeatherFormalSlipOnLoafers1.jpg",
  },
  {"categoryId":"women_lehenga_cholis",
        "section": "GRID",
        "name": "women lehenga cholis",
    image:
      "https://images.pexels.com/photos/12730873/pexels-photo-12730873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {"categoryId":"men_sherwanis",
        "section": "GRID",
        "name": "men sherwanis",
    image:
      "https://shreeman.in/cdn/shop/files/20_3cfbd5a3-ecb6-482a-b798-7ffd9de1c784.jpg?v=1712061674&width=700",
  },
  {"categoryId":"women_jewellery",
        "section": "GRID",
        "name": "women jewellery",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_972200-MLU74088420395_012024-O-audifonos-inalambricos-wh-ch520.webp",
  },
  {"categoryId":"women_footwear",
        "section": "GRID",
        "name": "women footwear",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13837166/2021/8/19/04e40e02-4c56-4705-94d0-f444b29973aa1629373611707-House-of-Pataudi-Women-Maroon-Embellished-Handcrafted-Wedges-1.jpg",
  },
];

const placeholderImage = "https://via.placeholder.com/300x200?text=Imagen+no+disponible";
const TopBrand = () => {
  const { homePage } = useAppSelector((store) => store);

  const grid = homePage.homePageData?.grid || [];

  return (
    <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20">
      <div className="col-span-3 row-span-12 text-white rounded">
        <img
          className="w-full h-full object-cover border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={grid[0]?.image || placeholderImage}
          alt=""
        />
      </div>

      <div className="col-span-2 row-span-6 text-white rounded">
        <img
          className="w-full h-full object-cover border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={grid[1]?.image || placeholderImage}
          alt=""
        />
      </div>

      <div className="col-span-4 row-span-6 text-white rounded">
        <img
          className="w-full h-full object-cover object-top border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={grid[2]?.image || placeholderImage}
          alt=""
        />
      </div>

      <div className="col-span-3 row-span-12 text-white rounded">
        <img
          className="w-full h-full object-cover object-top border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={grid[3]?.image || placeholderImage}
          alt=""
        />
      </div>

      <div className="col-span-4 row-span-6 text-white rounded">
        <img
          className="w-full h-full object-cover object-top border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={grid[4]?.image || placeholderImage}
          alt=""
        />
      </div>

      <div className="col-span-2 row-span-6 text-white rounded">
        <img
          className="w-full h-full object-cover border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={grid[5]?.image || placeholderImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default TopBrand;