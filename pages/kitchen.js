import Kitchen from "../components/Kitchen";
import { client } from "../lib/client";
import Link from "next/link";
export default function DashBoardPage({ products }) {
  return (
    <div className="container mx-auto p-4 lg:mt-1 mt-10">
      <div className="flex items-center justify-between mb-4">
        <h1 className="md:text-3xl text-2xl  font-bold">Kitchen Gadgets</h1>
        <div className="flex items-center space-x-4">
          <Link href="/">
            <a className="text-gray-600 text-sm">Home</a>
          </Link>
          <p className="text-xs text-gray-800">/</p>
          <a className=" text-black  text-sm">Kitchen Gadjets</a>
        </div>
      </div>
      <p className="text-gray-600 text-xs md:text-sm mb-4">
        Find the latest kitchen gadgets, tools, and accessories.
      </p>
      <p className="text-gray-600 text-xs md:text-sm mb-4">
        Discover innovative and trendy kitchen products that will make your life
        easier.
      </p>
      <div className="flex flex-col space-y-4">
        <a className="text-xs md:text-sm text-gray-700 hover:text-black">
          Kitchen Things
        </a>

        <a className="text-xs md:text-sm text-gray-700 hover:text-black">
          Indoor
        </a>

        <a className="text-xs md:text-sm text-gray-700 hover:text-black">
          Collections
        </a>
      </div>
      <Kitchen products={products} title="Latest Kitchen Gadgets" />
    </div>
  );
}
export const getServerSideProps = async () => {
    const query = '*[_type == "product" && "kitchen" in categories]';
    const products = await client.fetch(query)
    return {
      props :{products}
    }
};
