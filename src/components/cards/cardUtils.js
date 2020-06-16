import commonStyle from './commonCardStyles.module.scss';

const getPadding = (padding) => {
  let properPadding;
  switch (padding) {
    case 'smallTopPadding':
      properPadding = commonStyle.smallTopPadding;
      break;
    case 'smallTopMedBottomPadding':
      properPadding = commonStyle.smallTopMedBottomPadding;
      break;

    case 'medTopSmallBottomPadding':
      properPadding = commonStyle.medTopSmallBottomPadding;
      break;
    case 'smallTopSmallBottomPadding':
      properPadding = commonStyle.smallTopSmallBottomPadding;
      break;

    case 'fullPadding':
      properPadding = commonStyle.fullPadding;
      break;
    case 'fullPaddingTop':
      properPadding = commonStyle.fullPaddingTop;
      break;

    default:
      properPadding = commonStyle.noPadding;
  }
  return properPadding;
};

const isCentered = (centered) => {
  return centered ? commonStyle.contentCentered : null;
};

export { getPadding, isCentered };
