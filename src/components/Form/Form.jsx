import { useForm } from 'react-hook-form';
import styles from './Form.module.css'; 


const Form = ({title, onOrderPlaced}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    onOrderPlaced();
  };

  return (
    <div className={styles.formWrapper}>
     
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <h2 className={styles.title}>{title}</h2>
          <input
            type="text"
            placeholder="Name"
            {...register('name', { required: 'Name is required' })}
            className={styles.input}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
          <input
            type="tel"
            placeholder="Phone Number"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9+\-() ]+$/,
                message: 'Invalid phone number',
              },
            })}
            className={styles.input}
          />
          {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
          <input
            type="email"
            placeholder="Email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Invalid email address',
              },
            })}
            className={styles.input}
          />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          <button type="submit" className={styles.button}>Order</button>
        </form>
    </div>
  );
};

export default Form;
