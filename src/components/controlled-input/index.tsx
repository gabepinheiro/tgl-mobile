import { Control, FieldError, useController } from "react-hook-form"
import { TextInputProps } from "react-native"
import { Input } from "./input"
import { Error } from "./styles"

type ControlledInputProps = {
  control: Control<any>
  name: string,
  error?: FieldError
} & TextInputProps

export const ControlledInput = ({
  name,
  control,
  error,
  ...props
}: ControlledInputProps) => {
  const { field } = useController({
    control,
    defaultValue: '',
    name
  })

  return (
    <>
      <Input
        value={field.value}
        onChangeText={field.onChange}
        {...props}
      />
      {!!error && <Error>{error.message}</Error>}
    </>
  )
}
