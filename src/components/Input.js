const Input = (props) => {
  return (
    <div
      className={
        ["checkbox", "radio"].includes(props.type)
          ? `${props.outerClass} flex gap-1 items-center input-outer-container`
          : `${props.outerClass} flex flex-col gap-1 input-outer-container`
      }
    >
      <div className={`${props.labelClass} flex items-center justify-between`}>
        <label
          htmlFor={props.id}
          className={`text-sm text-black inter font-bold ${props.color}`}
        >
          {props.label}
          {props.required && " * "}
        </label>
        <p className="text-xs text-red-500 raleway">{props.errorMessage}</p>
      </div>
      <input
        id={props.id}
        required={props.required}
        className={`border border-[#d8d8d8] rounded-md px-3 py-1 focus:border-purple raleway  text-sm focus:outline-none ${props.inputClass}`}
        placeholder={`${props.placeholder}`}
        type={`${props.type}`}
        minLength={props.minLength}
      />
    </div>
  );
};

export default Input;