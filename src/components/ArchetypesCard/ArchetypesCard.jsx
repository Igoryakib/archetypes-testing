import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ArchetypesCard.module.scss";
import Arrow from "../../images/icons/upArrow.svg";

export default function ArchetypesCard({
  motivationText,
  fearText,
  strongSideText,
  weakSideText,
  strategyText,
  headline,
  openHeadline,
  image,
  firstParagraph,
  secondParagraph,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article
      className={`${styles.card} ${
        (isOpen || !openHeadline) && styles.card_open
      } ${!openHeadline&&styles.card_notClosable}`}
    >
      {openHeadline && (
        <div className={styles.captionWrapper}>
          <h2 className={styles.caption}>{openHeadline}</h2>
          <button className={styles.button} type="button" onClick={() => setIsOpen(!isOpen)}>
            <img src={Arrow} alt="arrow" className={styles.arrow} />
          </button>
        </div>
      )}
      <div className={styles.cardWrapper}>
        <div className={styles.contentWrapper}>
          <img className={styles.image} src={image} alt="ruler" />
          <div className={styles.textWrapper}>
            <h2 className={styles.caption}>{headline}</h2>
            <p className={styles.characteristic}>
              <span>Мотивация:</span> {motivationText}
            </p>
            <p className={styles.characteristic}>
              <span>Страх:</span> {fearText}
            </p>
            <p className={styles.characteristic}>
              <span>Cильные стороны:</span> {strongSideText}
            </p>
            <p className={styles.characteristic}>
              <span>Слабые стороны:</span> {weakSideText}
            </p>
            <p className={styles.characteristic}>
              <span>Стратегия:</span> {strategyText}
            </p>
          </div>
        </div>
        <div className={styles.paragraphWrapper}>
          <p className={styles.text}>{firstParagraph}</p>
          <p className={styles.text}>{secondParagraph}</p>
        </div>
      </div>
    </article>
  );
}

ArchetypesCard.propTypes = {
  motivationText: PropTypes.string.isRequired,
  fearText: PropTypes.string.isRequired,
  strongSideText: PropTypes.string.isRequired,
  weakSideText: PropTypes.string.isRequired,
  strategyText: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  openHeadline: PropTypes.string,
  image: PropTypes.string.isRequired,
  firstParagraph: PropTypes.string.isRequired,
  secondParagraph: PropTypes.string.isRequired,
};

//------------------------- Example ----------------------------------------

//  <ArchetypesCard
//    motivationText="бути успішним"
//    fearText="бути успішним"
//    strongSideText="бути успішним"
//    weakSideText="бути успішним"
//    strategyText="управлять другими, через авторитет и достигать результата"
//    headline="Правитель"
//    openHeadline="Второй Архетип"
//    image={Ruler}
//    firstParagraph="Правитель - это яркий лидер и тот, кто ведет за собой. Такие люди часто независимы,
//             уверенны в себе и любят брать ответственность. Прирожденный лидер и управленец.
//             Правители любят все, что связано со статусом, достижениями и результатами, не
//             стесняются показать себя во всей красе."
//    secondParagraph="В стрессе правитель становится авторитарным и даже в какой-то мере тираничным.
//             Утрачивает способность слышать других и зацикливается на собственной правоте. Может
//             быть жесток в суждениях и действиях, импульсивен и категоричен. Правители склонны
//             делить людей на своих и чужих, чувствуют превосходство на теми, кто слабее и постоянно
//             конкурирует с равными себе, но не всегда честно."
//  />;