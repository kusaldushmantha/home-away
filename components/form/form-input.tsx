import React from 'react'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type FormInputProps = {
    name: string,
    type: string,
    label?: string,
    defaultValue?: string,
    placeholder?: string
}

const FormInput = (props: FormInputProps) => {
  const { label, name, type, defaultValue, placeholder } = props
  return (
    <div>
      <Label htmlFor={name} className="capitalize mb-2">{label || name}</Label>
      <Input type={type} name={name} id={name} defaultValue={defaultValue} placeholder={placeholder}
        required className="input"/>
    </div>
  )
}

export default FormInput