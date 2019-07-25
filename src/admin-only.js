import React, {useCallback} from 'react';
import Viewer from './Viewer';
import './admin-only.css';

export default function adminOnly(WrappedComponent, hiddenInstead = false) {
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
