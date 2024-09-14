import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center flex gap-8 flex-col pt-20">
      <h1 className="text-3xl font-semibold">Landing Page</h1>
      <Link href={"dashboard"} className="text-gray-800">
        Go to Dashboard [Private page]
      </Link>
    </div>
  );
}
