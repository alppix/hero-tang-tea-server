console.log('Hello World!');

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
  module.hot.dispose((): void => console.log('Module disposed. '));
}
