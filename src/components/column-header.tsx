import { cn } from "@/lib/utils";
import { Column } from "@tanstack/react-table";
import { ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

interface Props<TData, TValue> {
  column?: Column<TData, TValue> | null;
  children: ReactNode;
  className?: string;
}

export function ColumnHeader<TData, TValue>({
  column = null,
  children,
  className = "",
}: Props<TData, TValue>) {
  return (
    <div
      className={cn("flex h-9 w-full items-center border-b", className, {
        "px-2": !column,
      })}
    >
      {column ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-min p-1">
              <span>{children}</span>
              {column.getIsSorted() === "desc" ? (
                <ArrowDown className="h-3 w-3" />
              ) : column.getIsSorted() === "asc" ? (
                <ArrowUp className="h-3 w-3" />
              ) : (
                <ArrowUpDown className="h-3 w-3" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
              <ArrowUp
                className={cn(
                  "mr-2 h-3.5 w-3.5 text-muted-foreground/70",
                  column.getIsSorted() === "asc" && "text-accent-foreground"
                )}
              />
              Asc
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
              <ArrowDown
                className={cn(
                  "mr-2 h-3.5 w-3.5 text-muted-foreground/70",
                  column.getIsSorted() === "desc" && "text-accent-foreground"
                )}
              />
              Desc
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        children
      )}
    </div>
  );
}
