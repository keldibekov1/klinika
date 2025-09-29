"use client"

import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Line, Pie } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

const Home = () => {
  const lineData = {
    labels: ["Yan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Bemorlar soni",
        data: [50, 75, 60, 90, 120, 100],
        borderColor: "#4f46e5",
        backgroundColor: "rgba(79,70,229,0.2)",
        tension: 0.4,
      },
    ],
  }



  const pieData = {
    labels: ["Erkak", "Ayol"],
    datasets: [
      {
        label: "Jins bo‘yicha taqsim",
        data: [55, 40],
        backgroundColor: ["#4f46e5", "#818cf8"],
      },
    ],
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Klinika Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Oylar bo‘yicha royxatdan o‘tgan bemorlar</CardTitle>
          </CardHeader>
          <CardContent>
            <Line data={lineData} />
          </CardContent>
        </Card>

     

        <Card>
          <CardHeader>
            <CardTitle>Jins bo‘yicha taqsim</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="w-48 h-48">
              <Pie data={pieData} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default React.memo(Home)
