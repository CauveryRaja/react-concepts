import React from 'react';

// Simple case
function userHOC(WrappedComponent) {
    return () => <WrappedComponent name='kumar'></WrappedComponent>
}

export default userHOC;