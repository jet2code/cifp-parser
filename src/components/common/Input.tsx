interface InputProps {
  className?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
  return (
    <input
      type="text"
      className={props.className}
      placeholder={props.placeholder}
      value={props.value.toUpperCase()}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  );
}
