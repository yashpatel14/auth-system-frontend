import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AdminDashboard = () => {
  return (
    <>
      <div className="flex flex-1">
        <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-zinc-800">
                Admin Dashboard
              </h1>
              <p>Manage users and their sessions</p>
            </div>
            <div className="flex gap-x-3">
              <button
                className="h-10 px-4 rounded-md bg-gradient-to-br from-black to-neutral-600 text-white font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                type="button"
              >
                Logout →
              </button>
              <button
                className="h-10 px-4 rounded-md bg-gradient-to-br from-black to-neutral-600 text-white font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                type="button"
              >
                Logout All Sessions →
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-center">
          <div>
            <h1 className="text-3xl font-bold text-zinc-800">
            User Management
            </h1>
            
          </div>
        </div>

        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default AdminDashboard;
