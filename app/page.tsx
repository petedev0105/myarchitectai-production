"use client";
import img from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { useSession, signIn } from "next-auth/react";
import QnA from "../components/QnA";

export default function HomePage() {
  const { data: session } = useSession();
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20">
        <div className="lg:flex justify-between items-center w-full space-x-24">
          <div className="lg:w-1/2 lg:text-left space-y-7">
            <div>
              <span className="font-bold text-4xl">
                Visualize your architectural sketches in seconds
              </span>
            </div>
            <div>
              <span className="">
                Take your hand-drawn sketches of buildings and instantly
                transform them into breathtaking, photorealistic masterpieces.
              </span>
            </div>
            <div>
              {session && session.user ? (
                <Link
                  className="bg-black rounded-xl text-white font-medium px-4 py-3 lg:mt-0 sm:mt-10  hover:bg-blue-500 transition"
                  href={"/dream"}
                >
                  Build your dream home for free →
                </Link>
              ) : (
                <button
                  className="bg-black rounded-xl text-white font-medium px-4 py-3 lg:mt-0 sm:mt-10  hover:bg-blue-500 transition"
                  onClick={() => signIn()}
                >
                  Build your dream home for free →
                </button>
              )}
            </div>

            <div className="flex space-x-3 w-full items-center">
              <div>
                <img src="/img/star.png" width={70} />
              </div>

              <div>
                <span className="text-sm">Join 100+ happy home lovers</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pt-0 pt-10">
            <img src="/img/hero.webp" />
          </div>
        </div>

        <div className="flex justify-cetner items-center pt-48">
          <div className="space-y-5">
            <div>
              <span className="font-bold text-3xl">
                10x your architecture design output
              </span>
            </div>
            <div>
              <span>
                Our platform goes beyond mere visualization, breathing life into
                your designs and eliciting powerful emotions. Present your
                photorealistic visuals to clients and stakeholders, and watch as
                they become fully immersed in your vision.
              </span>
            </div>
            <div>
              <img src="/img/mid.png" />
            </div>
            <div className="pt-12">
              <Link
                className="bg-black rounded-xl text-white font-medium px-4 py-3 lg:mt-0 sm:mt-10  hover:bg-blue-500 transition"
                href={"/dream"}
              >
                Build your dream home for free →
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center pt-48 w-full">
          <div className="space-y-5">
            <div>
              <span className="font-bold text-3xl">
                One platform for every need
              </span>
            </div>
            <div>
              <span>
                MyArchitectureAI is a versatile platform that benefits
                architects, interior designers, real estate agents, and home
                lovers alike.
              </span>
            </div>
            <div className="w-full">
              <div className="lg:grid grid-cols-2 gap-10">
                <div className="rounded-xl space-y-3 ">
                  <div className="">
                    <img
                      className="h-48 bg-indigo-700 cover rounded-xl w-full object-cover"
                      src={"/img/architects.jpg"}
                      height={300}
                      width={400}
                    />
                  </div>
                  <div className="rounded-b-xl">
                    <div className="py-3 space-y-2">
                      <div>
                        <span className="text-sm"></span>
                      </div>
                      <div className="flex space-x-3 items-center">
                        <span className="font-bold text-2xl line-clamp-2 hover:underline">
                          Architects
                        </span>
                      </div>
                      <div className="flex space-x-3 items-center">
                        <span className=" text-sm line-clamp-5 text-left">
                          Design Exploration: MyArchitectureAI enables
                          architects to visualize sketches in various styles,
                          fostering quick iteration and experimentation for
                          finding the ideal design solution. Time Efficiency:
                          The platform automates remodeling, saving architects
                          significant time while effortlessly generating
                          multiple design options.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="rounded-xl space-y-3 ">
                  <div className="">
                    <img
                      className="h-48 bg-indigo-700 cover rounded-xl w-full object-cover"
                      src={"/img/interior-designers.jpg"}
                      height={300}
                      width={400}
                    />
                  </div>
                  <div className="rounded-b-xl">
                    <div className="py-3 space-y-2">
                      <div>
                        <span className="text-sm"></span>
                      </div>
                      <div className="flex space-x-3 items-center">
                        <span className="font-bold text-2xl line-clamp-2 hover:underline">
                          Interior Designers
                        </span>
                      </div>
                      <div className="flex space-x-3 items-center">
                        <span className=" text-sm line-clamp-5 text-left">
                          Style Exploration: By uploading images, designers can
                          quickly explore different styles, facilitating
                          creative exploration for unique and personalized
                          designs. Client Presentation: AI-generated visuals
                          enable designers to present multiple options to
                          clients, aiding their decision-making process.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="rounded-xl space-y-3 ">
                  <div className="">
                    <img
                      className="h-48 bg-indigo-700 cover rounded-xl w-full object-cover"
                      src={"/img/real-estate-agents.jpg"}
                      height={300}
                      width={400}
                    />
                  </div>
                  <div className="rounded-b-xl">
                    <div className="py-3 space-y-2">
                      <div>
                        <span className="text-sm"></span>
                      </div>
                      <div className="flex space-x-3 items-center">
                        <span className="font-bold text-2xl line-clamp-2 hover:underline">
                          Real Estate Agents
                        </span>
                      </div>
                      <div className="flex space-x-3 items-center">
                        <span className=" text-sm line-clamp-5 text-left">
                          Property Enhancement: MyArchitectureAI revitalizes
                          property listings by remodeling scenes in various
                          styles, attracting buyers with diverse preferences.
                          Faster Sales: Visually appealing design options
                          accelerate the sales process, allowing agents to
                          present properties effectively and reduce physical
                          visits.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="rounded-xl space-y-3 ">
                  <div className="">
                    <img
                      className="h-48 bg-indigo-700 cover rounded-xl w-full object-cover"
                      src={"/img/home-lovers.jpg"}
                      height={300}
                      width={400}
                    />
                  </div>
                  <div className="rounded-b-xl">
                    <div className="py-3 space-y-2">
                      <div>
                        <span className="text-sm"></span>
                      </div>
                      <div className="flex space-x-3 items-center">
                        <span className="font-bold text-2xl line-clamp-2 hover:underline">
                          Home Lovers
                        </span>
                      </div>
                      <div className="flex space-x-3 items-center">
                        <span className=" text-sm line-clamp-5 text-left">
                          Design Inspiration: MyArchitectureAI sparks
                          inspiration by showcasing different styles, helping
                          users discover new design directions for their spaces.
                          Personalization: Users can visualize their spaces in
                          various styles, creating a unique living environment
                          that reflects their preferences. Cost Savings: By
                          virtually remodeling spaces, MyArchitectureAI helps
                          users avoid costly design mistakes, saving time and
                          money in the renovation process.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12">
          <Link
            className="bg-black rounded-xl text-white font-medium px-4 py-3 lg:mt-0 sm:mt-10  hover:bg-blue-500 transition"
            href={"/dream"}
          >
            Build your dream home for free →
          </Link>
        </div>

        <div className="flex justify-center items-center pt-48">
          <div className="space-y-5">
            <div>
              <span className="font-bold text-3xl">
                Explore what others have built
              </span>
            </div>
            <div>
              <span>
                Find inspiration from buildings built by creative architects and
                home lovers all across the globe using MyArchitectAI.
              </span>
            </div>
            <div>
              <img src="/img/others.webp" />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Link
            className="bg-black rounded-xl text-white font-medium px-4 py-3 hover:bg-blue-500 transition"
            href={"/dream"}
          >
            Build your dream home for free →
          </Link>
        </div>
        <div className="flex justify-center items-center pt-48">
          <div className="space-y-5">
            <div>
              <span className="font-bold text-3xl">
                Unlimited designs, for your unlimited imagination
              </span>
            </div>
            <div>
              <span>
                Take your hand-drawn sketches of buildings and instantly
                transform them into breathtaking, photorealistic masterpieces.
              </span>
            </div>
          </div>
        </div>

        <div className="lg:flex items-center pt-12 lg:space-x-7 lg:space-y-0 space-y-10">
          <div className="shadow-xl border rounded-xl p-12 space-y-10">
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
          </div>
          <div className="shadow-xl border rounded-xl p-12 space-y-10">
            <div className="space-y-7">
              <div className="">
                <span className=" font-bold">Pro</span>
              </div>
              <div className="flex space-x-5 items-center justify-center">
                <div>
                  <span className="font-bold ">
                    <span className="text-4xl">19.99</span>
                  </span>
                  <span className="">/month</span>
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
                    <span className="">
                      <span className="font-bold underline">200</span> images
                      every month
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
          <div className="shadow-xl border rounded-xl p-12 space-y-10">
            <div className="space-y-7">
              <div className="">
                <span className=" font-bold">Business</span>
              </div>
              <div className="flex space-x-5 items-center justify-center">
                <div>
                  <span className="font-bold ">
                    <span className="text-4xl">29.99</span>
                  </span>
                  <span className="">/month</span>
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
                    <span className="">
                      <span className="font-bold underline">Unlimited</span>{" "}
                      images every month
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

        <div className="lg:flex justify-between py-24 w-full lg:space-x-12">
          <div className="lg:w-1/2 space-y-5">
            <div className="text-left">
              <span className="text-3xl font-bold">
                Frequently asked questions
              </span>
            </div>
            <div className="text-left">
              <span>
                Answers to common questions about MyArchitectureAI's services
                for architects, interior desginers, real estate agents and home
                lovers.
              </span>
            </div>
          </div>
          <QnA />
        </div>
      </main>
      <Footer />
    </div>
  );
}
