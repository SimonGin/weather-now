interface DailyForecastCardProps {
  day: string;
  iconImg: string;
  high: number;
  low: number;
}

const DailyForecastCard = ({
  day,
  iconImg,
  high,
  low,
}: DailyForecastCardProps) => {
  return (
    <div className="bg-[#25253F] px-2 py-3 rounded-2xl flex flex-col gap-2 items-center shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] border border-gray-500/20">
      <div className="text-lg lg:text-2xl">{day}</div>
      <img src={iconImg} alt="" />
      <div className="w-full flex justify-between text-xl">
        <h4>{high}°</h4>
        <h4>{low}°</h4>
      </div>
    </div>
  );
};

export default DailyForecastCard;
