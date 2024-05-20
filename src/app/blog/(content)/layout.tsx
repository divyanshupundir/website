export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={"prose mx-auto mt-8"}>{children}</div>;
}
