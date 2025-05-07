import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Next.js CRUD Application',
  description: 'Next.js CRUD Application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-3xl mx-auto p-4">
          <Navbar />
          <div className="mt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
