const myPromise = new Promise((resolve, reject) => {
  let marks = 78;
  if (marks > 33) {
    resolve("pass");
  } else {
    reject("fail");
  }
});
myPromise
  .then((msg) => console.log(msg))
  .catch((error) => console.log("Some error occured", error));
