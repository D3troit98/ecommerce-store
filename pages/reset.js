import Reset from "../components/Auth/Reset";
import { client } from "../lib/client";

export default function ResetPage({ bannerData }) {
  return (
    <div>
      <Reset heroBanner={bannerData.length && bannerData[0]} />
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
