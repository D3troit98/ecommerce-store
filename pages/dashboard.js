import Dashboard from "../components/Auth/Dashboard";
import { client } from "../lib/client";

export default function DashBoardPage({ bannerData }) {
  return (
    <div>
      <Dashboard heroBanner={bannerData.length && bannerData[0]} />
    </div>
  );
}
export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { bannerData },
  };
};
