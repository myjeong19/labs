import Image from "next/image";
import { Link } from "nextra-theme-docs";

export default function Page() {
  return (
    <main className="flex flex-col w-full">
      <Image
        src="/banner.avif"
        alt="HAEKKOK LABS"
        width={1000}
        height={250}
        className="h-52 w-full object-cover"
      />
      <section className="relative w-full max-w-3xl mx-auto">
        <Image
          src="/profile.avif"
          alt="HAEKKOK LABS - Profile"
          width={150}
          height={150}
          className="rounded-md absolute -top-20 left-0"
        />

        <div className="flex flex-col gap-4 mt-20 ">
          <div>
            <h1 className="text-2xl font-bold">Introduction</h1>
            <p className="text-gray-500">
              다시 쓰기 쉬운 훅과 컴포넌트를 구현하며 쌓아가는 학습 아카이브 🧪
            </p>
          </div>

          <Link
            href="https://github.com/myjeong19/labs"
            className="flex items-center gap-2"
          >
            <Image src="/github.svg" alt="Github" width={20} height={20} />
            <p className="text-gray-500">Github</p>
          </Link>
        </div>
        <hr className="w-full my-10 border-gray-200" />
      </section>
    </main>
  );
}
