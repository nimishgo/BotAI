import DATA from "../constants/mockData";
import computerIcon from "../assets/AppIcon.png";
export default function MockUp() {
  const arr = DATA.slice(0, 4);
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <p className="text-4xl font-bold text-slate-50">
        How can I help you today?
      </p>
      <img src={computerIcon} alt="AI img" className="w-32 h-32" />
      <div className="grid grid-rows-2 grid-cols-2 gap-6 mb-32 ">
        {arr.map((x, index) => (
          <div
            className="w-full h-full bg-slate-100 p-4 font-semibold rounded-lg text-lg"
            key={index}
          >
            {x.question}
            <p className="font-semibold text-slate-400 text-sm">
              Get immediate AI response
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
