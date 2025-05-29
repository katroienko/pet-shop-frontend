
import { useForm } from "react-hook-form";
import { BtnBanner } from "../BtnBanner/BtnBanner";

import styles from "./ElementDiscountForm.module.css";

export const ElementDiscountForm = ({ onOrderPlaced }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    if (onOrderPlaced) onOrderPlaced();
    alert('Thank you! Your discount has been sent to your email.')
  };

  return (
    <div className={styles["element-discount-form"]}>
      <p className={styles["text-wrapper"]}>5% off on the first order</p>

      <div className={styles.content}>
        <img
          className={styles.image}
          alt="dogsForm"
          src='/dogsform.png'
        />

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputs}>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className={styles["btn-card"]}
            />
            {errors.name && (
              <p className={styles.div} style={{ color: "red" }}>
                {errors.name.message}
              </p>
            )}

            <input
              type="tel"
              placeholder="Phone number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9+\-() ]+$/,
                  message: "Invalid phone number",
                },
              })}
              className={styles["btn-card"]}
            />
            {errors.phone && (
              <p className={styles.div} style={{ color: "red" }}>
                {errors.phone.message}
              </p>
            )}

            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email address",
                },
              })}
              className={styles["btn-card"]}
            />
            {errors.email && (
              <p className={styles.div} style={{ color: "red" }}>
                {errors.email.message}
              </p>
            )}
          </div>

          <BtnBanner
            className={styles["btn-banner-instance"]}
            property="normal"
            type="submit"
            text="Get a discount"
          />
        </form>
      </div>
    </div>
  );
};

// import { BtnBanner } from "../BtnBanner/BtnBanner";

// import styles from "./ElementDiscountForm.module.css";

// export const ElementDiscountForm = () => {
//   return (
//     <div className={styles["element-discount-form"]}>
//       <p className={styles["text-wrapper"]}>5% off on the first order</p>

//       <div className={styles.content}>
//         <img
//           className={styles.image}
//           alt="Image"
//           src="https://c.animaapp.com/matmpppmv4vIJH/img/image.svg"
//         />

//         <div className={styles.form}>
//           <div className={styles.inputs}>
//             <div className={styles["btn-card"]}>
//               <div className={styles.div}>Name</div>
//             </div>

//             <div className={styles["btn-card"]}>
//               <div className={styles.div}>Phone number</div>
//             </div>

//             <div className={styles["btn-card"]}>
//               <div className={styles.div}>Email</div>
//             </div>
//           </div>

//           <BtnBanner
//             className={styles["btn-banner-instance"]}
//             property="normal"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
