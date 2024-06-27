import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid md:grid-cols-2 lg:grid-cols-3 h-[100dvh]">
      <div className="hidden md:flex lg:col-span-2 relative">
        {/* image filling parent */}
        <Image
          alt="bg"
          src="/images/auth.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div>{children}</div>
    </main>
  );
}
