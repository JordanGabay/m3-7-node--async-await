// Exercise 3
// ----------

const doublesLater = (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2)
    }, 2000)
  });
};
  

// 2. handleSum function (async/await)

const handleSum = async (num) => {
  try {
    const times2 = await doublesLater(num);
    const times3 = await doublesLater(num);
    const times4 = await doublesLater(num);
    return times2 + times3 + times4
  } 
    catch (err) {
    console.log('Error: ', err);
  }
}

// 4. verification
handleSum(10).then((ans) => console.log(ans));
