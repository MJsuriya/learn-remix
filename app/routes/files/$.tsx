import { useParams } from "@remix-run/react";

export default function FilesComponent() {
  const params = useParams();
  const id = params["*"];

  return (
    <>
      <div>This is files component with splat - {id}</div>
    </>
  );
}
