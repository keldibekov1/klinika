import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";

type FormValues = {
  name: string;
  surname: string;
  birthday?: Date | null;
  phoneNumber?: string;
  jshshir: string;
  passportSeriya: string;
  gender: "male" | "female" | "";
};

interface UserDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSave: (data: FormValues) => void;
}

const UserDialog: React.FC<UserDialogProps> = ({ open, setOpen, onSave }) => {
  const [openBirthday, setOpenBirthday] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      surname: "",
      birthday: null,
      jshshir: "",
      passportSeriya: "",
      gender: "",
    },
  });

  const birthday = watch("birthday");

  const onSubmit = (data: FormValues) => {
    if (!data.name || !data.surname) {
      alert("Ism va familiyani to‘ldirish majburiy");
      return;
    }

    onSave({
      ...data,
      birthday: data.birthday ? new Date(data.birthday) : null,
    });

    reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Yangi foydalanuvchi qoʻshish</Button>
      </DialogTrigger>

      <DialogContent
        className="sm:max-w-[425px] rounded-lg border bg-white p-4 shadow-lg"
        onInteractOutside={() => {}}
      >
        <DialogHeader>
          <DialogTitle>Yangi foydalanuvchi qoʻshish</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 mt-2">
          <div>
            <Label className="mb-1">Ism</Label>
            <Input
              placeholder="Ism"
              {...register("name", { required: "Ism majburiy" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <Label className="mb-1">Familiya</Label>
            <Input
              placeholder="Familiya"
              {...register("surname", { required: "Familiya majburiy" })}
            />
            {errors.surname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.surname.message}
              </p>
            )}
          </div>

          <div>
            <Label className="mb-1">Jinsi</Label>
            <Select
              onValueChange={(val) =>
                setValue("gender", val as FormValues["gender"])
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Tanlang" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Erkak</SelectItem>
                <SelectItem value="female">Ayol</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="mb-1">Telefon raqami</Label>
            <Input
              placeholder="Telefon raqami"
              {...register("phoneNumber")}
            />
          </div>

          <div>
            <Label className="mb-1">Tugʻilgan sana</Label>
            <Popover open={openBirthday} onOpenChange={setOpenBirthday}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                  {birthday
                    ? format(birthday as Date, "yyyy-MM-dd")
                    : "Sana tanlash"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={birthday ?? undefined}
                  onSelect={(date: any) => {
                    setValue("birthday", date ?? null);
                    setOpenBirthday(false);
                  }}
                  captionLayout="dropdown"
                  fromYear={1940}
                  toYear={new Date().getFullYear()}
                  fixedWeeks
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label className="mb-1">JSHSHIR (PINFL)</Label>
            <Input
              placeholder="12345678901234"
              maxLength={14}
              {...register("jshshir", {
                validate: (val) =>
                  !val ||
                  /^[0-9]{14}$/.test(val) ||
                  "JSHSHIR 14 ta raqam bo‘lishi kerak",
              })}
            />
            {errors.jshshir && (
              <p className="text-red-500 text-sm mt-1">
                {errors.jshshir.message}
              </p>
            )}
          </div>

          <div>
            <Label className="mb-1">Passport seriya/raqam</Label>
            <Input placeholder="AA1234567" {...register("passportSeriya")} />
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <DialogClose asChild>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Bekor qilish
              </Button>
            </DialogClose>

            <Button type="submit">Saqlash</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UserDialog;
