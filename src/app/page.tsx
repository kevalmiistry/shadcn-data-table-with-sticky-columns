import { DataTableWithStickyColumns } from "@/components/datatable-with-sticky-columns";
import type { ApiResponse, User } from "@/types";
import { columns } from "./columns";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-data`,
    {
      cache: "no-store",
    }
  );

  const result: ApiResponse<User[]> = await response.json();

  const users = result.success ? result.data : null;

  return (
    <section className="flex h-screen flex-col overflow-hidden p-4">
      {users ? (
        <DataTableWithStickyColumns
          columns={columns}
          data={users}
          enableStickyCols
        />
      ) : (
        "no users"
      )}
    </section>
  );
}
