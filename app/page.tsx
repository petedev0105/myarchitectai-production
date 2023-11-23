"use client";
import img from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import QnA from "../components/QnA";
import { useSupabase } from "../components/supabaseProvider";
import { CompareSlider } from "../components/CompareSlider";
import Pricing from "../components/Pricing";
import Alert from "../components/Alert";

export default function HomePage() {
  const { supabase, user, signInWithSupabase } = useSupabase();

  return (
    <>
      {/* <div className="background "></div> */}
      <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen z-10">
        {/* <Alert /> */}
        <Header />
        <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20">
          <div className="">
            <div className="lg:max-w-3xl mx-auto space-y-10">
              <div className="flex justify-center pt-5 space-y-10">
                <div>
                  <div className="flex justify-center pb-5">
                    <span className="text-green-600 font-semibold">
                      INTUITIVE HOME DESIGN TOOL
                    </span>
                  </div>
                  <div className="max-w-[600px]">
                    <span className="font-semibold leading-tight lg:text-6xl text-3xl">
                      Your dream home, built in seconds.{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <span className="text-xl">
                  The all-in-one platform to satisfy all your home design needs.
                </span>
              </div>

              <div className="flex justify-center text-xl">
                <div>
                  {user ? (
                    <Link
                      className="bg-green-600 font-semibold rounded-full text-white px-10 py-3 hover:bg-green-700 transition"
                      href={"/build"}
                    >
                      Go to dashboard →
                    </Link>
                  ) : (
                    <button
                      className="bg-green-600 font-semibold rounded-full text-white px-10 py-3 hover:bg-green-700 transition"
                      onClick={() => signInWithSupabase()}
                    >
                      Start Designing For Free →
                    </button>
                  )}
                  <div className="pt-5">
                    <span className="text-stone-700 text-sm">
                      No credit card required
                    </span>
                  </div>
                </div>
              </div>

              {/* <div className="flex space-x-3 w-full items-center lg:justify-start justify-center">
                <div>
                  <img src="/img/star.png" width={70} />
                </div>

                <div>
                  <span className="text-sm">Join 100+ architecture lovers</span>
                </div>
              </div> */}
            </div>

            <div className="pt-32 flex justify-center">
              <img src="/img/landing.png" />
            </div>

            <div className="flex justify-center py-24">
              <img src="/img/numbers.png" className="" style={{ width: 700 }} />
            </div>
          </div>

          {/* <div className="flex justify-center items-center pt-48">
            <div className="space-y-5">
              <div>
                <span className="font-semibold text-4xl">
                  <span className="text-black">10x</span> your architecture
                  design output
                </span>
              </div>
              <div>
                <span>
                  Our platform goes beyond mere visualization, breathing life
                  into your designs and eliciting powerful emotions. Present
                  your photorealistic visuals to clients and stakeholders, and
                  watch as they become fully immersed in your vision.
                </span>
              </div>
              <div className="pt-12">
                <img src="/img/mid.png" />
              </div>
              <div className="pt-12">
                <Link
                  className="bg-green-600 rounded-xl text-white font-medium px-4 py-3 lg:mt-0 sm:mt-10  hover:bg-green-700 transition"
                  href={"/dream"}
                >
                  Build your dream home for free →
                </Link>
              </div>
            </div>
          </div> */}

          {/* <div className="pt-48 space-y-5">
            <div className="flex justify-center">
              <div className="font-semibold text-4xl">How it works</div>
            </div>
            <div className="flex justify-center">
              <div className=" text-stone-700">
                Visualize your ideas photorealistically in seconds. (It's easy
                as one two three)
              </div>
            </div>

            <div className="lg:grid grid-cols-3 gap-5 text-stone-700">
              <div className="p-5 rounded-full text-left">
                <div className="space-y-5">
                  <div className="">
                    <img
                      className="border rounded-full shadow-md h-48 w-full object-cover"
                      src="/img/interior-before.png"
                    />
                  </div>
                  <div>
                    <span className="text-2xl font-semibold">
                      Upload your designs
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-600">
                      Upload your idea to the web editor and watch the magic
                      happen. Whether it's a rough sketch, a 3d render, or a
                      photo of a real property, AIHomeRender will revisualize
                      it into beautiful photorealistic renders in a matter of
                      seconds.{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-full text-left">
                <div className="space-y-5">
                  <div>
                    <img
                      className="border rounded-full shadow-md h-48 w-full object-cover"
                      src="/img/options.PNG"
                    />
                  </div>
                  <div>
                    <span className="text-2xl font-semibold">
                      Customize the options
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-600">
                      With over 100+ architectural styles, made to fulfill every
                      need, freely pick the styles and lighting options that
                      best match your designs and watch your imagination fly.
                      Whether it's the interior,exterior or even floorplans,
                      we've got you covered from top to toe.
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-full text-left ">
                <div className="space-y-5">
                  <div>
                    <img
                      className="border rounded-full shadow-md h-48 w-full object-cover"
                      src="/img/interior-after.png"
                    />
                  </div>
                  <div>
                    <span className="text-2xl font-semibold">Download & share</span>
                  </div>
                  <div>
                    <span className="text-stone-600">
                      After a few seconds, your photorealistic renders will be
                      ready to be downloaded. This allows you to decrease the
                      time it takes to go through iterations with your clients,
                      optimizing your workflow and saving you both time and
                      money in the long run.{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="lg:flex justify-between items-center w-full lg:space-x-24 items-center ">
            <div className="lg:w-1/2 lg:pt-0 pt-10">
              <img src="/img/styles.png" />
              {/* <CompareSlider original="/img/exterior-before.png" restored="/img/exterior-after.png" /> */}
            </div>
            <div className="lg:w-1/2 lg:text-left space-y-7">
              <div>
                <span className="font-semibold lg:text-4xl text-3xl">
                  Revisualize your space in{" "}
                  <span className="text-green-600">100+</span> styles and
                  options
                </span>
              </div>
              <div>
                <span className="text-lg text-stone-600">
                  From the timeless elegance of Neoclassical to the sleek lines
                  of Modernist, our curated selection offers hundreds of
                  architectural styles for you to choose from.
                </span>
              </div>
              <div>
                {user ? (
                  <Link
                    className="bg-green-600 font-semibold rounded-full text-white px-10 py-3 hover:bg-green-700 transition"
                    href={"/dream"}
                  >
                    Go to the AIHomeRender app →
                  </Link>
                ) : (
                  <button
                    className="bg-green-600 font-semibold rounded-full text-white px-10 py-3 hover:bg-green-700 transition"
                    onClick={() => signInWithSupabase()}
                  >
                    Build your dream home →
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="lg:flex justify-between items-center w-full lg:space-x-24 pt-24">
            <div className="lg:w-1/2 lg:text-left space-y-7">
              <div>
                <span className="font-semibold lg:text-4xl text-3xl">
                  <span className="text-green-600">Upscale</span> and export
                  your designs in high resolution
                </span>
              </div>
              <div>
                <span className="text-lg text-stone-600">
                  We've revolutionized the way you approach architecture and
                  decor, making it accessible to everyone, regardless of
                  expertise.
                </span>
              </div>
              <div>
                {user ? (
                  <Link
                    className="bg-green-600 font-semibold rounded-full text-white px-10 py-3 hover:bg-green-700 transition"
                    href={"/dream"}
                  >
                    Go to the AIHomeRender app →
                  </Link>
                ) : (
                  <button
                    className="bg-green-600 font-semibold rounded-full text-white px-10 py-3 hover:bg-green-700 transition"
                    onClick={() => signInWithSupabase()}
                  >
                    Build your dream home →
                  </button>
                )}
              </div>
            </div>
            <div className="lg:w-1/2 lg:pt-0 pt-10">
              <img src="/img/sizes.png" />
              {/* <CompareSlider original="/img/exterior-before.png" restored="/img/exterior-after.png" /> */}
            </div>
          </div>

          {/* 
          <div className="lg:flex justify-between items-center w-full lg:space-x-24 pt-48">
            <div className=" lg:text-left space-y-7 p-10 border rounded-full">
              <div>
                <span className="font-semibold lg:text-4xl text-3xl">
                  Don't want to spend time rendering? We can do it for you.
                </span>
              </div>
              <div>
                <span className="">
                  Our team is dedicated to providing high-quality rendering
                  services for projects that involve a high quantity of images,
                  tailored to meet your specific requirements and preferences.
                  We offer each render at a competitive rate of $1 per image. If
                  your business demands exceptional visualizations and
                  personalized attention, we encourage you to get in touch with
                  us. Our experts are eager to learn more about your unique
                  needs and how we can best assist you.
                </span>
              </div>
              <div>
                <span className="underline">
                  Send us an email at kiettran255@gmail.com
                </span>
              </div>
            </div>
          </div> */}

          {/* <div className="flex justify-center items-center pt-48 w-full">
            <div className="space-y-5">
              <div>
                <span className="font-semibold text-4xl">
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
              <div className="w-full pt-10">
                <div className="lg:grid grid-cols-2 gap-10">
                  <div className="rounded-xl space-y-3">
                    <div className="">
                      <img
                        className="h-48 bg-green-600 cover rounded-xl w-full object-cover"
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
                          <span className="font-semibold text-2xl line-clamp-2 hover:underline">
                            Architects
                          </span>
                        </div>
                        <div className="flex space-x-3 items-center">
                          <span className="  line-clamp-5 text-left">
                            MyArchitectureAI enables architects to visualize
                            sketches in various styles, fostering quick
                            iteration and experimentation. The platform
                            automates remodeling, saving architects significant
                            time while effortlessly generating multiple design
                            options.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="rounded-xl space-y-3 ">
                    <div className="">
                      <img
                        className="h-48 bg-green-600 cover rounded-xl w-full object-cover"
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
                          <span className="font-semibold text-2xl line-clamp-2 hover:underline">
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
                        className="h-48 bg-green-600 cover rounded-xl w-full object-cover"
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
                          <span className="font-semibold text-2xl line-clamp-2 hover:underline">
                            Real Estate Agents
                          </span>
                        </div>
                        <div className="flex space-x-3 items-center">
                          <span className="  line-clamp-5 text-left">
                            MyArchitectureAI revitalizes property listings by
                            remodeling scenes in various styles, attracting
                            buyers with diverse preferences. Visually appealing
                            design options accelerate the sales process,
                            allowing agents to present properties effectively
                            and reduce physical visits.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="rounded-xl space-y-3 ">
                    <div className="">
                      <img
                        className="h-48 bg-green-600 cover rounded-xl w-full object-cover"
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
                          <span className="font-semibold text-2xl line-clamp-2 hover:underline">
                            Home Lovers
                          </span>
                        </div>
                        <div className="flex space-x-3 items-center">
                          <span className="  line-clamp-5 text-left">
                            MyArchitectureAI sparks inspiration by showcasing
                            different styles, helping users discover new design
                            directions for their spaces. Users can visualize
                            their spaces in various styles, creating a unique
                            living environment that reflects their preferences.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="pt-12">
            <Link
              className="bg-green-600 rounded-xl text-white font-medium px-4 py-3 lg:mt-0 sm:mt-10  hover:bg-green-700 transition"
              href={"/dream"}
            >
              Build your dream home for free →
            </Link>
          </div> */}

          <div className="flex justify-center items-center pt-24">
            <div className="space-y-5">
              <div>
                <span className="font-semibold text-4xl">
                  See what&apos;s possible
                </span>
              </div>
              <div className="max-w-3xl mx-auto text-stone-700">
                <span className="text-xl">
                  Find inspiration from buildings built by creative architects
                  and home lovers all across the globe using AIHomeRender.
                </span>
              </div>
              <div>
                <img src="/img/landing-2.png" />
              </div>
            </div>
          </div>

          <Pricing />

          {/* <div className="lg:flex justify-between py-24 w-full lg:space-x-12 pt-48">
            <div className="lg:w-1/2 space-y-5">
              <div className="text-left">
                <span className="text-3xl font-semibold">
                  Frequently asked questions
                </span>
              </div>
              <div className="text-left">
                <span>
                  Answers to common questions about MyArchitectureAI's services
                  for architects, interior desginers, real estate agents and
                  home lovers.
                </span>
              </div>
            </div>
            <QnA />
          </div> */}

          <div>
            <div className="py-48 flex justify-center ">
              <div className="space-y-10">
                <span className="text-4xl font-semibold">
                  A better way to design your home,{" "}
                  <span className="text-green-600">you ready?</span>
                </span>
                <div>
                  <button
                    className="bg-green-600 font-semibold rounded-full text-white px-10 py-3 hover:bg-green-700 transition"
                    onClick={() => signInWithSupabase()}
                  >
                    Start Designing For Free →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
