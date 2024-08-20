export default async function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const productsResponse = await fetch("http://localhost:3001/products");
  const products = productsResponse.json();
  console.log({ products });

  return <>{children}</>;
}
