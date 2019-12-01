import React from 'react';
import LoaderComponent from 'react-loader-spinner';
import stylesLoader from './Loader.module.css';

const Loader = () => {
  return (
    <div className={stylesLoader.loader}>
      <LoaderComponent
        type="Bars"
        color="red"
        height={150}
        width={150}
        timeout={3000}
      />
    </div>
  );
};

export default Loader;
