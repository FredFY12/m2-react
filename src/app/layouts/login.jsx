import React, { useEffect, useState } from 'react';
import TextFiled from '../components/textField';
import { validator } from '../utils/validator';

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setData((prevstate) => ({ ...prevstate, [target.name]: target.value }));
  };

  const validatorConfig = {
    email: {
      isRequired: { message: 'Электронная почта обязательна для заполнения' },
      isEmail: { message: 'Email введен не корректно' }
    },
    password: {
      isRequired: { message: 'Пароль обязателен для заполнения' },
      isCapitalSymbol: {
        message: 'Пароль должен содержать хотя бы одну заглавную букву'
      },
      isContainDigit: { message: 'Пароль должен содержать хотя бы одну цифру' },
      min: { message: 'Пароль должен состоять минимум из 8 символов', value: 8 }
    }
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    console.log(data);
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 p-4 shadow'>
          <h3 className='mb-4'>Login</h3>
          <form onSubmit={handleSubmit}>
            <TextFiled
              label='Электронная почта'
              name='email'
              value={data.email}
              onChange={handleChange}
              error={errors.email}
            />
            <TextFiled
              label='Пароль'
              type='password'
              name='password'
              value={data.password}
              onChange={handleChange}
              error={errors.password}
            />
            <button
              type='submit'
              disabled={!isValid}
              className='btn btn-primary w-100 mx-aouto'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
