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
    <section className="w-full z-1 relative before:absolute before:inset-0 before:bg-[url(/bg-today-large.svg)] before:bg-no-repeat before:-z-1 before:bg-cover text-white py-28 px-5 flex justify-between items-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold">{location}</h1>
        <h2 className="text-2xl">{dmy}</h2>
      </div>
      <h1 className="text-9xl font-black italic">{degree}º</h1>
    </section>
  );
};

export default TodayForecastCard;
