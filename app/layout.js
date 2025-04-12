import "./globals.css";


export const metadata = {
  title: "Bakcell | Azərbaycanın ən sürətli mobil şəbəkəsi",
  description: "Bakcell-dən sərfəli təkliflər, danışıq tarifləri, internet paketləri. VoLTE texnologiyası ilə sürətli, aydın, kəsintisiz.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
