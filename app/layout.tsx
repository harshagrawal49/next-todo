import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-2 flex justify-center items-center h-screen w-screen">
        {children}
      </body>
    </html>
  );
}
