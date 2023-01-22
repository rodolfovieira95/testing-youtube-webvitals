import styles from "./style.module.css";

export const Video = () => {
  return (
    <section className={styles.container}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/cCZKDiRUw7I"
        title="YouTube video player"
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowfullscreen
        loading="lazy"
      ></iframe>
    </section>
  );
};
