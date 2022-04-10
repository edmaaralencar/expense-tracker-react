import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { useAppContext } from '../../context/AppContext'

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#ff0000',
  '#ffe000'
]

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const Chart = () => {
  const { transactions } = useAppContext()

  const data = [
    {
      name: 'Compras',
      value: transactions
        .filter(transaction => transaction.category === 'Compras')
        .reduce((acc, transaction) => acc + transaction.amount, 0)
    },
    {
      name: 'Alimentação',
      value: transactions
        .filter(transaction => transaction.category === 'Alimentação')
        .reduce((acc, transaction) => acc + transaction.amount, 0)
    },
    {
      name: 'Salário',
      value: transactions
        .filter(transaction => transaction.category === 'Salário')
        .reduce((acc, transaction) => acc + transaction.amount, 0)
    },
    {
      name: 'Carro',
      value: transactions
        .filter(transaction => transaction.category === 'Carro')
        .reduce((acc, transaction) => acc + transaction.amount, 0)
    },
    {
      name: 'Lazer',
      value: transactions
        .filter(transaction => transaction.category === 'Lazer')
        .reduce((acc, transaction) => acc + transaction.amount, 0)
    },
    {
      name: 'Estudos',
      value: transactions
        .filter(transaction => transaction.category === 'Estudos')
        .reduce((acc, transaction) => acc + transaction.amount, 0)
    }
  ]

  return (
    <PieChart width={420} height={250}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  )
}

export default Chart
