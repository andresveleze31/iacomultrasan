import { PieChartComponent } from '@/components/PieChart'
import { SalesChart } from '@/components/SalesChart'
import { SalesFull } from '@/components/SalesFull'
import { TypesChart } from '@/components/TypesChart'
import { Card } from '@/components/ui/card'
import { BarChart, LoaderCircle, TrendingUp } from 'lucide-react'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-4  gap-5">
        <Card className="bg-white py-5 px-8 flex items-center gap-5">
          <BarChart className="w-[40px] h-[40px] text-primary" />
          <div>
            <p className="text-gray-500">Ingresos</p>
            <p className="text-xl font-semibold">$126,000</p>
          </div>
        </Card>

        <Card className="bg-white py-5 px-8 flex items-center gap-5">
          <TrendingUp className="w-[40px] h-[40px] text-primary " />
          <div>
            <p className="text-gray-500">Eventos</p>
            <p className="text-xl font-semibold">109,000</p>
          </div>
        </Card>

        <Card className="bg-white py-5 px-8 flex items-center gap-5">
          <LoaderCircle className="w-[40px] h-[40px] text-primary " />
          <div>
            <p className="text-gray-500">Este año</p>
            <p className="text-xl font-semibold">56% </p>
          </div>
        </Card>
        <div className="row-start-1 row-end-3 col-start-4 col-end-5">
          <PieChartComponent />
        </div>
        <div className="col-span-2">
          <SalesFull />
        </div>
        <div className="col-span-1 row-span-1 col-start-3">
          <SalesChart />
        </div>
        <div className="col-start-4 row-start-3">
          <TypesChart />
        </div>
        
        
      </div>
    </div>
  )
}

export default Dashboard
