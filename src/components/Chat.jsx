import TextForm from "./TextForm";

export default function Chat() {
  return (
    <div className="grid grid-cols-5 w-screen h-screen">
      <div className="bg-white text-center">History</div>
      <div className="bg-customPurple col-span-4 flex flex-col p-2 justify-end items-center">
        <section></section>
        <TextForm />
      </div>
    </div>
  );
}
