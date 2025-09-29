import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import UserDialog from "./components/UserDialog";
import { toast } from "sonner";
import { UserTable } from "./user-table";
import { getUsers } from "./get-users";
import type { User } from "./types/user";
import PaginationComponent from "./components/PaginationComponent";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Users: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const handleSave = (data: any) => {
    try {
      console.log("Yangi foydalanuvchi:", {
        ...data,
        birthday: data.birthday ? format(data.birthday, "yyyy-MM-dd") : null,
      });
      toast.success("Foydalanuvchi muvaffaqiyatli qo'shildi!");
      setOpen(false);
    } catch (err) {
      toast.error("Foydalanuvchi qo'shishda xatolik yuz berdi!");
    }
  };

  const totalPages = Math.ceil(users.length / pageSize);
  const currentData = users.slice((page - 1) * pageSize, page * pageSize);

  return (
 <div className="p-2">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
    <h1 className="text-xl font-semibold">Foydalanuvchilar</h1>

    <div className="flex flex-1 md:flex-initial items-center gap-2">
      <Input
        type="search"
        placeholder="Qidirish..."
        className="w-full md:w-64"
      />

      <select className="border rounded-md px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Barchasi</option>
        <option value="admin">Admin</option>
        <option value="user">Foydalanuvchi</option>
        <option value="employee">Xodim</option>
      </select>

      <select className="border rounded-md px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Status</option>
        <option value="active">Faol</option>
        <option value="inactive">Nofaol</option>
      </select>
    </div>

    <div className="flex items-center gap-2">
      <Button
        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700"
      >
        <Download size={16} />
        Excel
      </Button>
      <UserDialog open={open} setOpen={setOpen} onSave={handleSave} />
    </div>
  </div>

  <div className="rounded border bg-white p-4 shadow flex flex-col min-h-[500px]">
    <div className="flex-1">
      <UserTable users={currentData} />
    </div>

    <div className="mt-4">
      <PaginationComponent
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  </div>
</div>

  );
};

export default Users;
