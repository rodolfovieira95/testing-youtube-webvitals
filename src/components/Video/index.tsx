import styles from "./style.module.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export const Video = () => {
  return (
    <section className={styles.container}>
      <div className={styles.video}>
        <LiteYouTubeEmbed id="cCZKDiRUw7I" title="O que é IoT?" />
      </div>
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/cCZKDiRUw7I"
        title="YouTube video player"
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowfullscreen
        loading="lazy"
      ></iframe> */}
    </section>
  );
};
