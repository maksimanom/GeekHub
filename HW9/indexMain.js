'use strict';
  function generateRandomNumber(){
    return Math.random()*(10-1)+1;
  }
  let limitNumber = setTimeout(generateRandomNumber, 1000);
  let pageNumber = setTimeout(generateRandomNumber, 2000);
  //PROMISE PROMISE PROMISE PROMISE PROMISE PROMISE PROMISE PROMISE PROMISE PROMISE PROMISE PROMISE PROMISE PROMISE
  function PromiseTest() {
    let Prom = new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}', true);
      xhr.onload = function () {
        if (this.status == 200) {
          resolve(this.response);
        } else {
          let error = new Error(this.statusText);
          error.code = this.status;
        }
      };
      xhr.send();
    });
    Prom.then((resolve) => {
      console.warn("Promise =>", JSON.parse(resolve));
    }).catch((reject) => {
      console.error("Sorry, you or we have some problem");
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
    myXMLHttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        callback(JSON.parse(this.responseText));
      }
    };
    myXMLHttp.open("GET", `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber1}&page=${pageNumber1}`);
    myXMLHttp.send();
  }
  testCallback(function (response) {
    console.log(response);
  });
