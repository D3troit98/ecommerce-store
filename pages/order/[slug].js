import React, { useState } from 'react'
import { client } from "../../lib/client"
import { useRouter } from 'next/router'
import { LoadingScreen,Product } from '../../components'
import Head from 'next/head'
const OrderDetail = ({order}) => {
    const router = useRouter();
    const { slug } = router.query;

    console.log("slug" , slug);

    if(!order) return <LoadingScreen  />
    return (
        <>
          <Head>
            <title>Order Detail - {order.tx_ref}</title>
          </Head>
          <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold text-red-500">Order Detail</h2>
                  <p className="mt-2 text-sm text-gray-600">
                    Order ID: <span className="font-medium">{order.tx_ref}</span>
                  </p>
                </div>
    
                <div className="mt-6">
                  <div className="border-t border-gray-200 pt-6">
                    <dl>
                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                        <dt className="text-sm font-medium text-gray-500">Date Placed</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {new Date(order.created_at).toLocaleDateString()}
                        </dd>
                      </div>
    
                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                        <dt className="text-sm font-medium text-gray-500">Status</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {order.status === 'successful' ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {order.status}
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              {order.status}
                            </span>
                          )}
                        </dd>
                      </div>
    
                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                        <dt className="text-sm font-medium text-gray-500">Address</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {order.address}
                        </dd>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Charged Amount</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {order.currency} {order.charged_amount.toLocaleString()}
                </dd>
              </div>
    
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Transaction ID</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {order.transaction_id}
                </dd>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Payment Status</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {order.charge_response_code === '00' ? (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {order.charge_response_message}
                    </span>
                  ) : (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      {order.charge_response_message}
                    </span>
                  )}
                </dd>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">Ordered Items</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {order.items.length > 0  && order.items[0]? (
                        <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    {order.items?.map((item) => (
                      <li key={item._id} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <span className="ml-2 flex-1 w-0 truncate">{item.name}</span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <span>{item.price.toLocaleString()} {order.currency}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                    ):(
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Items Loading</span>
                    )}
                  
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper mt-0">
          <h3 className="text-3xl font-extrabold text-red-500">Your Ordered Items</h3>
          <div className="marquee">
            <div className="maylike-products-container track">
               {order.items.length > 0  && order.items[0]? (
                <>
              {order.items?.map((item, i) => (
                <Product key={i} product={item} />
              ))}
</>
):(<p>Loading Items...</p>)}
            </div>
          </div>
        </div>
    </div>
    
  </div>

   </>
    );
}

export const getStaticPaths = async () => {
    const query = `*[_type == "order"]{
        _id
    }
    `

    const orders = await client.fetch(query)
    const paths = orders.map((order) => (
        {
            params: {
                slug: order._id
            }
        }
    ))
    return {
        paths,
        fallback: 'blocking'
    }
}


export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type=="order" && _id == "${slug}"]{
        _id,
        address,
        charge_response_code,
        charge_response_message,
        charged_amount,
        created_at,
        currency,
        flw_ref,
        status,
        transaction_id,
        tx_ref,
        user->,
        items[]->
    }[0]`;
    const order = await client.fetch(query)
    // console.log(slug)
    // console.log(product)
    console.log("order", order)
    return {
        props: { order }
    }
}

export default OrderDetail