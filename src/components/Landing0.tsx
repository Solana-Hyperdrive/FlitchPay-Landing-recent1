import Link from "next/link";

export default function Landing0() {
  return (
    <div style={{ height: "100vh", width: "100%", background: "radial-gradient(70.32% 109% at 98.17% 55.75%, #401694 11.37%, #000 100%)" }} className="relative overflow-hidden">
      <div className="border-solid border-gray-500 rounded-xl border-2 p-3 ml-[1.75rem] mt-[1.44rem] w-[90%] h-[95%] xl:w-[95%] xl:h-[95%] xl:m-6 ">
        <div className="w-[42.15545rem] xl:ml-[6.31rem] xl:mt-[5.69rem]">
          <div className="font-bold text-[1.98463rem] tracking-[-0.03969rem] text-white w-[17.5rem] xl:w-[42.15544rem] xl:font-800 xl:tracking-[-0.06881rem] xl:text-[3.44125rem]">Building the Future of <span className="" style={{ background: "linear-gradient(136deg, #9C74F1 52.45%, #3600A8 73.07%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>Decentralized</span> Payments </div>
          <div className="text-gray-600 mt-4 text-[1rem] w-[17.8125rem] xl:text-[1.3765rem] xl:leading-8 xl:tracking-[0.04131rem] xl:w-full xl:h-[4.062rem] bg-gradient-to-r from-slate-400 via-white to-slate-100 text-transparent bg-clip-text"> Solana-run technology powering the cryptocurrency payments network Flitch-Pay and decentralized applications.</div>
          <Link href="/" className="hover:bg-violet-600 h-[2.77275rem] py-[0.51475rem] xl:h-[3.75rem] xl:px-[1.88rem] xl:py-[0.7rem] xl:gap-[0.625rem] px-[1.38638rem] inline-flex gap-[0.46213rem] shrink-0 backdrop-filter-none rounded-full border-2 border-violet-600 bg-black fill-black mt-9 text-white w-[13rem]"><div className=" w-[11.27581rem] xl:flex items-center h-[1.47881rem] tracking-[0.03706rem] xl:w-[15.25rem] xl:h-8 xl:font-[1.67081rem] xl:tracking-[-0.05013rem]">
            Get Started for Free
          </div></Link>

        </div>
        <div className="h-full w-full flex lg:grid-cols-8">
          <div className="absolute left-[-10.56rem] top-[33.12rem] xl:left-[17rem] xl:top-[24.4rem]">
            <img className="w-[23.8rem] xl:w-[62rem] aspect-auto block shrink-0" src="https://cdn.discordapp.com/attachments/1159478783020113980/1163837366197309553/Group_39574.webp?ex=65410703&is=652e9203&hm=7e86ef8ee152c073efdae7084634b97025df8b7aab215120aa3162d566a27a68&" alt="" />
          </div>
          <div className="absolute right-[-11.86rem] top-[25.94rem] xl:top-[8.19rem] xl:right-[-14rem]">
            <img className="w-[25.5rem] aspect-auto xl:w-[63.4rem]" src="https://cdn.discordapp.com/attachments/1159478783020113980/1163837366608330803/Group_39575.webp?ex=65410703&is=652e9203&hm=c8dcc2707379ae2c3f3756426645cdd34bcf7880825d51731531bc9e33a7cc18&" alt="" />
          </div>

        </div>




      </div>



    </div >
  )
}