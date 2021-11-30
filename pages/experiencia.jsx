import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Layout from "../components/Layout";
import { experiences } from "../profile";

export default function Experiencia() {
  return (
    <div className="bg-gray-900">
      <Layout>
        <div className="row">
          <div className="col-md-6 text-gray-200 mb-3 ">
            <div className="pt-6 text-center">
              <div className="bg-gray-700 rounded-2xl p-2 w-full ">
                <h1 className="text-gray-100 font-medium">
                  EXPERIENCIA DETALLADA
                </h1>
                {experiences
                  .filter((n) => n.id % 2)
                  .map(({ company, from, to, description }, i) => (
                    <Disclosure as="div" className="mt-2" key={i}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-write bg-gray-800 rounded-lg hover:bg-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>
                              {company} {from} hasta {to}
                            </span>
                            <ChevronUpIcon
                              className={`${
                                open ? "transform rotate-180" : ""
                              } w-5 h-5 text-purple-500`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-100 w-full">
                            {description}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
              </div>
            </div>
          </div>

          <div className="col-md-6 text-gray-200 mb-3">
            <div className="pt-6 text-center">
              <div className="bg-gray-700 rounded-2xl p-2 w-full">
                <h1 className="text-gray-100 font-medium">
                  EXPERIENCIA DETALLADA
                </h1>
                {experiences
                  .filter((n) => !(n.id % 2))
                  .map(({ company, from, to, description }, i) => (
                    <Disclosure as="div" className="mt-2" key={i}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-write bg-gray-800  rounded-lg hover:bg-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>
                              {company} {from} hasta {to}
                            </span>
                            <ChevronUpIcon
                              className={`${
                                open ? "transform rotate-180" : ""
                              } w-5 h-5 text-purple-500`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-100 w-full">
                            {description}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
