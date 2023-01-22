import { useForm } from "react-hook-form";
import styles from "./style.module.css";

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {/* register your input into the hook by invoking the "register" function */}
      <div className={styles.fieldContainer}>
        <label htmlFor="test">Field 1</label>
        <input
          defaultValue="test"
          {...register("example")}
          className={styles.input}
        />
      </div>

      {/* include validation with required or other standard HTML validation rules */}
      <div className={styles.fieldContainer}>
        <label htmlFor="test">Field 2</label>
        <input
          {...register("exampleRequired", { required: true })}
          className={styles.input}
        />
      </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" value="Send" />
    </form>
  );
};
