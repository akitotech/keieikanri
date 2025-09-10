import type { Metadata } from "next";
// import "./globals.css";

export const metadata: Metadata = {
  title: "経営管理ビザ（4か月）｜今だけ旧要件で申請可能",
  description: "経営管理ビザ（4か月）を今だけ旧要件で申請。資本金500万円・事務所不要で間に合うラストチャンス。神戸リージェンシー行政書士事務所が緊急対応。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{
          __html: `
            html, body { 
              font-family: 'Noto Sans JP', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'; 
            }
            .container-narrow { max-width: 1040px; }
            .prose ul { list-style: disc; padding-left: 1.25rem; }
          `
        }} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
