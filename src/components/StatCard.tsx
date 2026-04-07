interface StatCardProps {
  title: string;
  value: string;
}

const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <div className="bg-[#25253F] p-6 rounded-2xl flex flex-col gap-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] border border-gray-500/20">
      <h2 className="text-lg lg:text-xl">{title}</h2>
      <h1 className="text-3xl">{value}</h1>
    </div>
  );
};

export default StatCard;
