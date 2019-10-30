(function() {
    const msgContainer = document.getElementById('notifier');

    window.tellComponents = () => {
        const name = document.getElementById('yourName').value;
        const reactApp = document.getElementById('react-app');
        const angularApp = document.getElementById('ng-app');

        reactApp.setAttribute('name', name);
        reactApp.setAttribute('onHelloEvt', 'onHelloEvt');
        reactApp.addEventListener('onHelloEvt', (e) => helloEvent('React'));

        angularApp.setAttribute('name', name);
        angularApp.addEventListener('helloEvt', (e) => helloEvent('Angular'));

        logMessage(`The name ${name} has been passed to micro frontend apps`);
    };

    const helloEvent = (who) => {
        logMessage(`Hello from ${who} app`);
    };

    const logMessage = (msg) => {
        msgContainer.innerHTML = ` <h3 slot="title">The output</h3><p>${msg}</p>`;
    };
})();
