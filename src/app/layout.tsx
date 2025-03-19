export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
