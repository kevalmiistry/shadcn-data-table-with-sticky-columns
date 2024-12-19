import { CustomColumnDef } from "@/app/columns";
import { cn } from "@/lib/utils";
import { Column } from "@tanstack/react-table";
import type { ReactNode } from "react";

interface Props<TData, TValue> {
  children: ReactNode;
  className?: string;
  column: Column<TData, TValue>;
}

export function ColumnCell<TData, TValue>({
  children,
  className = "",
  column,
}: Props<TData, TValue>) {
  const { isSticky, fixedWidth } = column.columnDef as CustomColumnDef<
    TData,
    TValue
  >;

  return (
    <div
      className={cn("", className)}
      style={isSticky && fixedWidth ? { width: `${fixedWidth}px` } : {}}
    >
      {children}
    </div>
  );
}
