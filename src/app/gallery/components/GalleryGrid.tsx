import { categories } from "@/data/inventory";
import GalleryItem from "./GalleryItem";

export default function GalleryGrid() {
  // Get all category images to exclude them
  const categoryImages = new Set(
    categories.map((cat) => cat.image).filter(Boolean)
  );

  // Collect all products with images that are not category images
  const productGalleryItems = categories.flatMap((cat) =>
    cat.products
      .filter(
        (product) =>
          product.image && !categoryImages.has(product.image)
      )
      .map((product) => ({
        title: product.name,
        subtitle: cat.name,
        imageAlt: product.name,
        imageSrc: product.image!,
      }))
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {productGalleryItems.map((item, index) => (
        <GalleryItem key={index} {...item} />
      ))}
    </div>
  );
}
