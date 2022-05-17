import { Outlet } from "@remix-run/react";

export default function Invoice() {
  return (
    <>
      <div className="text-lg bg-slate-300 h-screen text-center flex-col">
        <div className="h-2/4">This is invoice component</div>
        <div className="h-2/4">
          <Outlet />
        </div>
      </div>
    </>
  );
}
