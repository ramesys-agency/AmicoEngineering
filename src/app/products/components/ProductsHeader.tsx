export default function ProductsHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
      <div>
        <h1 className="text-4xl font-extrabold text-slate-900  leading-tight tracking-tight">
          Products Directory
        </h1>
        <p className="text-slate-500  mt-2 text-lg">
          Browse our comprehensive range of high-performance industrial
          solutions.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Sort:
          </span>
          <select className="rounded-lg border border-slate-200 text-sm font-medium py-2.5 pl-3 pr-10 focus:ring-primary focus:border-primary cursor-pointer bg-white    shadow-sm">
            <option>Most Relevant</option>
            <option>Capacity: Low to High</option>
            <option>Capacity: High to Low</option>
            <option>Newest Models</option>
          </select>
        </div>
      </div>
    </div>
  );
}
