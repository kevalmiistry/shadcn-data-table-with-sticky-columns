import { DataTableWithStickyColumns } from "@/components/datatable-with-sticky-columns";
import type { ApiResponse, User } from "@/types";
import { columns } from "./columns";
import { GithubIcon } from "lucide-react";
import { ModeToggler } from "@/components/mode-toggler";

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
    <section className="flex h-screen flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b p-4">
        <h1 className="text-3xl font-semibold italic text-slate-600 dark:text-slate-100">
          Shad-cn Data Table with Sticky Columns!
        </h1>

        <div className="flex items-center justify-end gap-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kevalmiistry/shadcn-data-table-with-sticky-columns"
            className="rounded-full border-2 border-slate-600 p-1 dark:border-slate-100"
          >
            <GithubIcon className="h-4 w-4 text-slate-600 dark:text-slate-100" />
          </a>

          <ModeToggler />
        </div>
      </div>

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
