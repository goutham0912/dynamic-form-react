const TextArea = (props) => {
    return (
      <div
        className={`${props.outerClass} flex flex-col gap-1 text-area-container`}
      >
        <label
          htmlFor={props.id}
          className={`text-sm text-black inter font-bold ${props.labelClass}`}
        >
          {props.label}
          {props.required && " * "}
        </label>
        <textarea
          id={props.id}
          required={props.required}
          className={`border border-[#d8d8d8] rounded-md px-3 py-1 focus:border-purple raleway  text-sm focus:outline-none ${props.class}`}
          placeholder={`${props.placeholder}`}
          rows={props.rows ? props.rows : 4}
        />
      </div>
    );
  };
  export default TextArea;