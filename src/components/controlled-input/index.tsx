import { Control, useController } from "react-hook-form"
import { TextInputProps } from "react-native"
import { Input } from "./input"

type ControlledInputProps = {
  control: Control<any>
  name: string
} & TextInputProps

export const ControlledInput = ({
  name,
  control,
  ...props
}: ControlledInputProps) => {
  const { field } = useController({
    control,
    defaultValue: '',
    name
  })

  return (
    <Input
      value={field.value}
      onChangeText={field.onChange}
      {...props}
    />
  )
}
