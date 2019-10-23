# `sentry-unhandled-rejection-reproduction`

See https://github.com/getsentry/sentry-javascript/issues/1796#issuecomment-545387559

## Install

```sh
$ (cd sentry-node-4.4.2 && yarn install)
$ (cd sentry-node-5.7.1 && yarn install)
```

## `@sentry/node@4.4.2`

```sh
$ (cd sentry-node-4.4.2 && SENTRY_DSN=https://111@test.example.com/41 node .)
catch Error: test
    at asyncFn (/home/ewnd9/job/sentry-unhandled-rejection-reproduction/sentry-node-4.4.2/index.js:23:25)
    at /home/ewnd9/job/sentry-unhandled-rejection-reproduction/sentry-node-4.4.2/index.js:15:11
    at Object.<anonymous> (/home/ewnd9/job/sentry-unhandled-rejection-reproduction/sentry-node-4.4.2/index.js:20:3)
    at Module._compile (internal/modules/cjs/loader.js:776:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:787:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:829:12)
    at startup (internal/bootstrap/node.js:283:19)
unhandledRejection { Error: getaddrinfo ENOTFOUND test.example.com test.example.com:443
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:56:26)
  errno: 'ENOTFOUND',
  code: 'ENOTFOUND',
  syscall: 'getaddrinfo',
  hostname: 'test.example.com',
  host: 'test.example.com',
  port: 443 }
```

## `@sentry/node@5.7.1`

```sh
$ (cd sentry-node-5.7.1 && SENTRY_DSN=https://111@test.example.com/41 node .)
catch Error: test
    at asyncFn (/home/ewnd9/job/sentry-unhandled-rejection-reproduction/sentry-node-5.7.1/index.js:23:25)
    at /home/ewnd9/job/sentry-unhandled-rejection-reproduction/sentry-node-5.7.1/index.js:15:11
    at Object.<anonymous> (/home/ewnd9/job/sentry-unhandled-rejection-reproduction/sentry-node-5.7.1/index.js:20:3)
    at Module._compile (internal/modules/cjs/loader.js:776:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:787:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:829:12)
    at startup (internal/bootstrap/node.js:283:19)
```
