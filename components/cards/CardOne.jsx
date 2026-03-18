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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi, quo assumenda laboriosam iusto molestiae sunt commodi sit accusamus quas",
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
      <div className=" relative rounded-b-sm grow">
        <div className="px-5">
          <div className="flex flex-col items-start justify-between pt-5 ">
            <p>
              <span className="text-2xl font-semibold  text-[#10214b] mr-1">
                {hotel[0].price}
              </span>
              <span className="text-sm text-gray-500">/per night</span>
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
            <p className="text-md line-clamp-1 pt-1 font-semibold relative bg-linear-to-r from-indigo-700 to-[#835de2]  bg-clip-text text-transparent">
              {hotel[0]?.name}
            </p>
            <p className="text-xs mt-1 text-gray-500">
              {hotel[0]?.description}
            </p>
          </div>

          <div className="absolute bottom-4">
            <ButtonOne />
          </div>
        </div>
      </div>
    </div>
  );
}
