"use client";
import img from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import QnA from "../components/QnA";
import { useSupabase } from "../components/supabaseProvider";
import { CompareSlider } from "../components/CompareSlider";

export default function HomePage() {
  const { supabase, user, signInWithSupabase } = useSupabase();

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20">
        <div className="lg:flex justify-between items-center w-full lg:space-x-24">
          <div className="lg:w-1/2 lg:text-left space-y-7">
            <div>
              <span className="font-bold lg:text-4xl text-3xl">
                Visualize your architectural ideas in{" "}
                seconds.
              </span>
            </div>
            <div>
              <span className="">
              Turn your architectural sketches into photorealistic masterpieces in seconds with our advanced technology. Say goodbye to time-consuming manual rendering and embrace a new era of efficiency.              </span>
            </div>
            <div>
              {user ? (
                <Link
                className="bg-black font-bold rounded-md text-white px-10 py-3 hover:bg-blue-500 transition"
                  href={"/dream"}
                >
                  Go to the MyArchitectAI app →
                </Link>
              ) : (
                <button
                  className="bg-black font-bold rounded-md text-white px-10 py-3 hover:bg-blue-500 transition"
                  onClick={() => signInWithSupabase()}
                >
                  Build your dream home →
                </button>
              )}
            </div>

            <div className="flex space-x-3 w-full items-center lg:justify-start justify-center">
              <div>
                <img src="/img/star.png" width={70} />
              </div>

              <div>
                <span className="text-sm">Join 100+ architecture lovers</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pt-0 pt-10">
            {/* <img src="/img/hero.webp" /> */}
            <CompareSlider
              original="/img/exterior-before.png"
              restored="/img/exterior-after.png"
            />
          </div>
        </div>

        <div className="flex justify-center items-center pt-48">
          <div className="space-y-7">
            <div>
              <span className="font-bold text-2xl text-stone-700">
                Featured & trusted by
              </span>
            </div>
            {/* <div>
              <span>
                Our platform goes beyond mere visualization, breathing life into
                your designs and eliciting powerful emotions. Present your
                photorealistic visuals to clients and stakeholders, and watch as
                they become fully immersed in your vision.
              </span>
            </div> */}
            <div className=" lg:flex lg:space-x-10 justify-center lg:space-y-0 space-y-7">
              <div style={{width: 200}}>
                <img src="/img/saashub.webp" className="" />
              </div>
              <div style={{width: 200}}>
                <img src="/img/whattheai.PNG" className="" />
              </div>
              <div style={{width: 200}}>
                <img src="/img/saasaitools.PNG" className="rounded-md" />
              </div>
              <div style={{width: 200}}>
                <img src="/img/saasbaba.png" className="rounded-md" />
              </div>
            </div>
          </div>
        </div>


        <div className="flex justify-cetner items-center pt-48">
          <div className="space-y-5">
            <div>
              <span className="font-bold text-4xl">
                <span className="text-black">10x</span> your architecture design output
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
            <div className="pt-12">
              <img src="/img/mid.png" />
            </div>
            <div className="pt-12">
              <Link
                className="bg-black rounded-xl text-white font-medium px-4 py-3 lg:mt-0 sm:mt-10  hover:bg-black transition"
                href={"/dream"}
              >
                Build your dream home for free →
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-between items-center w-full lg:space-x-24 pt-48"><div className="lg:w-1/2 lg:pt-0 pt-10">
            <img src="/img/architecture-styles.png" />
            {/* <CompareSlider original="/img/exterior-before.png" restored="/img/exterior-after.png" /> */}
          </div>
          <div className="lg:w-1/2 lg:text-left space-y-7">
            <div>
              <span className="font-bold lg:text-4xl text-3xl">
                Pick from <span className="text-black">hundreds</span> of styles to fit your preferences
              </span>
            </div>
            <div>
              <span className="">
                From the timeless elegance of Neoclassical to the sleek lines of
                Modernist, our curated selection offers hundreds of
                architectural styles for you to choose from.
              </span>
            </div>
          </div>
          
        </div>
        <div className="lg:flex justify-between items-center w-full lg:space-x-24 pt-48">
          
          <div className="lg:w-1/2 lg:text-left space-y-7">
            <div>
              <span className="font-bold lg:text-4xl text-3xl">
                Floorplans, Interior, Exterior design made easy
              </span>
            </div>
            <div>
              <span className="">
                We've revolutionized the way you approach architecture and
                decor, making it accessible to everyone, regardless of
                expertise.
              </span>
            </div>
          </div><div className="lg:w-1/2 lg:pt-0 pt-10">
            <img src="/img/all.png" />
            {/* <CompareSlider original="/img/exterior-before.png" restored="/img/exterior-after.png" /> */}
          </div>
        </div>

        <div className="flex justify-center items-center pt-48 w-full">
          <div className="space-y-5">
            <div>
              <span className="font-bold text-4xl">
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
                      className="h-48 bg-black cover rounded-xl w-full object-cover"
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
                        <span className="  line-clamp-5 text-left">
                          MyArchitectureAI enables architects to visualize
                          sketches in various styles, fostering quick iteration
                          and experimentation. The platform automates
                          remodeling, saving architects significant time while
                          effortlessly generating multiple design options.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="rounded-xl space-y-3 ">
                  <div className="">
                    <img
                      className="h-48 bg-black cover rounded-xl w-full object-cover"
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
                        <span className="  line-clamp-5 text-left">
                          By uploading images, designers can quickly explore
                          different styles, facilitating creative exploration
                          for unique and personalized designs. AI-generated
                          visuals enable designers to present multiple options
                          to clients, aiding their decision-making process.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="rounded-xl space-y-3 ">
                  <div className="">
                    <img
                      className="h-48 bg-black cover rounded-xl w-full object-cover"
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
                        <span className="  line-clamp-5 text-left">
                          MyArchitectureAI revitalizes property listings by
                          remodeling scenes in various styles, attracting buyers
                          with diverse preferences. Visually appealing design
                          options accelerate the sales process, allowing agents
                          to present properties effectively and reduce physical
                          visits.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="rounded-xl space-y-3 ">
                  <div className="">
                    <img
                      className="h-48 bg-black cover rounded-xl w-full object-cover"
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
                        <span className="  line-clamp-5 text-left">
                          MyArchitectureAI sparks inspiration by showcasing
                          different styles, helping users discover new design
                          directions for their spaces. Users can visualize their
                          spaces in various styles, creating a unique living
                          environment that reflects their preferences.
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
            className="bg-black rounded-xl text-white font-medium px-4 py-3 lg:mt-0 sm:mt-10  hover:bg-black transition"
            href={"/dream"}
          >
            Build your dream home for free →
          </Link>
        </div>

        <div className="flex justify-center items-center pt-48">
          <div className="space-y-5">
            <div>
              <span className="font-bold text-4xl">
                Unlimited designs, for your unlimited imagination
              </span>
            </div>
            <div>
              <span>
                Your Imagination, Our Canvas: Immerse yourself in a world of
                unlimited designs, where your imagination takes center stage.
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
          <div className="shadow-xl border rounded-xl p-12 space-y-10">
            <div className="space-y-7">
              <div className="text-center">
                <span className=" font-bold px-5 py-1 rounded-full text-blue-500 text-xs">Hobby</span>
              </div>
              <div className="">
                <div className="text-center">
                  <span className="font-bold">
                    <span className="text-4xl">Free</span>
                  </span>
                  <span className=""></span>
                </div>
              </div>
            </div>

            <div className="space-y-10 text-sm text-left">
              <div className="space-y-3 h-[400px]">
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
                      <span className="font-bold underline">
                        Limited selection
                      </span>{" "}
                      of architectural styles and options
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Interior design studio</span>
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
              <div className="flex justify-center font-bold">
              {user ? (
                <Link
                className="bg-blue-500 rounded-md w-full text-white px-4 py-3 hover:bg-black transition font-bold"
                  href={"/dream"}
                >
                  Go to the MyArchitectAI app →
                </Link>
              ) : (
                <button
                className="bg-blue-500 rounded-md w-full text-white px-4 py-3 hover:bg-black transition font-bold"
                  onClick={() => signInWithSupabase()}
                >
                  Build your dream home →
                </button>
              )}
            </div>
              
            </div>
          </div>
          {/* <div className="shadow-xl border rounded-xl p-12 space-y-10">
            <div className="space-y-7">
              <div className="text-left">
                <span className="text-stone-500 font-bold">Pro</span>
              </div>
              <div className="">
                <div className="text-left">
                  <span className="font-bold ">
                    <span className="text-4xl">$14.99</span>
                  </span>
                  <span className="">/month</span>
                </div>
              </div>
            </div>

            <div className="space-y-10 text-left text-sm">
              <div className="space-y-3 h-[400px]">
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
                    <span className="">Interior Design Studio</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Exterior Design Studio</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Floorplan Design Studio</span>
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
          </div> */}
          <div className="shadow-xl border rounded-xl p-12 space-y-10">
            <div className="space-y-7">
              <div className="text-center">
                <span className="text-blue-500  font-bold px-5 py-1 rounded-full text-xs">Premium</span>
              </div>
              <div className="">
                <div className="text-center">
                  <span className="font-bold  ">
                    <span className="text-4xl ">$15.99</span>
                  </span>
                  <span className="">/month</span>
                </div>
              </div>
            </div>

            <div className="space-y-10 text-left text-sm">
              <div className="space-y-3 h-[400px]">
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
                    <span className="">Interior Design Studio</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Exterior Design Studio</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Floorplan Design Studio</span>
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
                  href="https://myarchitectai.lemonsqueezy.com/checkout/buy/875159c9-3c87-4ce1-8e2f-557191a03115"
                  target="_blank"
                  className="w-full"
                >
                  <button
                    // onClick={() => {
                    //   Paddle.Checkout.open({
                    //     product: 47418,
                    //   });
                    // }}
                    className="bg-blue-500 rounded-md w-full text-white px-4 py-3 hover:bg-black transition font-bold"
                  >
                    Build your dream home →
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="shadow-xl border rounded-xl p-12 space-y-10">
            <div className="space-y-7">
              <div className="text-center">
                <span className="text-blue-500 font-bold px-5 py-1 rounded-full text-xs">Premium Yearly</span>
              </div>
              <div className="">
                <div className="text-center">
                  <span className="font-bold  ">
                    <span className="text-4xl ">$99.99</span>
                  </span>
                  <span className="">/year</span>
                </div>
              </div>
            </div>

            <div className="space-y-10 text-left text-sm">
              <div className="space-y-3 h-[400px]">
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
                    <span className="">Interior Design Studio</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Exterior Design Studio</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Floorplan Design Studio</span>
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
                  href="https://myarchitectai.lemonsqueezy.com/checkout/buy/b598c7af-ed8f-478f-a294-e2da36e5f7b0"
                  target="_blank"
                  className="w-full"
                >
                  <button
                    // onClick={() => {
                    //   Paddle.Checkout.open({
                    //     product: 47418,
                    //   });
                    // }}
                    className="bg-blue-500 rounded-md w-full text-white px-4 py-3 hover:bg-black transition font-bold"
                  >
                    Build your dream home →
                  </button>
                </Link>
              </div>
            </div>
          </div>
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
            className="bg-black rounded-xl text-white font-medium px-4 py-3 hover:bg-black transition"
            href={"/dream"}
          >
            Build your dream home for free →
          </Link>
        </div>

        <div className="lg:flex justify-between py-24 w-full lg:space-x-12 pt-48">
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
