import Kitchen from "../components/Kitchen";
import { client } from "../lib/client";

export default function DashBoardPage({ products }) {
  return (
    <div>
      <Kitchen products = {products}/>
    </div>
  );
}
export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query)
    return {
      props :{products}
    }
};
