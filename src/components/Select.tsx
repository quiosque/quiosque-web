import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectProps {
  placeholder: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  required?: boolean;
}

function SelectComponent(props: SelectProps) {
  const { placeholder, options, onChange, required } = props;

  return (
    <Select onValueChange={onChange} required={required}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectComponent;
