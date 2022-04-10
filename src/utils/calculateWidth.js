const calculateProgressBarWidth = (currentMoney, value) => {
  const percentage = (currentMoney / value) * 100
  return (percentage * 17.5) / 100
}

export default calculateProgressBarWidth