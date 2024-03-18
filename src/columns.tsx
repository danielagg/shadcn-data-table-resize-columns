import { ColumnDef } from "@tanstack/react-table";

export type User = {
  id: number;
  email: string;
  name: string;
  age: number;
  address: string;
  language: string;
  airLine: string;
  origin: string;
  destination: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "language",
    header: "Language",
  },
  {
    accessorKey: "airLine",
    header: "Airline",
  },
  {
    accessorKey: "origin",
    header: "Origin",
  },
  {
    accessorKey: "destination",
    header: "Destination",
  },
];
