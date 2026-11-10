import Section from "../ui/Section";
import ProductCard from "../product/ProductCard";
import { products } from "../../data/products";

function Top100({onAddToCart}) {
  // L1 => Data
    const top100Products = products.slice(5, 8);
  // L2 => Effects
  // L3 => Logic
  // L4 => View
  return (
    <Section title="Top 100" classSection="top-100">
      {top100Products.map((product) => (
        <ProductCard
          key={product.id}
          variant="top"
          title={product.title}
          price={product.price}
          description={product.description}
          oldPrice={product.oldPrice}
          review={product.review}
          discount={product.discount}
          onAddToCart={() => onAddToCart(product)}
        />
      ))}
    </Section>
  );
}

export default Top100;
