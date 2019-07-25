import React, {useCallback} from 'react';
import Viewer from './Viewer';
import './disable-all.css';

export default function disableAll(WrappedComponent, hiddenInstead = false) {
  return WrapperComponent;

  function WrapperComponent(props) {
    if (hiddenInstead && !Viewer.isAdmin) {
      return null;
    }

    return (
      <div className={Viewer.isAdmin ? '' : 'disabled'}>
        <WrappedComponent {...props} />
      </div>
    );
  }
}
