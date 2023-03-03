import Login from "../components/Auth/Login";
import { client } from "../lib/client";
export default function AccountPage({ bannerData }) {
  return (
    <div>
      <Login heroBanner={bannerData.length && bannerData[0]} />
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