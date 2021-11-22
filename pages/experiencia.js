import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Layout from "../components/Layout";

export default function Experiencia() {
  return (
    <div className="bg-gray-900">
      <Layout>
        <div className="row">
          <div className="col-md-6 text-gray-200 mb-3">
            <div className="pt-6 text-center">
              <div className="bg-gray-700 rounded-2xl p-2 w-full">
                <strong>
                  <h1 className="font-sans">EXPERIENCIA DETALLADA</h1> <br />

                </strong>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>Sul America ING 1999-2001</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 w-full">
                        If you're unhappy with your purchase for any reason,
                        email us within 90 days and we'll refund you in full, no
                        questions asked. If you're unhappy with your purchase
                        for any reason, email us within 90 days and we'll refund
                        you in full, no questions asked. If you're unhappy with
                        your purchase for any reason, email us within 90 days
                        and we'll refund you in full, no questions asked.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>experiencia con Cics</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 w-full">
                        If you're unhappy with your purchase for any reason,
                        email us within 90 days and we'll refund you in full, no
                        questions asked. If you're unhappy with your purchase
                        for any reason, email us within 90 days and we'll refund
                        you in full, no questions asked. If you're unhappy with
                        your purchase for any reason, email us within 90 days
                        and we'll refund you in full, no questions asked.
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>

          <div className="col-md-6 text-gray-200 mb-3">
            <div className="pt-6 text-center">
              <div className="bg-gray-700 rounded-2xl p-2 w-full">
                <strong>
                  <h1 className="font-sans ">EXPERIENCIA DETALLADA</h1> <br />
                </strong>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>Sul America ING 1999-2001</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 w-full">
                        If you're unhappy with your purchase for any reason,
                        email us within 90 days and we'll refund you in full, no
                        questions asked. If you're unhappy with your purchase
                        for any reason, email us within 90 days and we'll refund
                        you in full, no questions asked. If you're unhappy with
                        your purchase for any reason, email us within 90 days
                        and we'll refund you in full, no questions asked.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>experiencia con Cics</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 w-full">
                        If you're unhappy with your purchase for any reason,
                        email us within 90 days and we'll refund you in full, no
                        questions asked. If you're unhappy with your purchase
                        for any reason, email us within 90 days and we'll refund
                        you in full, no questions asked. If you're unhappy with
                        your purchase for any reason, email us within 90 days
                        and we'll refund you in full, no questions asked.
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
