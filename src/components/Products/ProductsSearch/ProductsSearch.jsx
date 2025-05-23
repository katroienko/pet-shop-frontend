import { memo } from "react";
import { useForm, Controller } from "react-hook-form";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import styles from "./ProductsSearch.module.css";

const ProductsSearch = ({ submitForm }) => {
  const {
    control,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      search: "",
      discount: false,
      priceFrom: "",
      priceTo: "",
      sort: "",
    },
  });

  const onSubmit = (values) => {
    const cleaned = Object.fromEntries(
      Object.entries(values).filter(([_, v]) => v !== "" && v !== false)
    );
    submitForm(cleaned);
    // reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Controller
        name="discount"
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} checked={field.value} />}
            label="With Discount"
          />
        )}
      />

      <Controller
        name="priceFrom"
        control={control}
        render={({ field }) => (
          <OutlinedInput
            type="number"
            {...field}
            placeholder="Price From"
            className={styles.inputField}
          />
        )}
      />

      <Controller
        name="priceTo"
        control={control}
        render={({ field }) => (
          <OutlinedInput
            type="number"
            {...field}
            placeholder="Price To"
            className={styles.inputField}
          />
        )}
      />

      <Controller
        name="sort"
        control={control}
        render={({ field }) => (
          <Select {...field} displayEmpty className={styles.inputField}>
            <MenuItem value="">Sort By...</MenuItem>
            <MenuItem value="newest">Newest</MenuItem>
            <MenuItem value="high-low">Price: High to Low</MenuItem>
            <MenuItem value="low-high">Price: Low to High</MenuItem>
          </Select>
        )}
      />

      <Button
        type="submit"
        variant="outlined"
        sx={{
          borderColor: '#ddd',
          color: '#000',
          '&:hover': {
            borderColor: '#bbb',
            backgroundColor: 'transparent',
          }
        }}
        className={styles.inputField}
      >
        Search
      </Button>
    </form>
  );
};

export default memo(ProductsSearch);



// import { useMemo, memo } from "react";
// import { useForm, Controller } from "react-hook-form";
// import Input from "@mui/material/Input";
// import Button from "@mui/material/Button";
// import Checkbox from "@mui/material/Checkbox";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import styles from "./ProductsSearch.module.css";

// const ProductsSearch = ({ submitForm }) => {
//   const {
//     control,
//     handleSubmit,
//     reset,
//   } = useForm({
//     defaultValues: {
//       search: "",
//       discount: false,
//       priceFrom: "",
//       priceTo: "",
//       sort: "",
//     },
//   });

//   const onSubmit = (values) => {
//     const cleaned = Object.fromEntries(
//       Object.entries(values).filter(([_, v]) => v !== "" && v !== false)
//     );
//     submitForm(cleaned);
//     reset();
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
//       <Controller
//         name="discount"
//         control={control}
//         render={({ field }) => (
//           <FormControlLabel
//             control={<Checkbox {...field} checked={field.value} />}
//             label="With Discount"
//           />
//         )}
//       />

//       <Controller
//         name="priceFrom"
//         control={control}
//         render={({ field }) => (
//           <Input
//             type="number"
//             {...field}
//             placeholder="Price From"
//             className={styles.inputField}
//           />
//         )}
//       />

//       <Controller
//         name="priceTo"
//         control={control}
//         render={({ field }) => (
//           <Input
//             type="number"
//             {...field}
//             placeholder="Price To"
//             className={styles.inputField}
//           />
//         )}
//       />

//       <Controller
//         name="sort"
//         control={control}
//         render={({ field }) => (
//           <Select {...field} displayEmpty className={styles.inputField}>
//             <MenuItem value="">Sort By...</MenuItem>
//             <MenuItem value="newest">Newest</MenuItem>
//             <MenuItem value="high-low">Price: High to Low</MenuItem>
//             <MenuItem value="low-high">Price: Low to High</MenuItem>
//           </Select>
//         )}
//       />
//       <Button
//         type="submit"
//         variant="outlined"
//         sx={{
//           borderColor: '#ddd',        
//           color: '#000',             
//           '&:hover': {
//             borderColor: '#bbb',      
//             backgroundColor: 'transparent', 
//           }
//         }}
//         className={styles.inputField}
//       >
//         Search
//       </Button>
//       </form>
    
//   );
// };

// export default memo(ProductsSearch);




