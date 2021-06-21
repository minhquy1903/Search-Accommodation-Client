import React from 'react';

import './InputField.scss';

interface Props {
  field: any;
  form: any;
  type: string;
  label: string;
  placeholder: string;
  disabled: boolean;
  readonly: boolean;
  defaultValue: string;
}

const InputField: React.FC<Props> = ({
  field,
  form,
  type,
  label,
  placeholder,
  disabled,
  readonly,
  defaultValue,
}) => {
  const { name } = field;
  const { errors, touched } = form;
  const error = errors[name] && touched[name];

  return (
    <div className="form-group">
      <label htmlFor="inputPhoneLogin">{label}</label>
      <input
        {...field}
        id={name}
        required
        type={type}
        placeholder={placeholder}
        disabled={disabled}

        readOnly={readonly}
        defaultValue={defaultValue}
        className='form-input'

      />
      {error && <p className="error-message">{errors[name]}</p>}
    </div>
  );
};

export default InputField;
