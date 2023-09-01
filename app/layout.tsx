import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home ",
  description: "Discover our all exercises",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
