const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isError = Math.ceil(Math.random() * 10) % 2 == 0;
    if (isError) {
      reject("things went wrong!");
    }
    resolve([7, 4, 1]);
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
