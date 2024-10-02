import React from "react";

const JoinWaitList = () => {
  return (
    <div className="join-waitlist text-primary">
      <div className="w-2/5 pl-14 pt-24">
        <h2 className="text-[64px] leading-[64px] tracking-[-0.02em]">
          Join the Fluid AI Waitlist Today!
        </h2>
        <form className="flex flex-col pt-10">
          <div className="relative flex flex-col mb-10">
            <input
              type="text"
              id="name"
              placeholder=" "
              className="border-b border-b-white/40 bg-transparent focus:outline-none peer text-white"
            />
            <label
              htmlFor="name"
              className="absolute left-0 text-white/40 transition-all transform -translate-y-6 scale-75 origin-left opacity-0 peer-placeholder-shown:opacity-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:opacity-100"
            >
              Name
            </label>
          </div>

          <div className="relative flex flex-col mb-10">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="border-b border-b-white/40 bg-transparent focus:outline-none peer text-white"
            />
            <label
              htmlFor="email"
              className="absolute left-0 text-white/40 transition-all transform -translate-y-6 scale-75 origin-left opacity-0 peer-placeholder-shown:opacity-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:opacity-100"
            >
              Email
            </label>
          </div>
          <div className="relative flex flex-col mb-10">
            <select
              id="country"
              className="bg-transparent border-b border-white/40 text-white focus:outline-none py-2"
              defaultValue="uae"
            >
              <option value="uae" className="bg-black text-white">
                🇦🇪 United Arab Emirates
              </option>
              <option value="usa" className="bg-black text-white">
                🇺🇸 United States
              </option>
              <option value="poland" className="bg-black text-white">
                🇵🇱 Poland
              </option>
              <option value="france" className="bg-black text-white">
                🇫🇷 France
              </option>
              <option value="ethiopia" className="bg-black text-white">
                🇪🇹 Ethiopia
              </option>
            </select>
          </div>
          <button type="submit" className="flex flex-col justify-center items-center gap-2 px-0 py-4 w-[167px] h-[52px] left-[80px] top-[550px] bg-white shadow-[0px_5px_30px_rgba(255,255,255,0.61)] rounded-[52px] text-black font-medium text-[16px] leading-none">
            Join Waitlist
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinWaitList;
