import React, { InputHTMLAttributes } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import { Skeleton } from "../ui/skeleton";

type FormInputProps<T extends FieldValues> = {
  control: Control<T>;
  label: string;
  description?: string;
  placeholder: string;
  name: FieldPath<T>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
};

function FormInput<T extends FieldValues>(
  props: FormInputProps<T> & InputHTMLAttributes<HTMLInputElement>
) {
  const {
    control,
    label,
    description,
    placeholder,
    name,
    inputProps
  } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              {...(inputProps?.type === "number"
                ? {
                    ...inputProps,
                    onChange: (e) => {
                      field.onChange(+e.target.value);
                    },
                  }
                : { ...inputProps })}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormInput;
