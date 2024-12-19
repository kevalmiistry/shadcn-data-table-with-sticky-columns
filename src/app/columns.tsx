"use client";

import { ColumnCell } from "@/components/column-cell";
import { ColumnHeader } from "@/components/column-header";
import type { User } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "index",
    header: ({ column }) => (
      <ColumnHeader column={column} className="justify-center">
        #
      </ColumnHeader>
    ),
    cell: ({
      row: {
        original: { index },
      },
    }) => (
      <ColumnCell isSticky fixedWidth={50} className="text-center">
        {index}.
      </ColumnCell>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => <ColumnHeader column={column}>Name</ColumnHeader>,
    cell: ({
      row: {
        original: { name },
      },
    }) => (
      <ColumnCell
        isSticky
        fixedWidth={250}
        className="w-max overflow-hidden truncate font-medium"
      >
        {name}
      </ColumnCell>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => <ColumnHeader column={column}>Email</ColumnHeader>,
    cell: ({
      row: {
        original: { email },
      },
    }) => <ColumnCell className="w-max">{email}</ColumnCell>,
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
    }) => <ColumnCell className="w-max">{phone_number}</ColumnCell>,
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
    }) => <ColumnCell className="w-max">{street_address}</ColumnCell>,
  },
  {
    accessorKey: "city",
    header: ({ column }) => <ColumnHeader column={column}>City</ColumnHeader>,
    cell: ({
      row: {
        original: { city },
      },
    }) => <ColumnCell className="w-max">{city}</ColumnCell>,
  },
  {
    accessorKey: "state",
    header: ({ column }) => <ColumnHeader column={column}>State</ColumnHeader>,
    cell: ({
      row: {
        original: { state },
      },
    }) => <ColumnCell className="w-max">{state}</ColumnCell>,
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
    }) => <ColumnCell className="w-max">{postal_code}</ColumnCell>,
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
    }) => <ColumnCell className="w-max">{country}</ColumnCell>,
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
    }) => (
      <ColumnCell className="w-max">
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
    }) => <ColumnCell className="w-max">{company}</ColumnCell>,
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
    }) => <ColumnCell className="w-max">{job_title}</ColumnCell>,
  },
  {
    accessorKey: "salary",
    header: ({ column }) => <ColumnHeader column={column}>Salary</ColumnHeader>,
    cell: ({
      row: {
        original: { salary },
      },
    }) => <ColumnCell className="w-max">${salary.toLocaleString()}</ColumnCell>,
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
    }) => (
      <ColumnCell className="w-max">
        {new Date(last_login).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </ColumnCell>
    ),
  },
];
