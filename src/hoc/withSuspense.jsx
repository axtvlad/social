import React from 'react';

export const withSuspense = (Component) => {
    const loading = <div>Loading...</div>;

    return (props) => {
        return (
            <React.Suspense fallback={loading}>
                <Component {...props}/>
            </React.Suspense>
        )
    }
}
