import clsx from "clsx";

function Input(props) {
  const { label, id, error, register, name, type } = props;

  return (
    <div className="mb-4">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        className={clsx(`form-control ${error ? "is-invalid" : ""}`)}
        {...(register
          ? register(name, {
              valueAsNumber: type === "number" ? true : false,
            })
          : {})}
        {...props}
      />
      {error && (
        <label className="label">
          <span className="invalid-feedback">{error}</span>
        </label>
      )}
    </div>
  );
}

function TextArea(props) {
  const { label, id, error, register, name } = props;

  return (
    <div className="mb-4">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <textarea
        className={clsx(`form-control ${error ? "is-invalid" : ""}`)}
        {...(register ? register(name) : {})}
        {...props}
      />
      {error && (
        <label className="label">
          <span className="invalid-feedback">{error}</span>
        </label>
      )}
    </div>
  );
}

export { Input, TextArea };
