import ProductListComponent from "@/components/Products/Lists";
import Link from "next/link";

const ProductList = () =>
{
    return (
        <div className="bg-gray-300">
            <h1>Products List</h1>

            <div className="bg-white grid grid-cols-2">
                <h1>Trending Products</h1>
                <Link href="/products/1">
                    see everything
                </Link>
                <div className="grid grid-cols-4">
                    <ProductListComponent image="https://www.orangecube.art/orange-cube-main.png" category="Category" title="Product Title" price="Price" discount_price="Discount Price" />
                    <ProductListComponent image="https://www.orangecube.art/orange-cube-main.png" category="Category 2" title="Men shoes" price="15000" discount_price="7000" />
                    <ProductListComponent image="https://www.orangecube.art/orange-cube-main.png" category="Category 2" title="Men shoes" price="15000" discount_price="7000" />
                    <ProductListComponent image="https://www.orangecube.art/orange-cube-main.png" category="Category 2" title="Men shoes" price="15000" discount_price="7000" />

                </div>
            </div>

        </div>
    );
};

export default ProductList;