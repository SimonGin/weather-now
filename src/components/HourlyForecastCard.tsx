interface HourlyForecastCardProps {
  iconImg: string;
  time: string;
  degree: number;
}

const HourlyForecastCard = ({
  iconImg,
  time,
  degree,
}: HourlyForecastCardProps) => {
  return (
    <div className="flex items-center justify-between p-4 w-full bg-[#2F2F49] text-xl rounded-xl">
      <img src={iconImg} alt="" className="h-12" />
      <h3 className="text-xl">{time}</h3>
      <h3 className="ml-auto text-lg">{degree}°</h3>
    </div>
  );
};

export default HourlyForecastCard;
