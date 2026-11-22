import { CategoryNav } from "@/cases/categories/components/category-nav";
import { Header } from "./header";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <>
      <Header />

      <div className="mx-auto flex w-full max-w-5xl gap-6 px-6 py-8">

        <aside className="w-64 shrink-0">
          <CategoryNav />
        </aside>

        <main className="min-w-0 flex-1 border-t border-[#CFC7BA]/70 pt-6 pb-6">
          <Outlet />
        </main>

      </div>
    </>
  );
} 