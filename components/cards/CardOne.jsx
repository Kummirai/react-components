import Image from "next/image";
import ButtonOne from "../buttons/ButtonOne";

export default function CardOne({}) {
  const hotel = [
    {
      property_token: "abcdefg0123567",
      name: "Queen Victoria Hotel",
      image: "/img/hotel.webp",
      price: "R 1 200",
      overall_rating: 4.6,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi, quo a",
    },
  ];

  const createRating = (rating) => {
    const remainder = rating % 1;
    const whole = Math.trunc(rating);
    const fullStar = "★";
    const halfFullStar = "⯨";
    const emptyStar = "☆";

    let stars = "";

    for (let i = 0; i < whole; i++) {
      stars += fullStar;
    }

    if (remainder) {
      stars += halfFullStar;
    }

    return stars;
  };

  return (
    <div className="h-110 flex flex-col shadow rounded-b-sm max-w-85">
      <div className="relative max-w-200 h-50 object-cover ">
        <Image
          src={hotel[0].image}
          alt={hotel[0].property_token}
          fill
          className="rounded-t-sm"
          placeholder="blur"
          blurDataURL="..."
        />
      </div>
      <div className="flex rounded-b-sm grow">
        <div className="px-3 flex flex-col justify-start">
          <div className="flex flex-col items-start justify-between pt-2 ">
            <p className="text-[24px] line-clamp-1 pt-1 font-semibold relative bg-linear-to-r from-indigo-800 to-[#885ef0]  bg-clip-text text-transparent">
              {hotel[0]?.name}
            </p>
            <p className="flex my-1 items-center">
              <span className="mr-1 flex items-center text-yellow-400 text-md">
                {createRating(hotel[0].overall_rating)}
              </span>
              <span className="text-sm text-gray-600">
                {hotel[0]?.overall_rating}
              </span>
            </p>
          </div>
          <div>
            <p className="text-[15px] mt-1 text-[var(--text-color)]">
              {hotel[0]?.description}
            </p>
          </div>

          <div className="my-5 w-full flex flex-col gap-5 justify-between">
            <p>
              <span className="text-2xl font-bold  text-[#10214b] mr-1">
                {hotel[0].price}
              </span>
              <span className="text-sm text-gray-500">/per night</span>
            </p>
            <ButtonOne />
          </div>
        </div>
      </div>
    </div>
  );
}
