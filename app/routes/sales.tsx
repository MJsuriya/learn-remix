import { Outlet } from "@remix-run/react";

export default function Sales() {
  return (
    <>
      <div className="flex flex-row text-center">
        <div className="bg-slate-500 h-screen text-4xl w-3/12">Sidebar</div>
        <div className="bg-slate-500 h-screen text-4xl w-9/12">
          <Outlet />
        </div>
      </div>
    </>
  );
}
