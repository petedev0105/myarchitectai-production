import React from "react";
import { useSupabase } from "../components/supabaseProvider";
import Link from "next/link";
import FeatureItem from "../components/FeatureItem";
import Alert from "./Alert";

function Pricing() {
  const { supabase, user, signInWithSupabase } = useSupabase();
  return (
    <div>
      <div className="flex justify-center items-center pt-24">
        <div className="space-y-5">
          <div>
            <span className="font-semibold text-4xl">
              Choose the plan that best fits your style
            </span>
          </div>
          <div>
            <span className="text-xl text-stone-700">
              Transparent, flexible pricing to help your home reach its fullest
              potential.
            </span>
          </div>
        </div>
      </div>

      {/* <Alert /> */}

      <div className="lg:grid grid-cols-3 gap-5 pt-12 lg:space-y-0 space-y-10">
        {/* <div className="shadow-xl border rounded-xl p-10 space-y-10">
          <div className="space-y-7">
            <div className="text-left">
              <span className="font-semibold py-1 rounded-full text-yellow-500 text-sm">
                Hobby
              </span>
            </div>
            <div className="">
              <div className="text-left">
                <span className="font-semibold">
                  <span className="text-4xl">Free</span>
                </span>
                <span className=""></span>
              </div>
            </div>
          </div>

          <div className="space-y-10 text-left">
            <div className="space-y-3 text-lg">
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="10 Inspiring Designs Monthly"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Explore Standard AI Capabilities"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Design Finesse with Quality Renders"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="AI Furniture Removal - No More Unwanted Items"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Choose from 10 Architecture Styles"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Explore 12 Simple Interior Styles"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Experiment with 8 Building Types"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Illuminate Designs with 3 Lighting Styles"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Download and Cherish in Standard Quality"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="24/7 Support - Assistance When You Need It"
              />
            </div>
            <div className="flex justify-center font-semibold">
              {user ? (
                <Link
                  className="bg-yellow-600 rounded-full w-full text-white px-4 py-3 hover:bg-yellow-600 transition font-semibold text-left"
                  href={"/dream"}
                >
                  Go to the AIHomeRender app →
                </Link>
              ) : (
                <button
                  className="bg-yellow-600 rounded-full w-full text-white px-4 py-3 hover:bg-yellow-600 transition font-semibold"
                  onClick={() => signInWithSupabase()}
                >
                  Build your dream home →
                </button>
              )}
            </div>
          </div>
        </div> */}
        
        <div className="">
          <div className="shadow-xl border rounded-xl p-10 space-y-10">
            <div className="space-y-7">
              <div className="text-left">
                <span className=" py-1 rounded-full text-xl">
                  AIHomeRender Free
                </span>
              </div>
              <div className="">
                <div className="text-left">
                  <span className="font-semibold">
                    <span className="text-5xl">$0</span>
                  </span>
                  <span className="">/month</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center font-semibold">
              {user ? (
                <Link
                  className="bg-yellow-600 rounded-full w-full text-white px-4 py-3 hover:bg-yellow-600 transition font-semibold text-center"
                  href={"/dream"}
                >
                  Go to the AIHomeRender app →
                </Link>
              ) : (
                <button
                  className="bg-yellow-600 rounded-full w-full text-white px-4 py-3 hover:bg-yellow-600 transition font-semibold"
                  onClick={() => signInWithSupabase()}
                >
                  Build your dream home →
                </button>
              )}
            </div>

            <div className="space-y-10 text-left">
              <div className="space-y-3 text-lg">
                <FeatureItem
                  icon="/img/tick-tutor.png"
                  text="10 Inspiring Designs Monthly"
                />
                <FeatureItem
                  icon="/img/tick-tutor.png"
                  text="Explore Standard AI Capabilities"
                />
                <FeatureItem
                  icon="/img/tick-tutor.png"
                  text="Design Finesse with Quality Renders"
                />
                {/* <FeatureItem
                  icon="/img/tick-tutor.png"
                  text="AI Furniture Removal - No More Unwanted Items"
                /> */}
                <FeatureItem
                  icon="/img/tick-tutor.png"
                  text="Choose from 10 Architecture Styles"
                />
                <FeatureItem
                  icon="/img/tick-tutor.png"
                  text="Explore 12 Simple Interior Styles"
                />
                <FeatureItem
                  icon="/img/tick-tutor.png"
                  text="Experiment with 8 Building Types"
                />
                <FeatureItem
                  icon="/img/tick-tutor.png"
                  text="Illuminate Designs with 3 Lighting Styles"
                />
                <FeatureItem
                  icon="/img/tick-tutor.png"
                  text="Download and Cherish in Standard Quality"
                />
                <FeatureItem
                  icon="/img/tick-tutor.png"
                  text="24/7 Support - Assistance When You Need It"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-xl border-2 border-yellow-600 rounded-xl p-10 space-y-10">
          <div className="space-y-7">
            <div className="text-left">
              <span className=" py-1 rounded-full text-xl">
                AIHomeRender <span className="font-bold">Pro</span>
              </span>
            </div>

            <div className="">
              <div className="text-left">
                <span className="font-semibold">
                  <s className="text-5xl text-stone-400">$39</s>
                  <span className="text-5xl">$19</span>
                </span>
                <span className="">/month</span>
              </div>
              {/* <div>
                <span>Use code </span>
              </div> */}
            </div>

            <div className="text-left">
              <span className="text-yellow-600 font-bold text-sm">
                BLACK FRIDAY OFFER -{" "}
                <span className="underline">50% OFF</span>
              </span>
            </div>
          </div>

          <div className="flex justify-center font-semibold">
            {user ? (
              <Link
                className="bg-yellow-600 rounded-full w-full text-white px-4 py-3 hover:bg-yellow-600 transition font-semibold text-center"
                href={"/dream"}
              >
                Go to the AIHomeRender app →
              </Link>
            ) : (
              <button
                className="bg-yellow-600 rounded-full w-full text-white px-4 py-3 hover:bg-yellow-600 transition font-semibold text-center"
                onClick={() => signInWithSupabase()}
              >
                Build your dream home →
              </button>
            )}
          </div>

          <div className="space-y-10 text-left">
            <div className="space-y-3 text-lg">
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Unlimited Monthly Designs - An Endless Canvas"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Harness the Power of Our Latest AI Model"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Upscale Your Designs to 4K Resolution"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Immerse Yourself in Higher Quality Renders"
              />
              {/* <FeatureItem
                icon="/img/tick-tutor.png"
                text="Bid Farewell to Unwanted Furniture with AI Furniture Removal"
              /> */}
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Choose from 40+ Architecture Styles"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Explore 24+ Interior Styles"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Select from 20+ Building Types"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Choose from 7+ Lighting Styles"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Download & Export in High Quality"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="24/7 Support - Your Creative Companion Is Always Here"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="No Watermark - Your Designs, Pure and Unblemished"
              />
            </div>
          </div>
        </div>

        <div className="shadow-xl border-2 border-yellow-600 rounded-xl p-10 space-y-10">
          <div className="space-y-7">
            <div className="text-left">
              <span className=" py-1 rounded-full text-xl">
                AIHomeRender <span className="font-bold">Pro Yearly</span>
              </span>
            </div>

            <div className="">
              <div className="text-left">
                <span className="font-semibold">
                  <s className="text-5xl text-stone-400">$468</s>
                  <span className="text-5xl">$199</span>
                </span>
                <span className="">/year</span>
              </div>
              {/* <div>
                <span>Use code </span>
              </div> */}
            </div>

            <div className="text-left">
              <span className="text-yellow-600 font-bold text-sm">
                BLACK FRIDAY OFFER -{" "}
                <span className="underline">50% OFF</span>
              </span>
            </div>
          </div>

          <div className="flex justify-center font-semibold">
            {user ? (
              <Link
                className="bg-yellow-600 rounded-full w-full text-white px-4 py-3 hover:bg-yellow-600 transition font-semibold text-center"
                href={"/dream"}
              >
                Go to the AIHomeRender app →
              </Link>
            ) : (
              <button
                className="bg-yellow-600 rounded-full w-full text-white px-4 py-3 hover:bg-yellow-600 transition font-semibold text-center"
                onClick={() => signInWithSupabase()}
              >
                Build your dream home →
              </button>
            )}
          </div>

          <div className="space-y-10 text-left">
            <div className="space-y-3 text-lg">
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Unlimited Monthly Designs - An Endless Canvas"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Harness the Power of Our Latest AI Model"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Upscale Your Designs to 4K Resolution"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Immerse Yourself in Higher Quality Renders"
              />
              {/* <FeatureItem
                icon="/img/tick-tutor.png"
                text="Bid Farewell to Unwanted Furniture with AI Furniture Removal"
              /> */}
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Choose from 40+ Architecture Styles"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Explore 24+ Interior Styles"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Select from 20+ Building Types"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Choose from 7+ Lighting Styles"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="Download & Export in High Quality"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="24/7 Support - Your Creative Companion Is Always Here"
              />
              <FeatureItem
                icon="/img/tick-tutor.png"
                text="No Watermark - Your Designs, Pure and Unblemished"
              />
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default Pricing;
