import { ProductItem, ProductsHeader } from '.';

export const Products = ({ productsMaster }) => {
  return (
    <section className="space-y-6 border-t border-secondary-border py-6 ">
      <ProductsHeader productsMaster={productsMaster} />
      <ul className="grid grid-cols-[repeat(3,1fr)] gap-1 sm:grid-cols-[repeat(4,1fr)] lg:grid-cols-[repeat(5,1fr)] lg:gap-6">
        {productsMaster.products.map((product) => (
          <li
            key={product.code}
            className="hidden lg:[&:nth-child(-n+10)]:block [&:nth-child(-n+6)]:block sm:[&:nth-child(-n+8)]:block"
          >
            <ProductItem
              product={product}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
