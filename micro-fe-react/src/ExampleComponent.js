import * as React from 'react';
import PropTypes from 'prop-types';

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

ExampleComponent.propTypes = {
    name: PropTypes.string,
    onHelloEvt: PropTypes.func,
};

export { ExampleComponent };
