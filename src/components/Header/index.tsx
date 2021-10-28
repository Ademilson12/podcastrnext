import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import styles from "./styles.module.scss";

/* eslint-disable @next/next/no-img-element */
export default function Headers() {
  const currentDate = format(new Date(), "EEEEEE, d MMM", {
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>
      <img src="/podcastr-logo.svg" alt="Podcastr" />

      <p>O melhor para você ouvir, sempre! </p>

      <span>{currentDate}</span>
    </header>
  );
}
