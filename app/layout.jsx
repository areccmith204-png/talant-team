// app/layout.jsx

export const metadata = {
  title: "TALANT TEAM",
  description: "Do'kon boshqaruv tizimi"
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body>
        {children}
      </body>
    </html>
  );
}
