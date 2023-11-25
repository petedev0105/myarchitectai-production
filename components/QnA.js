import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function QnA() {
  return (
    <div className="w-full px-4 pt-48 space-y-10">
      <div>
        <span className="font-semibold text-4xl">Your questions, answered</span>
      </div>
      <div className="mx-auto w-full rounded-2xl bg-white space-y-5">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-50 px-4 py-5 text-left border font-medium text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                <span>What is AiHomeRenders, and how does it work?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 text-left">
                AiHomeRenders is an intuitive home design tool that allows you
                to visualize and render your home designs effortlessly. It
                employs the latest AI models to generate high-quality renders
                based on your preferences and uploaded designs.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-50 px-4 py-5 text-left border font-medium text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                <span>
                  What makes AiHomeRenders suitable for users with varying
                  levels of expertise?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 text-left">
                AiHomeRenders is designed to be user-friendly, catering to both
                beginners and experts. You don't need advanced design skills –
                simply upload your sketches or images, choose styles, and let
                the AI do the rest.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-50 px-4 py-5 text-left border font-medium text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                <span>
                  Is there a limit to the number of designs I can export with
                  AiHomeRenders Pro?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 text-left">
              With AiHomeRenders Pro, there's no limit to the number of designs you can export. Enjoy the freedom to bring unlimited creative ideas to life and share them in high-quality renders.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-50 px-4 py-5 text-left border font-medium text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                <span>
                  What rights do users have over the renders created with
                  AiHomeRenders?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 text-left">
                With the Pro plans, users gain full commercial rights to their
                renders, empowering them to use the designs as they see fit.{" "}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-50 px-4 py-5 text-left border font-medium text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                <span>
                  Is there a trial period available for AiHomeRenders?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 text-left">
                AiHomeRenders offers a Free plan that allows users to start
                designing without any upfront cost. This gives users the
                opportunity to explore the platform before opting for a paid
                subscription.{" "}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
