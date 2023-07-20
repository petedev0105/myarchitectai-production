import React from 'react'
import Link from "next/link"
import Header from '../../components/Header'

function page() {
  return (
    <div className='m-auto max-w-6xl lg:p-0 p-5'>
        <Header />
        <div className="flex justify-center items-center pt-24">
          <div className="space-y-5">
            <div>
              <span className="font-bold text-4xl">
                Unlimited designs, for your unlimited imagination
              </span>
            </div>
            <div>
              <span>
              Your Imagination, Our Canvas: Immerse yourself in a world of unlimited designs, where your imagination takes center stage.
              </span>
            </div>
          </div>
        </div>

        <div className="lg:flex items-center pt-12 lg:space-x-7 lg:space-y-0 space-y-10">
          {/* <div className="shadow-xl border rounded-xl p-12 space-y-10">
            <div className="space-y-7">
              <div className="">
                <span className=" font-bold">Hobby</span>
              </div>
              <div className="flex space-x-5 items-center justify-center">
                <div>
                  <span className="text-4xl font-bold ">Free</span>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-3 ">
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">3 images every month</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className=""><span className="underline">Limited</span> style options</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Access to all future updates</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Request new features</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Customer support</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Interior designs only</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Watermarked</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Link
                  href="https://myarchitectai.lemonsqueezy.com/checkout/buy/d7810a4c-988c-418b-838f-4a10ce0494ef"
                  target="_blank"
                >
                  <button
                    // onClick={() => {
                    //   Paddle.Checkout.open({
                    //     product: 47418,
                    //   });
                    // }}
                    className="px-5 py-2 rounded-md  font-bold  text-center bg-black text-white"
                  >
                    Start for free →
                  </button>
                </Link>
              </div>
            </div>
          </div> */}
          <div className="shadow-xl border rounded-xl p-12 space-y-10  text-center">
            <div className="space-y-7">
              <div className="">
                <span className="text-stone-500 font-bold">Hobby</span>
              </div>
              <div className="flex space-x-5 items-center justify-center">
                <div>
                  <span className="font-bold ">
                    <span className="text-4xl">Free</span>
                  </span>
                  <span className=""></span>
                </div>
              </div>
            </div>

            <div className="space-y-10 text-sm text-left">
              <div className="space-y-3 ">
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">
                      <span className="font-bold underline">10</span> images
                      every month
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img
                      src="/img/tick-tutor.png"
                      style={{
                        minWidth: "20px",
                        minHeight: "20px",
                        width: "20px",
                      }}
                    />
                  </div>
                  <div>
                    <span className="">
                      Queued requests, occasional{" "}
                      <span className="font-bold underline">
                        downtime and timeouts
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">
                      <span className="font-bold underline">Limited selection</span>{" "}of
                      architectural styles and options
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">
                      Interior designs + Exterior designs
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Access to all future updates</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Request new features</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Customer support</span>
                  </div>
                </div>
                
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Small watermark</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Link
                  href="https://myarchitectai.lemonsqueezy.com/checkout/buy/d7810a4c-988c-418b-838f-4a10ce0494ef"
                  target="_blank"
                >
                  <button
                    // onClick={() => {
                    //   Paddle.Checkout.open({
                    //     product: 47418,
                    //   });
                    // }}
                    className="px-5 py-2 rounded-md  font-bold  text-center bg-black text-white"
                  >
                    Build your dream home →
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="shadow-xl border rounded-xl p-12 space-y-10 text-center">
            <div className="space-y-7">
              <div className="">
                <span className="text-stone-500 font-bold">Pro</span>
              </div>
              <div className="flex space-x-5 items-center justify-center">
                <div>
                  <span className="font-bold ">
                    <span className="text-4xl">$14.99</span>
                  </span>
                  <span className="">/month</span>
                </div>
              </div>
            </div>

            <div className="space-y-10 text-left text-sm">
              <div className="space-y-3 ">
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">
                      <span className="font-bold underline">200</span> images
                      every month
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img
                      src="/img/tick-tutor.png"
                      style={{
                        minWidth: "20px",
                        minHeight: "20px",
                        width: "20px",
                      }}
                    />
                  </div>
                  <div>
                    <span className="">
                      <span className="font-bold underline">Prioritized</span>{" "}
                      responses, no downtime and timeout
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">
                      <span className="font-bold underline">100+</span>{" "}
                      architectural styles and options
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">
                      Interior designs + Exterior designs
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Access to all future updates</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Request new features</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Customer support</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">No watermark</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Link
                  href="https://myarchitectai.lemonsqueezy.com/checkout/buy/d7810a4c-988c-418b-838f-4a10ce0494ef"
                  target="_blank"
                >
                  <button
                    // onClick={() => {
                    //   Paddle.Checkout.open({
                    //     product: 47418,
                    //   });
                    // }}
                    className="px-5 py-2 rounded-md  font-bold  text-center bg-black text-white"
                  >
                    Build your dream home →
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="shadow-xl border rounded-xl p-12 space-y-10 text-center">
            <div className="space-y-7">
              <div className="">
                <span className="text-stone-500 font-bold">Business</span>
              </div>
              <div className="flex space-x-5 items-center justify-center">
                <div>
                  <span className="font-bold  ">
                    <span className="text-4xl">$24.99</span>
                  </span>
                  <span className="">/month</span>
                </div>
              </div>
            </div>

            <div className="space-y-10 text-left text-sm">
              <div className="space-y-3 ">
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">
                      <span className="font-bold underline">Unlimited</span>{" "}
                      images every month
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img
                      src="/img/tick-tutor.png"
                      style={{
                        minWidth: "20px",
                        minHeight: "20px",
                        width: "20px",
                      }}
                    />
                  </div>
                  <div>
                    <span className="">
                      <span className="font-bold underline">Prioritized</span>{" "}
                      responses, no downtime and timeout
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">
                      <span className="font-bold underline">100+</span>{" "}
                      architectural styles and options
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">
                      Interior designs + Exterior designs
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Access to all future updates</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Request new features</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Customer support</span>
                  </div>
                </div>
                
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">No watermark</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Link
                  href="https://myarchitectai.lemonsqueezy.com/checkout/buy/717a45d0-4fad-4990-a153-49bf6544683b"
                  target="_blank"
                >
                  <button
                    // onClick={() => {
                    //   Paddle.Checkout.open({
                    //     product: 47418,
                    //   });
                    // }}
                    className="px-5 py-2 rounded-md  font-bold  text-center bg-black text-white"
                  >
                    Build your dream home →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page