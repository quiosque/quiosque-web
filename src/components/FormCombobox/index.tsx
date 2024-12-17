import React, { InputHTMLAttributes } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Control,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  Path,
} from "react-hook-form";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";

// TODO - Move types to a specific module
type Option = { label: string; value: string | number };

type FormComboboxProps<T extends FieldValues> = {
  control: Control<T>;
  label: string;
  description?: string;
  placeholder: string;
  name: FieldPath<T>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  options: Option[];
  onSelect?: (value: string | number) => void;
  emptyState?: string | React.ReactNode;
};

function FormCombobox<T extends FieldValues>(
  props: FormComboboxProps<T> & InputHTMLAttributes<HTMLInputElement>
) {
  const {
    control,
    label,
    description,
    placeholder,
    name,
    options,
    onSelect,
    emptyState,
  } = props;

  const handleSelect = (
    option: Option,
    field: ControllerRenderProps<T, Path<T> & (string | undefined)>
  ) => {
    return onSelect
      ? onSelect(option.value)
      : field.onChange(option.value);
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          {console.log('lol', control._formValues)}
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-full justify-between",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value
                    ? options.find((option) => option.value === field.value)
                        ?.label
                    : placeholder}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0" align="start">
              <Command>
                <CommandInput placeholder={placeholder} />
                <CommandList>
                  <CommandEmpty>{emptyState}</CommandEmpty>
                  <CommandGroup>
                    {options.map((option) => (
                      <CommandItem
                        value={option.label}
                        key={option.value}
                        onSelect={() => handleSelect(option, field)}
                      >
                        {option.label}
                        <Check
                          className={cn(
                            "ml-auto",
                            option.value === field.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormCombobox;
