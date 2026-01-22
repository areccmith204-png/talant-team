export const metadata = {
  title: "TALANT TEAM",
  description: "Savdo va statistika tizimi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body style={{ fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
