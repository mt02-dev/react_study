interface Product {
    id: string;
    name: string;
    price: number;
  }
  
export function ProductList() {
const products: Product[] = [
    { id: "123", name: "商品A", price: 1000 },
    { id: "456", name: "商品B", price: 2000 },
    { id: "789", name: "商品C", price: 3000 },
];

const handleUpdate = (id: string) => (event: React.MouseEvent) => {
    console.log(`商品ID: ${id} が更新されました`);
    // 更新ロジック
};

return (
    <div className="product-list">
    {products.map((product) => (
        <div key={product.id} className="product-card">
        <h3>{product.name}</h3>
        <p>¥{product.price}</p>
        <button onClick={handleUpdate(product.id)}>更新</button>
        </div>
    ))}
    </div>
);
}