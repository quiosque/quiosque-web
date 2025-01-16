import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type RadioGroupProps = {
  defaultValue: string;
  options: Array<{ label: string; value: string }>;
  onChange: (value: string) => void;
};

function RadioGroupComponent(props: RadioGroupProps) {
  const { defaultValue, options, onChange } = props;

  return (
    <RadioGroup defaultValue={defaultValue} aria-label="Recurrency">
      {options.map(({ label, value }, index) => (
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value={value}
            id={`r${index}`}
            onClick={() => onChange(value)}
          />
          <Label htmlFor={`r${index}`}>{label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}

export default RadioGroupComponent;
