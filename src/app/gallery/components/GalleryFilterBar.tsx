interface GalleryFilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FILTERS = [
  "All Projects",
  "Machinery",
  "Facilities",
  "Logistics",
  "Assembly",
];

export default function GalleryFilterBar({
  activeFilter,
  onFilterChange,
}: GalleryFilterBarProps) {
  return (
    <section className="mb-10 border-b border-slate-200 dark:border-slate-800">
      <div className="flex flex-wrap gap-6 pb-4">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`text-sm transition-colors pb-4 px-1 ${
              activeFilter === filter
                ? "font-bold text-primary border-b-2 border-primary"
                : "font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}
