interface Props {
  label: string;
  placeholder: string;
}

const TextField = ({ label, placeholder }: Props) => {
  return (
    <div className="form-group form-floating pb-3">
      <input
        type="text"
        className="form-control"
        id={label}
        aria-describedby={label}
        placeholder={placeholder}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default TextField;
