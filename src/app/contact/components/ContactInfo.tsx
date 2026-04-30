export default function ContactInfo() {
  return (
    <div className="lg:col-span-7 flex flex-col gap-8">
      {/* Addresses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Registered Office */}
        <div className="bg-white  p-6 rounded-lg border border-slate-200  shadow-sm flex flex-col gap-4">
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">domain</span>
          </div>
          <div>
            <h3 className="text-slate-900  text-lg font-bold mb-2">
              Registered Office
            </h3>
            <p className="text-slate-600  text-sm leading-relaxed">
              239, G. T. Road, Uttarpara
              <br />
              Hooghly - 712258, West Bengal, India
            </p>
          </div>
        </div>
        {/* Works / Factory */}
        <div className="bg-white  p-6 rounded-lg border border-slate-200  shadow-sm flex flex-col gap-4">
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">factory</span>
          </div>
          <div>
            <h3 className="text-slate-900  text-lg font-bold mb-2">
              Works / Factory
            </h3>
            <p className="text-slate-600  text-sm leading-relaxed">
              Howrah Industrial Area<br />
              Near Kolkata, West Bengal, India
            </p>
          </div>
        </div>
      </div>

      {/* Direct Contact List */}
      <div className="bg-white  rounded-lg border border-slate-200  shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 ">
          <h3 className="text-slate-900  text-lg font-bold">
            Direct Contact
          </h3>
        </div>
        <div className="divide-y divide-slate-100 ">
          <div className="flex items-start gap-4 p-6 hover:bg-slate-50  transition-colors">
            <div className="text-primary mt-1">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Sales &amp; Inquiries
              </p>
              <p className="text-slate-900  font-medium text-lg">
                +91 9432581894
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 hover:bg-slate-50  transition-colors">
            <div className="text-primary mt-1">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Email Us
              </p>
              <a
                className="text-slate-900  font-medium text-lg hover:text-primary underline decoration-slate-300 underline-offset-4"
                href="mailto:amicoengg@gmail.com"
              >
                amicoengg@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
