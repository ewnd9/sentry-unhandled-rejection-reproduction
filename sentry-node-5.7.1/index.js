const Sentry = require('@sentry/node');

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

process.on('unhandledRejection', err => {
  console.log('unhandledRejection', err);
  Sentry.captureException(err);
  process.exit(1);
});

(async () => {
  try {
    await asyncFn();
  } catch (err) {
    console.log('catch', err);
    Sentry.captureException(err);
  }
})();

async function asyncFn() {
  return Promise.reject(new Error('test'));
}
