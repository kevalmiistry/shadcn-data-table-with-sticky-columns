import { cn } from "@/lib/utils";
import type { FC, ReactNode } from "react";

interface BaseProps {
  children: ReactNode;
  className?: string;
}

interface StickyProps extends BaseProps {
  isSticky: true;
  fixedWidth: number;
}

interface NonStickyProps extends BaseProps {
  isSticky?: false;
  fixedWidth?: number | null;
}

type Props = StickyProps | NonStickyProps;

export const ColumnCell: FC<Props> = ({
  children,
  className = "",
  isSticky = false,
  fixedWidth = null,
}) => (
  <div
    className={cn("", className)}
    style={isSticky && fixedWidth !== null ? { width: `${fixedWidth}px` } : {}}
  >
    {children}
  </div>
);
