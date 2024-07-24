import React from 'react';

const PanelHeader = () => {
  return (
    <div className={'flex h-16 shrink-0 items-center'}>
      <img
        alt={'Shotgun'}
        src={
          'https://play-lh.googleusercontent.com/8q4cxv9SUUAm64ox4tT_XFx41X2o0sF9jItPJTuH0ShWN1Cu7V89vww5dUcer8dDUco'
        }
        className={'h-8 w-auto rounded-lg'}
      />
    </div>
  );
};

export default PanelHeader;
