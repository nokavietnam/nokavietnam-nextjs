export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <html>
      <body>
        <div style={{ color: "blue" }}>{children}</div>
      </body>
    </html>
  );
}
