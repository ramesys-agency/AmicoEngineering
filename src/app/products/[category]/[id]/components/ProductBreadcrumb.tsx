import Link from "next/link";

export default function ProductBreadcrumb({
  productName,
  categoryId,
  categoryName,
}: {
  productName: string;
  categoryId: string;
  categoryName: string;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center text-sm text-slate-500 mb-8"
    >
      <ol className="flex items-center space-x-2">
        <li>
          <Link className="hover:text-primary transition-colors" href="/">
            Home
          </Link>
        </li>
        <li>
          <span className="material-symbols-outlined text-[16px] text-slate-400">
            chevron_right
          </span>
        </li>
        <li>
          <Link
            className="hover:text-primary transition-colors"
            href="/products"
          >
            Products
          </Link>
        </li>
        <li>
          <span className="material-symbols-outlined text-[16px] text-slate-400">
            chevron_right
          </span>
        </li>
        <li>
          <Link
            className="hover:text-primary transition-colors"
            href={`/products/${categoryId}`}
          >
            {categoryName}
          </Link>
        </li>
        <li>
          <span className="material-symbols-outlined text-[16px] text-slate-400">
            chevron_right
          </span>
        </li>
        <li
          aria-current="page"
          className="font-medium text-slate-900 dark:text-white"
        >
          {productName}
        </li>
      </ol>
    </nav>
  );
}
