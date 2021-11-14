import React from "react"

interface Props {
  children: number | string
  isOperator?: boolean
  setInput: React.Dispatch<React.SetStateAction<string>>
}

const Button = (props: Props) => {
  const numKeyColor = "bg-gray-300 dark:bg-gray-700"

  const operatorColor = "bg-purple-300 dark:bg-purple-400 text-gray-900"

  function btnPress() {
    if (typeof props.children === "number") {
      props.setInput((prev) => prev + `${props.children}`)
    } else {
      switch (props.children) {
        case "AC":
          props.setInput("")
          break
        case "DEL":
          props.setInput((prev) => prev.slice(0, -1))
          break
        case "=":
          props.setInput((prev) => Function("return(" + prev + ")")())
          break
        default:
          props.setInput((prev) => `${prev} ${props.children} `)
          break
      }
    }
  }

  return (
    <button
      className={`${
        props.isOperator ? operatorColor : numKeyColor
      } h-20 w-20 rounded-full text-4xl`}
      onClick={btnPress}
    >
      {props.children}
    </button>
  )
}

export default Button
