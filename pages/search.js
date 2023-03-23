import Kitchen from "../components/Kitchen";
import { client } from "../lib/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function DashBoardPage() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  useEffect(async () => {
    const searchQuery = router.query.q;
    const query = `*[_type == "product" && (name match "${searchQuery}*" || details match "${searchQuery}*")]`;
    const productsData = await client.fetch(query);
    setProducts(productsData);
  }, [router]);
  return (
    <div className="container mx-auto p-4 lg:mt-1 mt-10">
      <div className="flex items-center justify-between mb-4">
        <h1 className="md:text-3xl text-2xl  font-bold">
          Search Results for "{router.query.q}"
        </h1>
        <div className="flex items-center space-x-4">
          <Link href="/">
            <a className="text-gray-600 text-sm">Home</a>
          </Link>
          <p className="text-xs text-gray-800">/</p>
          <p className=" text-black  text-sm">Search Results</p>
        </div>
      </div>
      <Kitchen products={products} title="Search Results" />
    </div>
  );
}
