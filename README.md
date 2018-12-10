# Chai Function Execution Test

Based on this boilerplate:

https://github.com/gabel/karma-webpack-example

Checks if the function within the `expect` test is executed.

The only log statement which appears in the console is _">>> This is OK to execute"_. 

_">>> This should NOT be called!"_ is not logged, which shows that the function is not being executed in this test:

```
expect(myObject.doNotExecuteThisFunction).to.exist;
```


## Installation

```npm install```

## Run

```
npm run test
```
