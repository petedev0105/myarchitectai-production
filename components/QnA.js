import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function QnA() {
  return (
    <div className="w-full px-4">
      <div className="mx-auto w-full rounded-2xl bg-white p-2 space-y-5">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-100 px-4 py-5 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                <span>
                  Is MyArchitectureAI suitable for individuals without design
                  expertise?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 text-left">
                Yes, MyArchitectureAI is designed to be user-friendly and
                accessible to individuals without extensive design knowledge.
                Home lovers can use the platform to gain design inspiration,
                visualize different styles in their spaces, and personalize
                their homes according to their preferences.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-100 px-4 py-5 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                <span>Can I use MyArchitectureAI on mobile devices?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 text-left">
                Yes, MyArchitectureAI is available on mobile devices as well as
                desktop platforms. You can conveniently access and use the
                platform on your smartphone or tablet, making it easier to
                upload pictures, explore design options, and collaborate on the
                go.{" "}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-100 px-4 py-5 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                <span>
                  How can real estate agents benefit from using
                  MyArchitectureAI?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 text-left">
                Real estate agents can enhance their property listings by using
                MyArchitectureAI to showcase different design styles and
                preferences. By remodeling scenes, agents can attract a wider
                range of potential buyers with diverse tastes and preferences,
                ultimately speeding up the sales process.{" "}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-100 px-4 py-5 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                <span>
                  What are the file formats supported for uploading sketches or
                  photos to MyArchitectureAI?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 text-left">
                MyArchitectureAI supports various common file formats such as
                JPEG, PNG, and GIF for uploading sketches or photos. It ensures
                compatibility and ease of use for users.{" "}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
