/** @jsx jsx */
import { jsx } from 'theme-ui';
import mapIconTypes from './mapIconTypes';

export const FileIcon = ({ type, ...restProps }: { type: string }) => {
  const resultType = mapIconTypes(type);
  const Icon = resultType.type;

  return <Icon title={resultType.title} {...restProps} />;
};
