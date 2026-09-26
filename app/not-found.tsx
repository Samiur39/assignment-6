import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-5">
      <div className="text-center">
        <p className="text-sm font-bold tracking-[3px] text-[#c2f800]">
          ERROR 404
        </p>

        <h1 className="mt-3 font-oswald text-6xl font-bold uppercase text-white">
          WORKOUT NOT FOUND
        </h1>

        <p className="mt-4 text-gray-500">
          The workout you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="mt-7 inline-block rounded-md bg-[#c2f800] px-6 py-3 text-sm font-bold uppercase text-black"
        >
          Back to Library
        </Link>
      </div>
    </section>
  );
}