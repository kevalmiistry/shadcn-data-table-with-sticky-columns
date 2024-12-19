"use client";

import {
  CellContext,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { DataTablePagination } from "./datatable-pagination";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  enableStickyCols?: boolean;
}

export function DataTableWithStickyColumns<TData, TValue>({
  columns,
  data,
  enableStickyCols = false,
}: DataTableProps<TData, TValue>) {
  const stickyColsPoints: number[] = useMemo(() => {
    return columns
      .filter((item, idx) =>
        typeof item.cell === "function"
          ? item.cell({
              row: { original: data[idx] },
            } as CellContext<TData, TValue>)?.props?.isSticky === true
          : false
      )
      .map((item, idx) =>
        typeof item.cell === "function"
          ? item.cell({
              row: { original: data[idx] },
            } as CellContext<TData, TValue>)?.props?.fixedWidth
          : 0
      );
  }, [columns, data]);

  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  const getStickyProperties = (idx: number) => {
    if (idx < stickyColsPoints.length) {
      if (idx === 0) {
        return {
          left: "0px",
          width: `${stickyColsPoints[idx]}px`,
        };
      } else {
        return {
          left: `${stickyColsPoints
            .slice(0, idx)
            .reduce((acc, curr) => acc + curr, 0)}px`,
          width: `${stickyColsPoints[idx]}px`,
        };
      }
    }
  };

  const className = {
    getThClassName: (idx: number) => {
      return idx < stickyColsPoints.length ? "!px-0 !z-[100]" : "!z-[50]";
    },
    getTdClasses: (idx: number) => {
      return idx < stickyColsPoints.length
        ? "sticky !px-0 bg-background"
        : "bg-gray-50 dark:bg-gray-900";
    },
  };

  return (
    <div className="flex flex-1 flex-col gap-4 overflow-hidden">
      <div className="relative z-[0] h-full w-full flex-1 overflow-auto rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-b-0">
                {headerGroup.headers.map((header, idx) => (
                  <TableHead
                    key={header.id}
                    className={cn(
                      "h-fit whitespace-nowrap bg-background",
                      enableStickyCols ? className.getThClassName(idx) : "",
                      {
                        "sticky top-0": table.getRowModel().rows?.length > 0,
                      }
                    )}
                    style={getStickyProperties(idx)}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell, idx) => (
                    <TableCell
                      key={cell.id}
                      className={cn(
                        "",
                        enableStickyCols ? className.getTdClasses(idx) : ""
                      )}
                      style={getStickyProperties(idx)}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <DataTablePagination table={table} />
    </div>
  );
}
