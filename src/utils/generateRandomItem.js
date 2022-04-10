const generateRandomSavingItem = savings => {
  return savings[Math.floor(Math.random() * savings.length)]
}

export default generateRandomSavingItem