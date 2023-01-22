import { Form } from "@components/Form";
import Image from "next/image";
import styles from "./style.module.css";

export const Banner = () => {
  return (
    <section className={styles.container}>
      <Form />
      <Image
        src="https://timsegurancadigital.com.br/static/media/4.246e6e4a.png"
        alt="happy person"
        width={400}
        height={500}
        className={styles.image}
      />
    </section>
  );
};
