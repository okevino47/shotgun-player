import React, { ReactElement, cloneElement } from 'react';

const defaultIconProps = {
  className: 'size-6',
};

const IconButton = ({
  onClick,
  icon,
  srAlt,
  customClass = '',
}: {
  onClick: () => void;
  srAlt: string;
  icon: ReactElement;
  customClass?: string;
}) => {
  const iconWidthDefaultProps = cloneElement(icon, {
    ...defaultIconProps,
    ...icon.props,
  });

  return (
    <button
      type={'button'}
      onClick={onClick}
      className={`-m-2.5 p-2.5 ${customClass}`}
    >
      <span className={'sr-only'}>{srAlt}</span>
      {iconWidthDefaultProps}
    </button>
  );
};

export default IconButton;
