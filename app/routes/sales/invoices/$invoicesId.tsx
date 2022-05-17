import { useParams } from "@remix-run/react";

export default function InvoicesComponent() {
  const params = useParams();
  const id = params.invoicesId;

  return (
    <>
      <div>This is dynamic invoice component with id - {id}</div>
    </>
  );
}
