import { Outlet } from "@remix-run/react";

export default function files() {
  return (
    <>
      File route <Outlet />
    </>
  );
}
