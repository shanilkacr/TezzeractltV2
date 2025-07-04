export const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-black via-[#120d42] to-[#004091] text-white py-[72px] relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-[#004091] bg-[radial-gradient(closest-side,#000_82%,#3F8BEC)] top-[calc(100%-96px)]"></div>
      <div className="container relative pt-24">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-7xl sm:text-9xl tracking-tighter font-bold mt-8">
            Your Business
            <br /> supercharged with AI
          </h1>
          <p className="text-xl mt-8 max-w-2xl">
            From smart automations to AI-driven tools, we design systems that
            boost productivity, unlock growth, and make work feel effortless.
          </p>
          <button className="mt-8 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
};
