export default function CategoryHeader({
  categoryName,
  productCount,
}: {
  categoryName: string;
  productCount: number;
}) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
      <div>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
          {categoryName}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
          Browse our comprehensive range of {productCount} high-performance
          industrial transport solutions.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Sort:
          </span>
          <select className="rounded-lg border-slate-200 text-sm font-medium py-2.5 pl-3 pr-10 focus:ring-primary focus:border-primary cursor-pointer bg-white dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200 shadow-sm">
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
