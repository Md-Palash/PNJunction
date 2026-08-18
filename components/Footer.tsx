import Link from "next/link";
import { LogoIcon } from "./icons";

const columns = [
  { title: "Platform", links: ["Topics", "Latest", "Tools", "Start Here", "Newsletter"] },
  { title: "Company", links: ["About", "Privacy", "Terms", "Contact"] },
];

export default function Footer() {
  return (
    <footer className="bg-ink px-6 pb-6 pt-14 text-white/85">
      <div className="mx-auto flex max-w-content flex-wrap justify-between gap-10">
        <div>
          <Link href="/" className="flex items-center gap-2 font-heading text-[17px] font-extrabold text-white">
            <LogoIcon />
            <span>PNJunction</span>
          </Link>
          <p className="mt-2.5 max-w-[240px] text-[14px] text-white/55">Where technology actually connects.</p>
        </div>

        <div className="flex flex-wrap gap-14">
          {columns.map((col) => (
            <div key={col.title}>
              <div className="mb-3.5 text-[12.5px] font-bold uppercase tracking-[0.06em] text-white/45">
                {col.title}
              </div>
              {col.links.map((l) => (
                <Link
                  key={l}
                  href="#"
                  className="block py-1.5 text-[14.5px] text-white/80 transition-colors hover:text-white"
                >
                  {l}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-content border-t border-white/10 pt-5 text-[13px] text-white/45">
        <span>© 2026 PNJunction. All rights reserved.</span>
      </div>
    </footer>
  );
}
