import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white">
      {/* Üst bölmə */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-8">
        {/* Abunə + Sosial */}
        <div className="md:col-span-2 w-[340px]">
          <h4 className="text-4xl font-extrabold mb-2 pr-8">
            Xəbərlərimizə abunə ol
          </h4>
          <p className="mb-4 font-medium">Yeniliklərdən məlumatlı ol</p>
          <form className="flex rounded-md relative">
            <input
              type="email"
              placeholder="E-poçt daxil et"
              className="px-4 py-3 rounded-md  bg-white flex-1 text-gray-800 focus:outline-none placeholder:text-gray-800"
            />
            <button
              type="submit"
              className="bg-red-600 text-white absolute right-0 top-[5px] px-8 py-2 mr-2 text-sm border rounded-lg font-semibold cursor-pointer"
            >
              Abunə ol
            </button>
          </form>
          <div className="flex items-center justify-between space-x-4 mt-12 text-2xl">
            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="hover:opacity-80">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="YouTube" className="hover:opacity-80">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-80">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Link sütunları */}
        <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h5 className="font-semibold text-xl mb-2">Haqqımızda</h5>
            <ul className="space-y-5">
              <li>
                <Link href="/about/bakcell-mmc" className="hover:underline">
                  Bakcell MMC
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:underline">
                  Xəbərlər
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                  Vakansiyalar
                </Link>
              </li>
              <li>
                <Link href="/campaigns" className="hover:underline">
                  Kampaniyalar
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2 text-xl">Xidmətlər</h5>
            <ul className="space-y-5">
              <li>
                <Link href="/services/internet" className="hover:underline">
                  İnternet
                </Link>
              </li>
              <li>
                <Link href="/services/tarifler" className="hover:underline">
                  Tariflər
                </Link>
              </li>
              <li>
                <Link href="/services/asan-imza" className="hover:underline">
                  Asan İmza
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2 text-xl">Dəstək</h5>
            <ul className="space-y-5">
              <li>
                <Link href="/support/faq" className="hover:underline">
                  Sual‑cavab
                </Link>
              </li>
              <li>
                <Link href="/support/contact" className="hover:underline">
                  Bizə yaz
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2 text-xl">Bizimlə əlaqə</h5>
            <ul className="space-y-5">
              <li>
                <a href="tel:555" className="hover:underline">
                  555
                </a>
              </li>
              <li>
                <a href="mailto:info@bakcell.com" className="hover:underline">
                  info@bakcell.com
                </a>
              </li>
              <li>
                <a href="tel:+994124988898" className="hover:underline">
                  +994 12 498 8898
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Alt bölmə */}
      <div className="border-t border-red-500">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>
            © Müəlliflik hüququ {new Date().getFullYear()} Bakcell MMC. Bütün
            hüquqlar qorunur.
          </p>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
            <Link href="/monthly-fee" className="hover:underline">
              Aylıq istifadə haqqı
            </Link>
            <Link href="/terms" className="hover:underline">
              Şərt və Tələblər
            </Link>
            <Link href="/privacy" className="hover:underline">
              Məxfilik siyasəti
            </Link>
            <Link href="/subscriber-agreement" className="hover:underline">
              Abunəçi müqaviləsi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
