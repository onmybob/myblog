import ThemeRegistry from "./_components/ThemeRegistry/ThemeRegistry";
import ReactQueryProvider from "./_helpers/query/provider";
import { AlertMsg } from "./_components/AlertMsg";
import "./globals.css";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body>
          <ThemeRegistry>
            <AlertMsg />
            {children}
          </ThemeRegistry>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
