import { useState } from "react"
import { Select, SelectOption } from "./Select"

const options = [
  { label: "Banana", value: 1 },
  { label: "Maça", value: 2 },
  { label: "Laranja", value: 3 },
  { label: "Melancia", value: 4 },
  { label: "Morango", value: 5 },
]

function App() {
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0])
  const [value1, setValue1] = useState<SelectOption[]>([options[0]])
  return (
    <>
      <Select multiple options={options} value={value1} onChange={(o) => setValue1(o)} />
      <br />
      <Select options={options} value={value2} onChange={(o) => setValue2(o)} />
    </>
  )
}

export default App
