export default function ProductSpecs({ product }: { product: any }) {
  return (
    <div className="lg:col-span-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900 ">
          Technical Specifications
        </h2>
        {/* <button className="text-primary text-sm font-medium cursor-pointer flex items-center gap-1">
          <span className="material-symbols-outlined text-[18px]">
            picture_as_pdf
          </span>
          Download Full Spec Sheet
        </button> */}
      </div>
      <div className="overflow-hidden rounded border border-slate-200  bg-white ">
        <table className="min-w-full divide-y divide-slate-200 ">
          <thead className="bg-slate-50 ">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-1/3"
              >
                Specification
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
              >
                Value
              </th>
            </tr>
          </thead>
          <tbody className="bg-white  divide-y divide-slate-200 ">
            {product.specs.map((spec: any, index: number) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900  capitalize flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-slate-400">
                    {spec.icon}
                  </span>
                  {spec.icon.replace(/_/g, " ")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 ">
                  {spec.label}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
