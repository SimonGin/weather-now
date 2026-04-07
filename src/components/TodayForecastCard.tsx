interface TodayForecastCardProps {
  location: string;
  dmy: string;
  degree: number;
}

const TodayForecastCard = ({
  degree,
  location,
  dmy,
}: TodayForecastCardProps) => {
  return (
    <section className="w-full z-1 relative before:absolute before:inset-0 before:bg-[url(/bg-today-large.svg)] before:bg-no-repeat before:-z-1 lg:before:bg-cover  text-white lg:py-28 px-5 flex flex-col lg:flex-row justify-between items-center">
      <div className="w-full flex flex-col gap-3 ">
        <h1 className="text-2xl lg:text-4xl font-bold">{location}</h1>
        <h2 className="text-2xl">{dmy}</h2>
      </div>
      <h1 className="text-5xl lg:text-9xl font-black italic text-end">
        {degree}º
      </h1>
    </section>
  );
};

export default TodayForecastCard;
