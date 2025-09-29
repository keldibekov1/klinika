import React, { useState, useEffect } from "react";

type NotificationItem = {
  id: number;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
};

const mockNotifications: NotificationItem[] = [
  {
    id: 1,
    title: "Yangi foydalanuvchi qo‘shildi",
    message: "Ali aka tizimga ro‘yxatdan o‘tdi",
    read: true,
    createdAt: "2025-09-29T10:30:00",
  },
  {
    id: 2,
    title: "To‘lov muvaffaqiyatli amalga oshdi",
    message: "Invoice #1234 to‘lov qabul qilindi",
    read: true,
    createdAt: "2025-09-28T15:45:00",
  },
  {
    id: 3,
    title: "Parolni yangilash kerak",
    message: "Sizning parolingiz 90 kunda eskiradi",
    read: false,
    createdAt: "2025-09-27T08:20:00",
  },
];

const Notification: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications(mockNotifications);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      {notifications.length === 0 ? (
        <p className="text-gray-500">Hech qanday notification yo‘q</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((n) => (
            <li
              key={n.id}
              className={`p-4 border rounded-lg shadow-md flex justify-between items-start transition-all duration-200 ${
                n.read
                  ? "bg-gray-100 border-gray-200"
                  : "bg-white border-blue-300"
              } hover:shadow-lg`}
            >
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{n.title}</p>
                <p className="text-gray-600 text-sm mt-1">{n.message}</p>
                <p className="text-gray-400 text-xs mt-2">
                  {new Date(n.createdAt).toLocaleString()}
                </p>
              </div>
              {!n.read && (
                <button
                  onClick={() => markAsRead(n.id)}
                  className="ml-4 px-3 py-1 text-sm font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition"
                >
                  Mark as read
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default React.memo(Notification);
