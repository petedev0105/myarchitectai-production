"use client";
import img from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { useSession, signIn } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20">
        <div className="lg:flex justify-between items-center w-full space-x-24">
          <div className="lg:w-1/2 text-left space-y-5">
            <div>
              <span className="font-bold text-4xl">
                Visualize your architectural sketches in seconds
              </span>
            </div>
            <div>
              <span className="text-xl">
                Take your hand-drawn sketches of buildings and instantly
                transform them into breathtaking, photorealistic masterpieces.
              </span>
            </div>
            <div>
              {session && session.user ? (
                <Link
                  className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
                  href={"/dream"}
                >
                  Build your dream home for free →
                </Link>
              ) : (
                <button
                  className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
                  onClick={() => signIn()}
                >
                  Build your dream home for free →
                </button>
              )}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="/img/hero.webp" />
          </div>
        </div>

        <div className="flex justify-cetner items-center pt-48">
          <div className="space-y-5">
            <div>
              <span className="font-bold text-4xl">
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
              <img src="/img/mid.webp" />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center pt-48">
          <div className="space-y-5">
            <div>
              <span className="font-bold text-4xl">
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

        <div className="flex justify-center items-center pt-48 space-x-7">
          <div className="shadow-xl border rounded-xl p-12 space-y-10">
            <div className="space-y-12">
              <div className="">
                <span className="text-indigo-700 font-bold">
                  Pro
                </span>
              </div>
              <div className="flex space-x-5 items-center justify-between">
                
                <div>
                  <span className="text-3xl font-bold text-indigo-800">
                    <span className="text-6xl ">19.</span>00
                  </span><span className="font-bold text-indigo-400">
                    /hour
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="flex justify-center">
                <Link href="/signin">
                  <button
                    // onClick={() => {
                    //   Paddle.Checkout.open({
                    //     product: 47418,
                    //   });
                    // }}
                    className="px-5 py-2 rounded-md border-2 border-indigo-700 font-bold text-indigo-700 text-center"
                  >
                    First lesson on us
                  </button>
                </Link>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">1-on-1 Tutoring Lessons</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Access to beginner subjects (10+)</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">
                      Native / Bilingual English Speakers.
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">
                      Tutors with Excellent Results (6+, A)*
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">First lesson on us. (30 minutes)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl border rounded-xl p-12 space-y-10">
            <div className="space-y-12">
              <div className="text-center">
                <span className="text-3xl text-indigo-700 font-bold">
                  Navigator
                </span>
              </div>
              <div className="flex space-x-5 items-center justify-between">
                <div>
                  <span className="font-bold text-indigo-400">USD</span>
                </div>
                <div>
                  <span className="text-3xl font-bold text-indigo-800">
                    <span className="text-6xl ">19.</span>00
                  </span>
                </div>
                <div>
                  <span className="font-bold text-indigo-400">
                    /hour
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="flex justify-center">
                <Link href="/signin">
                  <button
                    // onClick={() => {
                    //   Paddle.Checkout.open({
                    //     product: 47418,
                    //   });
                    // }}
                    className="px-5 py-2 rounded-md border-2 border-indigo-700 font-bold text-indigo-700 text-center"
                  >
                    First lesson on us
                  </button>
                </Link>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">1-on-1 Tutoring Lessons</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Access to beginner subjects (10+)</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">
                      Native / Bilingual English Speakers.
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">
                      Tutors with Excellent Results (6+, A)*
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">First lesson on us. (30 minutes)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl border rounded-xl p-12 space-y-10">
            <div className="space-y-12">
              <div className="text-center">
                <span className="text-3xl text-indigo-700 font-bold">
                  Navigator
                </span>
              </div>
              <div className="flex space-x-5 items-center justify-between">
                <div>
                  <span className="font-bold text-indigo-400">USD</span>
                </div>
                <div>
                  <span className="text-3xl font-bold text-indigo-800">
                    <span className="text-6xl ">19.</span>00
                  </span>
                </div>
                <div>
                  <span className="font-bold text-indigo-400">
                    /hour
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="flex justify-center">
                <Link href="/signin">
                  <button
                    // onClick={() => {
                    //   Paddle.Checkout.open({
                    //     product: 47418,
                    //   });
                    // }}
                    className="px-5 py-2 rounded-md border-2 border-indigo-700 font-bold text-indigo-700 text-center"
                  >
                    First lesson on us
                  </button>
                </Link>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">1-on-1 Tutoring Lessons</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">Access to beginner subjects (10+)</span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">
                      Native / Bilingual English Speakers.
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">
                      Tutors with Excellent Results (6+, A)*
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div>
                    <img src="/img/tick-tutor.png" height={20} width={20} />
                  </div>
                  <div>
                    <span className="">First lesson on us. (30 minutes)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
