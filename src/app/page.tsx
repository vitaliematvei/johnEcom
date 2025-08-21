import ProductList from '../components/layouts/ProductList';

export default function IndexPage() {
  return (
    <main className="mx-auto min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Products</h1>
      <div className="mx-auto text-center">
        <ProductList />
      </div>
    </main>
  );
}
