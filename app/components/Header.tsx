import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2 bg-slate-50 ">
        <Link href="/">
          <Image
            alt="random"
            className="rounded-full"
            src="https://picsum.photos/200/200"
            width={50}
            height={50}
          />
        </Link>
        <h1 className="text-black">Mohammad Ali's Blog</h1>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
