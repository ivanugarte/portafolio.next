import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200 hover:border-gray-300 hover:text-gray-700">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="text-sm text-gray-600">
              <Link href="/" className="border-transparent text-gray-100 hover:border-gray-300 hover:text-gray-400 font-medium items-center ">
                  Home
              </Link>
              <Link href="/curriculo"className="border-transparent text-gray-100 hover:border-gray-300 hover:text-gray-400 font-medium items-center px-2 pt-1">
                  Currículo
              </Link>
              <Link href="/experiencia "className="border-transparent text-gray-100 hover:border-gray-300 hover:text-gray-400 font-medium items-center px-2 pt-1">
                  Experiencia
              </Link>
              <Link href="/habilidades" className="border-transparent text-gray-100 hover:border-gray-300 hover:text-gray-400 font-medium items-center px-2 pt-1">
                  Habilidades
              </Link>
              <Link href="/proyectos"  className="border-transparent text-gray-100 hover:border-gray-300 hover:text-gray-400 font-medium items-center px-2 pt-1">
                  Proyectos
              </Link>
              <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0 py-4 ">
                Página Hecha por Iván Ugarte Mella
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;