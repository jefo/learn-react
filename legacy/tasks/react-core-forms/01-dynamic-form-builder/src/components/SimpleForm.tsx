import { useForm } from 'react-hook-form';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

export function SimpleForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register('firstName', { required: 'Required' })} />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>
      
      <div>
        <input {...register('lastName', { required: 'Required' })} />
        {errors.lastName && <span>{errors.lastName.message}</span>}
      </div>
      
      <div>
        <input {...register('email', {
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email'
          }
        })} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
