export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={"prose m-4 sm:m-8 sm:mx-auto"}>{children}</div>;
}
