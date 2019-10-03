import React from 'react';
import { FormattedMessage } from 'react-intl'


export default function Home() {
    return (
        <div>
            <h1>
                <FormattedMessage id="home.greeting" defaultMessage="Hello World!"/>
            </h1>
        </div>
    )
}
