export default function AboutCapabilities() {
  return (
    <section className="py-20 bg-slate-50 ">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900  mb-4">
            Core Capabilities
          </h2>
          <p className="text-slate-600  max-w-2xl mx-auto">
            We combine state-of-the-art technology with seasoned expertise.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card 1: Manufacturing */}
          <div className="bg-white  rounded-lg overflow-hidden shadow border border-slate-200 ">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCEsGzSnGqMXTcSnAIJ4-4M0B5OoPR5TOHx1UyoJD_zJvihlurRRfEuey26O5M5KAbEtQSFBGboRudCBuPA1PrrnOITnAoSB_5LJ8Wt8_BE63rbijkGI8_TQ3MCVd9AMr5jHGn5rbycTjgJF-aOuRL8UwHEkXh4ZZI4rlhHJiqpDDbN1dUnaUoyRpchYAT6iXsHgPM6tsnmLaimQ-5-D_WJC9AQrNVEUf4aczWvuxaGMfKzCBBr3aYQMM4KrLpeDEuD1iF7WSbZfZnu')",
              }}
            ></div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">
                  factory
                </span>
                <h3 className="text-xl font-bold text-slate-900 ">
                  Manufacturing Overview
                </h3>
              </div>
              <p className="text-slate-600  text-sm mb-4 leading-relaxed">
                Our 50,000 sq. ft. facility is equipped with advanced CNC
                machining centers, laser cutters, and heavy-duty robotic
                welders. We handle everything from prototyping to mass
                production runs with impeccable precision.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 ">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  5-Axis CNC Machining
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Robotic Welding Cells
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Automated Assembly Lines
                </li>
              </ul>
            </div>
          </div>
          {/* Card 2: Design */}
          <div className="bg-white  rounded-lg overflow-hidden shadow border border-slate-200 ">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtXrugNeuSiTP62o4Ng51LO_WU9RlP2lTm9VQaSazNj_-bQbhvwUOMam2RDf6WqWKw3766HGsaigBsmuW3OpLEICjLOwLqDhbzRNdQflnu-aa2oD2kM8PLtVLWSPgR9MUqw5ahqbNw0zikCKNFltqYfUEUvuvi8_Hx--oHmHAAhRpZZSLe9htisH_4ICTSQ0Z8kEiB5X2Rt1II3NugRNANmFJpSqRBMcUEJV3YU26Tcsaxs_SyHM0R5KAYSwHK_-O4wNUb_UugVvDZ')",
              }}
            ></div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">
                  architecture
                </span>
                <h3 className="text-xl font-bold text-slate-900 ">
                  Design &amp; Engineering
                </h3>
              </div>
              <p className="text-slate-600  text-sm mb-4 leading-relaxed">
                Our in-house design studio utilizes the latest CAD/CAM software
                to simulate and optimize designs before production begins. This
                reduces waste, accelerates timelines, and ensures structural
                integrity.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 ">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  3D Modeling &amp; Simulation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Structural Analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Rapid Prototyping
                </li>
              </ul>
            </div>
          </div>
          {/* Card 3: Quality */}
          <div className="bg-white  rounded-lg overflow-hidden shadow border border-slate-200 ">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6RHKIbeX2A4z21FPexPTK7hhC74cRKr1EidMkcCKc5NmCRbPbaaMx2uGnb-_XYyq5sMFY2wCwFYZXCsZaJIiFi3t4o-w6_OkYa5124lU79KKbHsXzcLeHD2zAue37Hjv1Y_S9T31T4V1Sf7_bbcollWZ4MPUC0iYmEnfi_QxAKBn0KeEYl8fMQKT78PAYe1HfxKOxaU4Ua4GffSzP8C_220wRb0epO2KS1F2cwVC39LdO3OThiJAj3DZsuBhlUxZPMvAjbmOT1vw8')",
              }}
            ></div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">
                  verified
                </span>
                <h3 className="text-xl font-bold text-slate-900 ">
                  Quality Commitment
                </h3>
              </div>
              <p className="text-slate-600  text-sm mb-4 leading-relaxed">
                Quality is not just a department; it&apos;s our culture. We
                adhere to strict quality control protocols at every stage. We
                are proud holders of multiple international certifications
                ensuring safety and reliability.
              </p>
              <div className="flex gap-4 mt-6">
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-slate-400 text-3xl">
                    workspace_premium
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    ISO 9001
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-slate-400 text-3xl">
                    verified_user
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    ASME
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-slate-400 text-3xl">
                    eco
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    ISO 14001
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
