import { Disclosure} from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeaderTest() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-800">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="ml-2 mr-2 flex items-center md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a className="border-transparent text-gray-100 hover:border-gray-300 hover:text-gray-400 inline-flex items-center px-4 pt-1 font-medium text-2xl">
                      Portafolio
                    </a>
                  </Link>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8 pl-72 text-right">
                  <Link href="/">
                    <a className="border-transparent text-gray-100 hover:border-gray-300 hover:text-gray-400 inline-flex items-center px-1 pt-1 font-medium">
                      Home
                    </a>
                  </Link>

                  <Link href="/curriculo">
                    <a className="border-transparent text-gray-100 hover:border-gray-300 hover:text-gray-400 inline-flex items-center px-1 pt-1 font-medium">
                      Currículo
                    </a>
                  </Link>

                  <Link href="/experiencia">
                    <a className="border-transparent text-gray-100 hover:border-gray-300 hover:text-gray-400 inline-flex items-center px-1 pt-1 font-medium">
                      Experiencia
                    </a>
                  </Link>


                  <Link href="/habilidades">
                    <a className="border-transparent text-gray-100 hover:border-gray-300 hover:text-gray-400 inline-flex items-center px-1 pt-1 font-medium">
                      Habilidades
                    </a>
                  </Link>

                  <Link href="/proyectos">
                    <a
                      href="#"
                      className="border-transparent text-gray-100 hover:border-gray-300 hover:text-gray-400 inline-flex items-center px-1 pt-1 text-sm font-medium"
                    >
                      Proyectos
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden bg-gray-800">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-100 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <a
                href="/"
                className="border-transparent text-gray-100 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Home
              </a>
              <a
                href="/curriculo"
                className="border-transparent text-gray-100 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Currículo
              </a>
              <a
                href="/experiencia"
                className="border-transparent text-gray-100 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Experiencia
              </a>
              <a
                href="/habilidades"
                className="border-transparent text-gray-100 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Habilidades
              </a>
              <a
                href="/proyectos"
                className="border-transparent text-gray-100 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Proyectos
              </a>
              <hr width="1" size="500"></hr>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
