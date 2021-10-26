const doWorkCallback = (callback) => {
  const isError = Math.ceil(Math.random() * 10) % 2 == 0;
  setTimeout(() => {
    if (isError) {
      callback("this is my error", undefined);
    } else {
      callback(undefined, [1, 4, 7]);
    }
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }

  console.log(result);
});
