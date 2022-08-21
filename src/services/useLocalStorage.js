export const getStorageItem = key => {
  return localStorage.getItem(key);
};

export const initialStorage = () => {
  window.localStorage.setItem('history', JSON.stringify({}));
};
export const saveHistory = (id, message) => {
  /* В таску пише шо історія має вже бути то вважаєм шо вона завжди існує в стореджі*/
  let historyStorage = JSON.parse(getStorageItem('history'));

  /*Update messages array*/
  const userHistory =
    historyStorage[id] ||
    []; /* History example by id [{ message:'Hi', date: '', isMine:false },{ message; 'HI', date, isMine:true }, { message, date, isMine }]*/
  userHistory.push(message);

  /*Update storage history*/
  historyStorage[id] = [...userHistory];
  window.localStorage.setItem('history', JSON.stringify(historyStorage));
};

export const getUserHistory = id => {
  const history = JSON.parse(getStorageItem('history'))[id.toString()] || [];

  return history;
};

// export const getUserActivity = () => {
//     const parsedUsersFromStorage = JSON.parse(localStorage.getItem('users'));

// const getCurrentUser = [...parsedUsersFromStorage].find(
//   user => user.id === userId
// );
// const filtered = [...parsedUsersFromStorage].filter(user => user.id !== userId);
// filtered.unshift(getCurrentUser);

// window.localStorage.setItem('users', JSON.stringify(filtered));
// }
/*Users example */
// const users = [
//   {
//     id: '123-dasd-dasd',
//     name: 'Calaga',
//     avatar: '0xadsdwd21',
//     isOnline: false,
//   },
//   {
//     id: '345435-asdasd-123',
//     name: 'Bro',
//     avatar: '0xadsdwd21',
//     isOnline: false,
//   },
// ];

// /*History example */
// const history = {
//   '123-dasd-dasd': [
//     { message: 'Hi', date: '', isMine: false },
//     { message: 'Hi de', date: '', isMine: false },
//   ],
//   '345435-asdasd-123': [
//     { message: 'HHHH', date: '', isMine: false },
//     { message: 'Hi1', date: '', isMine: true },
//   ],
// };

// /*Usage example*/
// const someFunction = () => {
//   saveHistory('123-dasd-dasd', {
//     message: 'Hi dno',
//     date: new Date(),
//     isMine: true,
//   });
// };
