"use client";

import { ColumnCell } from "@/components/column-cell";
import type { User } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "index",
    header: () => (
      <div className="flex h-9 w-full items-center justify-center border-b text-center">
        #
      </div>
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
    header: () => (
      <div className="flex h-9 w-full items-center border-b">Name</div>
    ),
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
    header: () => (
      <div className="flex h-9 w-full items-center border-b">Email</div>
    ),
    cell: ({
      row: {
        original: { email },
      },
    }) => <ColumnCell className="w-max">{email}</ColumnCell>,
  },
  {
    accessorKey: "phone_number",
    header: () => (
      <div className="flex h-9 w-full items-center border-b">Phone Number</div>
    ),
    cell: ({
      row: {
        original: { phone_number },
      },
    }) => <ColumnCell className="w-max">{phone_number}</ColumnCell>,
  },
  {
    accessorKey: "street_address",
    header: () => (
      <div className="flex h-9 w-full items-center border-b">
        Street Address
      </div>
    ),
    cell: ({
      row: {
        original: { street_address },
      },
    }) => <ColumnCell className="w-max">{street_address}</ColumnCell>,
  },
  {
    accessorKey: "city",
    header: () => (
      <div className="flex h-9 w-full items-center border-b">City</div>
    ),
    cell: ({
      row: {
        original: { city },
      },
    }) => <ColumnCell className="w-max">{city}</ColumnCell>,
  },
  {
    accessorKey: "state",
    header: () => (
      <div className="flex h-9 w-full items-center border-b">State</div>
    ),
    cell: ({
      row: {
        original: { state },
      },
    }) => <ColumnCell className="w-max">{state}</ColumnCell>,
  },
  {
    accessorKey: "postal_code",
    header: () => (
      <div className="flex h-9 w-full items-center border-b">Postal Code</div>
    ),
    cell: ({
      row: {
        original: { postal_code },
      },
    }) => <ColumnCell className="w-max">{postal_code}</ColumnCell>,
  },
  {
    accessorKey: "country",
    header: () => (
      <div className="flex h-9 w-full items-center border-b">Country</div>
    ),
    cell: ({
      row: {
        original: { country },
      },
    }) => <ColumnCell className="w-max">{country}</ColumnCell>,
  },
  {
    accessorKey: "date_of_birth",
    header: () => (
      <div className="flex h-9 w-full items-center border-b">Date of Birth</div>
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
    header: () => (
      <div className="flex h-9 w-full items-center border-b">Company</div>
    ),
    cell: ({
      row: {
        original: { company },
      },
    }) => <ColumnCell className="w-max">{company}</ColumnCell>,
  },
  {
    accessorKey: "job_title",
    header: () => (
      <div className="flex h-9 w-full items-center border-b">Job Title</div>
    ),
    cell: ({
      row: {
        original: { job_title },
      },
    }) => <ColumnCell className="w-max">{job_title}</ColumnCell>,
  },
  {
    accessorKey: "salary",
    header: () => (
      <div className="flex h-9 w-full items-center border-b">Salary</div>
    ),
    cell: ({
      row: {
        original: { salary },
      },
    }) => <ColumnCell className="w-max">${salary.toLocaleString()}</ColumnCell>,
  },
  {
    accessorKey: "last_login",
    header: () => (
      <div className="flex h-9 w-full items-center border-b">Last Login</div>
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
