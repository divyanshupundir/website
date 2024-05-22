export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={"prose m-8 mx-auto"}>{children}</div>;
}
