// Enter two promises and consume them afterwards
const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`User profile loaded`);
    }, 2000);
  });
  
  const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const thereIsError = true; 
      if (thereIsError) {
        reject(`Second Promise rejected`);
      } else {
        resolve(`Second Promise resolved`);
      }
    }, 3000);
  });
  
  Promise.all([firstPromise, secondPromise])
    .then((values) => {
      console.log("All promises resolved:", values);
    })
    .catch((error) => {
      console.error(`Operation failed:`, error);
    });
  