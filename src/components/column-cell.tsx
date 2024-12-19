import { CustomColumnDef } from "@/app/columns";
import { cn } from "@/lib/utils";
import { User } from "@/types";
import { Column } from "@tanstack/react-table";
import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  column: Column<User, unknown>;
}

export const ColumnCell: FC<Props> = ({ children, className = "", column }) => {
  const { isSticky, fixedWidth } = column.columnDef as CustomColumnDef<
    User,
    unknown
  >;

  return (
    <div
      className={cn("", className)}
      style={isSticky && fixedWidth ? { width: `${fixedWidth}px` } : {}}
    >
      {children}
    </div>
  );
};
