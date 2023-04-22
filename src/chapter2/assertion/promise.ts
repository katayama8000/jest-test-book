// Promise
const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('I did something'), 3000);
    //setTimeout(() => reject(new Error('I did something wrong')), 3000);
  });
};

const successCallback = () => {
  console.log('Success!');
};

const failureCallback = () => {
  console.log('Failure!');
};

doSomethingAsync().then(successCallback).catch(failureCallback);
