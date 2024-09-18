import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expense Tracker",
  description: "Track your daily, monthly, and yearly expenses easily with our responsive Expense Tracker application.",
  keywords: "expense tracker, budget, finance, money management, savings, personal finance, track expenses",
  openGraph: {
    title: "Expense Tracker - Manage Your Finances",
    description: "Take control of your finances with our easy-to-use Expense Tracker. Organize, categorize, and track your expenses efficiently.",
    url: "https://expense-tracker-tau-umber.vercel.app",
    type: "website",
  }
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
