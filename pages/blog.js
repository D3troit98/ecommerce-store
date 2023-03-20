import { getNews } from "./api/newsApi";
import Link from "next/link";

export default function DashBoardPage({ blogdata }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {blogdata.map((article) => (
              <div
                key={article.url}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {article.urlToImage && (
                  <Link
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <a>
                      <img
                        className="w-full h-48 object-cover"
                        src={article.urlToImage}
                        alt={article.title}
                      />
                    </a>
                  </Link>
                )}
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">
                    <Link
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <a className="text-gray-900 hover:text-gray-700">
                        {article.title}
                      </a>
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-base">
                    {article.description}
                  </p>
                </div>
                <div className="bg-gray-100 px-4 py-2">
                  <Link
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <a className="text-sm font-medium text-red-600 hover:text-red-700">
                      Read more
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async () => {
  const blogdata = await getNews();
  return {
    props: { blogdata: blogdata },
  };
};
