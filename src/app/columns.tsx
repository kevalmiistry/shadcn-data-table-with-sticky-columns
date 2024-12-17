"use client";

import type { User } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "index",
    header: () => <div className="w-max">#</div>,
    cell: ({
      row: {
        original: { index },
      },
    }) => <div className="text-lg font-medium">{index}.</div>,
  },
  {
    accessorKey: "name",
    header: () => <div className="w-max">Name</div>,
    cell: ({
      row: {
        original: { name },
      },
    }) => (
      <div className="w-max overflow-hidden truncate text-lg font-medium">
        {name}
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: () => <div className="w-max">Email</div>,
    cell: ({
      row: {
        original: { email },
      },
    }) => <div className="w-max">{email}</div>,
  },
  {
    accessorKey: "phone_number",
    header: () => <div className="w-max">Phone Number</div>,
    cell: ({
      row: {
        original: { phone_number },
      },
    }) => <div className="w-max">{phone_number}</div>,
  },
  {
    accessorKey: "street_address",
    header: () => <div className="w-max">Street Address</div>,
    cell: ({
      row: {
        original: { street_address },
      },
    }) => <div className="w-max">{street_address}</div>,
  },
  {
    accessorKey: "city",
    header: () => <div className="w-max">City</div>,
    cell: ({
      row: {
        original: { city },
      },
    }) => <div className="w-max">{city}</div>,
  },
  {
    accessorKey: "state",
    header: () => <div className="w-max">State</div>,
    cell: ({
      row: {
        original: { state },
      },
    }) => <div className="w-max">{state}</div>,
  },
  {
    accessorKey: "postal_code",
    header: () => <div className="w-max">Postal Code</div>,
    cell: ({
      row: {
        original: { postal_code },
      },
    }) => <div className="w-max">{postal_code}</div>,
  },
  {
    accessorKey: "country",
    header: () => <div className="w-max">Country</div>,
    cell: ({
      row: {
        original: { country },
      },
    }) => <div className="w-max">{country}</div>,
  },
  {
    accessorKey: "date_of_birth",
    header: () => <div className="w-max">Date of Birth</div>,
    cell: ({
      row: {
        original: { date_of_birth },
      },
    }) => (
      <div className="w-max">
        {new Date(date_of_birth).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    ),
  },
  {
    accessorKey: "company",
    header: () => <div className="w-max">Company</div>,
    cell: ({
      row: {
        original: { company },
      },
    }) => <div className="w-max">{company}</div>,
  },
  {
    accessorKey: "job_title",
    header: () => <div className="w-max">Job Title</div>,
    cell: ({
      row: {
        original: { job_title },
      },
    }) => <div className="w-max">{job_title}</div>,
  },
  {
    accessorKey: "salary",
    header: () => <div className="w-max">Salary</div>,
    cell: ({
      row: {
        original: { salary },
      },
    }) => <div className="w-max">${salary.toLocaleString()}</div>,
  },
  {
    accessorKey: "last_login",
    header: () => <div className="w-max">Last Login</div>,
    cell: ({
      row: {
        original: { last_login },
      },
    }) => (
      <div className="w-max">
        {new Date(last_login).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    ),
  },
];
