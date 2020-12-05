import React from 'react';

export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    const loading = <div>Loading...</div>;

    return (props: WCP) => {
        return (
            <React.Suspense fallback={loading}>
                <WrappedComponent {...props}/>
            </React.Suspense>
        )
    }
}
