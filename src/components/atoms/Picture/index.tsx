import { convertExtensionInPath } from 'utils';
import { BREAK_POINT } from 'styles';
import { SourceHTMLAttributes } from 'react';

type Resolution = 'x1' | 'x2' | 'x3';

type ImageSet = {
  [key in Resolution]: string;
};

type ImageFormat = 'png' | 'jpg' | 'jpeg' | 'gif' | 'webp';

interface SourceProp extends SourceHTMLAttributes<HTMLSourceElement> {
  set: ImageSet;
  format: ImageFormat;
  maxWidth?: string;
}

interface PictureProp extends SourceProp {
  setTablet?: ImageSet;
  minFormat?: ImageFormat;
  alt?: string;
}

export const Source = ({ format, set, maxWidth, ...rest }: SourceProp) => {
  const type = `set/${format}`;
  const srcSet = `${set.x1} 1x, ${set.x2} 2x, ${set.x3} 3x`;
  return maxWidth ? (
    <source type={type} srcSet={srcSet} media={`(max-width: ${maxWidth})`} {...rest} />
  ) : (
    <source type={type} srcSet={srcSet} {...rest} />
  );
};

const convertImageFormat = (set: ImageSet, before: ImageFormat, after: ImageFormat): ImageSet => {
  return Object.keys(set).reduce((acc, key) => {
    acc[key as keyof ImageSet] = convertExtensionInPath(set[key as keyof ImageSet], before, after);
    return acc;
  }, {} as ImageSet);
};

export const Picture = ({ format = 'png', minFormat, set, setTablet, alt }: PictureProp) => {
  const minSrc = minFormat && convertImageFormat(set, format, minFormat);
  const minSrcTablet = minFormat && setTablet && convertImageFormat(setTablet, format, minFormat);

  /* Source 순서 임의변경 금지 */
  return (
    <picture>
      {minSrcTablet && <Source format={minFormat} set={minSrcTablet} maxWidth={BREAK_POINT.TABLET_MD} />}
      {minSrc && <Source format={minFormat} set={minSrc} />}
      {setTablet && <Source format={format} set={setTablet} maxWidth={BREAK_POINT.TABLET_MD} />}
      <Source format={format} set={set} />
      <img src={set.x1} alt={alt} />
    </picture>
  );
};
