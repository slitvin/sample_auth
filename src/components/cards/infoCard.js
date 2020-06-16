import React from 'react';
import cardStyle from './infoCard.module.scss';
import commonStyle from './commonCardStyles.module.scss';
import { getPadding, isCentered } from './cardUtils';
import PropTypes from 'prop-types';

const InfoCard = (props) => {
  const thisCallBackClick = () => {
    console.log('thisCallBackClick');
    console.log('props');
    console.log(props);
    props.buttonCallBack();
  };
  const getHeadline = () => {
    return props.headline !== undefined ? (
      <h1 className={`${cardStyle.headline} ${isCentered(props.centered)}`}>{props.headline}</h1>
    ) : null;
  };

  const getSubheading = () => {
    return props.subHeading !== undefined ? (
      <div className={`${cardStyle.subHeading} ${isCentered(props.centered)}`}>
        {props.subHeading}
      </div>
    ) : null;
  };
  const getHeadline2 = () => {
    return props.headline2 !== undefined ? (
      <h2 className={`${cardStyle.headline2} ${isCentered(props.centered)}`}>{props.headline2}</h2>
    ) : null;
  };
  const getCTA = () => {
    return props.cta !== undefined ? (
      <button
        onClick={thisCallBackClick}
        className={`${isCentered(props.centered)} ${cardStyle.cta} `}
      >
        {props.cta}
      </button>
    ) : null;
  };
  const getParagraphs = () => {
    const cardParagraphs = [];
    if (props.paragraphs !== undefined) {
      for (let i = 0; i < props.paragraphs.length; i++) {
        cardParagraphs.push(
          <p className={`${cardStyle.paragraph} ${isCentered(props.centered)}`} key={i}>
            {props.paragraphs[i]}
          </p>
        );
      }
      return cardParagraphs;
    } else {
      return null;
    }
  };

  return (
    <div
      className={`${cardStyle.wrapper} ${getPadding(props.padding)} ${commonStyle[props.bgColor]}`}
    >
      <div className={cardStyle.contentWrapper}>
        {getHeadline()}
        {getHeadline2()}
        {getSubheading()}
        {getParagraphs()}
        {getCTA()}
      </div>
    </div>
  );
};

export default InfoCard;

InfoCard.propTypes = {
  headline: PropTypes.string,
  centered: PropTypes.bool,
  subHeading: PropTypes.string,
  headline2: PropTypes.string,
  cta: PropTypes.string,
  paragraphs: PropTypes.array,
  padding: PropTypes.string,
  bgColor: PropTypes.string,
  buttonCallBack: PropTypes.func
};
