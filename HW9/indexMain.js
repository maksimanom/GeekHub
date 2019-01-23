'use strict';
  function generateRandomNumber(){
    return Math.random()*(10-1)+1;
  }
  let limitNumber = setTimeout(generateRandomNumber, 1000);
  let pageNumber = setTimeout(generateRandomNumber, 2000);
  //PROMISE PROMISE PROMISE PROMISE PROMISE PROMISE PROMISE PROMISE PROMISE PROMISE PROMISE PROMISE PROMISE PROMISE
  function PromiseTest() {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}', true);
      xhr.onload = function () {
        if (this.status == 200) {
          resolve(this.response);
        } else {
          let error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      xhr.onerror = function () {
        reject(new Error("Network Error"));
      };
      xhr.send();
    });
  }
  //ASYNC ASYNC ASYNC ASYNC ASYNC ASYNC ASYNC ASYNC ASYNC ASYNC ASYNC ASYNC ASYNC ASYNC ASYNC ASYNC ASYNC ASYNC ASYNC
    async function AsyncTest() {

      // let promise = PromiseTest();

      let result = await PromiseTest(); // wait till the promise resolves (*)

      alert(result); // "done!"
    }

  //CALLBACK CALLBACK CALLBACK CALLBACK CALLBACK CALLBACK CALLBACK CALLBACK CALLBACK CALLBACK CALLBACK CALLBACK
  function testCallback(callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}', true);
    xhr.onload = function () {
      if (this.status == 200) {
        callback(this.response);
      } else {
        let error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };
    xhr.onerror = function () {
      reject(new Error("Network Error"));
    };
    xhr.send();
  }

  testCallback(function (response) {
    console.log(JSON.parse(response));
  })
