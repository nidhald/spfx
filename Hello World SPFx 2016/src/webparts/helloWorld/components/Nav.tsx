import * as React from 'react';

const chrome = (props:any) => (
    <div>
        <div>Here is where the top nav will be</div>
        <main>
            {props.children}
        </main>
    </div>
);

export default chrome;