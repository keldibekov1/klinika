import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { User } from "./types/user"

export function UserTable({ users }: { users: User[] }) {
  return (
    <Table className="text-base">
      <TableHeader>
        <TableRow className="h-12"> 
          <TableHead className="w-[100px]">No</TableHead>
          <TableHead>Ism</TableHead>
          <TableHead>Familiya</TableHead>
          <TableHead>Tug‘ilgan sana</TableHead>
          <TableHead>Ro'yxatga olish sanasi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => ( 
          <TableRow key={user.id} className="h-10"> 
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{user.firstName}</TableCell>
            <TableCell>{user.lastName}</TableCell>
            <TableCell>{user.birthday}</TableCell>
            <TableCell>{user.registerDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
