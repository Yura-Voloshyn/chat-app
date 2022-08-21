export const getStorageItem = key => {
  return localStorage.getItem(key);
};

/**
 * Saves user history by id
 * @param id user id
 * @param message
 */
export const saveHistory = (
  id,
  message = { message: '', date: '', isMine: Boolean }
) => {
  /* В таску пише шо історія має вже бути то вважаєм шо вона завжди існує в стореджі*/
  let historyStorage = JSON.parse(getStorageItem('history'));

  /*Update messages array*/
  const userHistory =
    historyStorage[id] ||
    []; /* History example by id [{ message:'Hi', date: '', isMine:false },{ message; 'HI', date, isMine:true }, { message, date, isMine }]*/
  userHistory.push(message);

  /*Update storage history*/
  historyStorage[id] = [...userHistory];
  localStorage.setItem('history', historyStorage);
};

/*Users example */
const users = [
  {
    id: '123-dasd-dasd',
    name: 'Calaga',
    avatar: '0xadsdwd21',
    isOnline: false,
  },
  {
    id: '345435-asdasd-123',
    name: 'Bro',
    avatar: '0xadsdwd21',
    isOnline: false,
  },
];

/*History example */
const history = {
  '123-dasd-dasd': [
    { message: 'Hi', date: '', isMine: false },
    { message: 'Hi de', date: '', isMine: false },
  ],
  '345435-asdasd-123': [
    { message: 'HHHH', date: '', isMine: false },
    { message: 'Hi1', date: '', isMine: true },
  ],
};

/*Usage example*/
const someFunction = () => {
  saveHistory('123-dasd-dasd', {
    message: 'Hi dno',
    date: new Date(),
    isMine: true,
  });
};
