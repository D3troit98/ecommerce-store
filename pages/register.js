import Register from "../components/Auth/Register";
import { client } from "../lib/client";

export default function RegisterPage({ bannerData }) {
  return (
    <div>
      <Register heroBanner={bannerData.length && bannerData[0]} />
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
