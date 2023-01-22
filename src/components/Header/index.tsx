import Image from "next/image";
import { LinksMenu } from "@components/LinksMenu";
import { LoginButton } from "@components/LoginButton";
import styles from "./style.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src={
          "https://www.pngkey.com/png/full/141-1416946_logos-what-is-a-generic-logo-transparent-background.png"
        }
        alt="Logo"
        width={148}
        height={55}
      />
      <LinksMenu />
      <LoginButton />
    </header>
  );
};
