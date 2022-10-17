import Link from "next/link";
import metadata from "@/data/metadata";
import navLinks from "@/data/navLinks";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <div>
        <Link href="/" aria-label={metadata.headerTitle}>
          {typeof metadata.headerTitle === "string" ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {metadata.headerTitle}
            </div>
          ) : (
            metadata.headerTitle
          )}
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {navLinks.map((link) => {
            <Link
              key={link.title}
              href={link.href}
              className="p-1 font-medium text-gray-900 darK:text-gray-100 sm:p-4"
            >
              {link.title}
            </Link>;
          })}
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
