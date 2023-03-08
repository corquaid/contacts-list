import { StyledInput } from "./styles";

interface InputProps {
  onChange: (value: string) => void;
  label: string;
}

export function Input(props: InputProps) {
  return (
    <StyledInput
      label={props.label}
      fullWidth
      margin="normal"
      onChange={e => props.onChange(e.target.value)}
      inputProps={{ "data-testid": "input-cmp" }}
    />
  );
}
