import * as React from 'react';

const ExampleComponent = ({ name = 'Piotr', onHelloEvt }) => {
    return (
        <div className="exampleComponent">
            <img src="/images/react.png" alt="React Logo" className="logo" />
            <p>
                Hello <strong>{name}</strong> from your friendly React
                component.
            </p>
            <button
                type="submit"
                className="btn btn-secondary"
                onClick={onHelloEvt}
            >
                Say hello
            </button>
        </div>
    );
};

export { ExampleComponent };
