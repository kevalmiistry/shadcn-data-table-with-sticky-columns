"use client";

import { ColumnCell } from "@/components/column-cell";
import { ColumnHeader } from "@/components/column-header";
import { Checkbox } from "@/components/ui/checkbox";
import type { User } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";

export type CustomColumnDef<TData, TValue> = ColumnDef<TData, TValue> & {
  isSticky?: boolean;
  fixedWidth?: number;
};

export const columns: CustomColumnDef<User, unknown>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <ColumnHeader className="justify-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </ColumnHeader>
    ),
    cell: ({ row, column }) => (
      <ColumnCell column={column} className="flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </ColumnCell>
    ),
    isSticky: true,
    fixedWidth: 50,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <ColumnHeader column={column}>Name</ColumnHeader>,
    cell: ({
      row: {
        original: { name },
      },
      column,
    }) => (
      <ColumnCell
        column={column}
        className="w-max overflow-hidden truncate font-medium"
      >
        {name}
      </ColumnCell>
    ),
    isSticky: true,
    fixedWidth: 250,
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header: ({ column }) => <ColumnHeader column={column}>Email</ColumnHeader>,
    cell: ({
      row: {
        original: { email },
      },
      column,
    }) => (
      <ColumnCell column={column} className="w-max">
        {email}
      </ColumnCell>
    ),
  },
  {
    accessorKey: "phone_number",
    header: ({ column }) => (
      <ColumnHeader column={column}>Phone Number</ColumnHeader>
    ),
    cell: ({
      row: {
        original: { phone_number },
      },
      column,
    }) => (
      <ColumnCell column={column} className="w-max">
        {phone_number}
      </ColumnCell>
    ),
  },
  {
    accessorKey: "street_address",
    header: ({ column }) => (
      <ColumnHeader column={column}>Street Address</ColumnHeader>
    ),
    cell: ({
      row: {
        original: { street_address },
      },
      column,
    }) => (
      <ColumnCell column={column} className="w-max">
        {street_address}
      </ColumnCell>
    ),
  },
  {
    accessorKey: "city",
    header: ({ column }) => <ColumnHeader column={column}>City</ColumnHeader>,
    cell: ({
      row: {
        original: { city },
      },
      column,
    }) => (
      <ColumnCell column={column} className="w-max">
        {city}
      </ColumnCell>
    ),
  },
  {
    accessorKey: "state",
    header: ({ column }) => <ColumnHeader column={column}>State</ColumnHeader>,
    cell: ({
      row: {
        original: { state },
      },
      column,
    }) => (
      <ColumnCell column={column} className="w-max">
        {state}
      </ColumnCell>
    ),
  },
  {
    accessorKey: "postal_code",
    header: ({ column }) => (
      <ColumnHeader column={column}>Postal Code</ColumnHeader>
    ),
    cell: ({
      row: {
        original: { postal_code },
      },
      column,
    }) => (
      <ColumnCell column={column} className="w-max">
        {postal_code}
      </ColumnCell>
    ),
  },
  {
    accessorKey: "country",
    header: ({ column }) => (
      <ColumnHeader column={column}>Country</ColumnHeader>
    ),
    cell: ({
      row: {
        original: { country },
      },
      column,
    }) => (
      <ColumnCell column={column} className="w-max">
        {country}
      </ColumnCell>
    ),
  },
  {
    accessorKey: "date_of_birth",
    header: ({ column }) => (
      <ColumnHeader column={column}>Date of Birth</ColumnHeader>
    ),
    cell: ({
      row: {
        original: { date_of_birth },
      },
      column,
    }) => (
      <ColumnCell column={column} className="w-max">
        {new Date(date_of_birth).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </ColumnCell>
    ),
  },
  {
    accessorKey: "company",
    header: ({ column }) => (
      <ColumnHeader column={column}>Company</ColumnHeader>
    ),
    cell: ({
      row: {
        original: { company },
      },
      column,
    }) => (
      <ColumnCell column={column} className="w-max">
        {company}
      </ColumnCell>
    ),
  },
  {
    accessorKey: "job_title",
    header: ({ column }) => (
      <ColumnHeader column={column}>Job Title</ColumnHeader>
    ),
    cell: ({
      row: {
        original: { job_title },
      },
      column,
    }) => (
      <ColumnCell column={column} className="w-max">
        {job_title}
      </ColumnCell>
    ),
  },
  {
    accessorKey: "salary",
    header: ({ column }) => <ColumnHeader column={column}>Salary</ColumnHeader>,
    cell: ({
      row: {
        original: { salary },
      },
      column,
    }) => (
      <ColumnCell column={column} className="w-max">
        ${salary.toLocaleString()}
      </ColumnCell>
    ),
  },
  {
    accessorKey: "last_login",
    header: ({ column }) => (
      <ColumnHeader column={column}>Last Login</ColumnHeader>
    ),
    cell: ({
      row: {
        original: { last_login },
      },
      column,
    }) => (
      <ColumnCell column={column} className="w-max">
        {new Date(last_login).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </ColumnCell>
    ),
  },
];
