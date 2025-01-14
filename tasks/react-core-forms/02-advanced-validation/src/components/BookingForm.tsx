import { useForm, useFieldArray } from 'react-hook-form';

interface Guest {
  name: string;
  age: number;
  document?: string;
}

interface BookingForm {
  checkIn: string;
  checkOut: string;
  guests: Guest[];
  roomType: 'standard' | 'family' | 'suite';
  breakfast: boolean;
  specialRequests?: string;
}

export function BookingForm() {
  const { register, handleSubmit, watch, formState: { errors } } = 
    useForm<BookingForm>({
      defaultValues: {
        guests: [{ name: '', age: 0 }]
      }
    });

  const { fields, append, remove } = useFieldArray({
    name: 'guests',
    control: control
  });

  // Простая валидация без оптимизации
  const validateDates = (checkIn: string, checkOut: string) => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    return end > start;
  };

  // Нет кэширования результатов
  const validateGuests = (guests: Guest[]) => {
    return guests.every(guest => guest.name && guest.age > 0);
  };

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <div>
        <label>Check-in Date</label>
        <input
          type="date"
          {...register('checkIn', {
            required: 'Required'
          })}
        />
        {errors.checkIn && <span>{errors.checkIn.message}</span>}
      </div>

      <div>
        <label>Check-out Date</label>
        <input
          type="date"
          {...register('checkOut', {
            required: 'Required',
            validate: value => {
              const checkIn = watch('checkIn');
              return validateDates(checkIn, value) || 'Invalid dates';
            }
          })}
        />
        {errors.checkOut && <span>{errors.checkOut.message}</span>}
      </div>

      <div>
        <label>Room Type</label>
        <select {...register('roomType', { required: 'Required' })}>
          <option value="standard">Standard</option>
          <option value="family">Family</option>
          <option value="suite">Suite</option>
        </select>
        {errors.roomType && <span>{errors.roomType.message}</span>}
      </div>

      <div>
        <label>Guests</label>
        {fields.map((field, index) => (
          <div key={field.id} className="guest-row">
            <input
              {...register(`guests.${index}.name` as const)}
              placeholder="Guest Name"
            />
            <input
              type="number"
              {...register(`guests.${index}.age` as const)}
              placeholder="Age"
            />
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => append({ name: '', age: 0 })}>
          Add Guest
        </button>
      </div>

      <div>
        <label>
          <input type="checkbox" {...register('breakfast')} />
          Include Breakfast
        </label>
      </div>

      <div>
        <label>Special Requests</label>
        <textarea {...register('specialRequests')} />
      </div>

      <button type="submit">Book Now</button>
    </form>
  );
}
