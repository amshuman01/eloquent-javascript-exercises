function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    // Your code here.
    let results_promise = [];
    const promise_length = promises.length;
    // console.log(promise_length);
    let pending_promises = [promise_length];
    for (let i = 0; i < promise_length; i++) {
      promises[i]
        .then((res) => {
          results_promise[i] = res;
          pending_promises--;
          if (pending_promises <= 0) resolve(results_promise);
        })
        .catch(reject);
    }
    if (promise_length === 0) resolve(results_promise);
  });
}

// Test code.
Promise_all([]).then((array) => {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
Promise_all([soon(1), soon(2), soon(3)]).then((array) => {
  console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)])
  .then((array) => {
    console.log("We should not get here");
  })
  .catch((error) => {
    if (error != "X") {
      console.log("Unexpected failure:", error);
    }
  });
