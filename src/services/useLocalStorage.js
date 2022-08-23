import history from '../jsonData/userHistory.json';

const exampleHistory = history;
export const getStorageItem = key => {
  return JSON.parse(localStorage.getItem(key));
};

export const initialStorage = () => {
  window.localStorage.setItem('history', JSON.stringify(exampleHistory));
};

// console.log(initialStorage());
export const saveHistory = (id, message) => {
  let historyStorage = getStorageItem('history');

  /*Update messages array*/
  const userHistory = historyStorage[id] || [];
  userHistory.push(message);

  /*Update storage history*/
  historyStorage[id] = [...userHistory];
  window.localStorage.setItem('history', JSON.stringify(historyStorage));
};

export const getUserHistory = id => {
  const history = getStorageItem('history')[id.toString()] || [];

  return history;
};

export const getLastUserMessage = id => {
  const userMessages = getUserHistory(id);

  // const filterIsChack = userMessage.filter(user => !user.isMine);

  const lastItemOfArray =
    userMessages.length && userMessages[userMessages.length - 1];
  if (!lastItemOfArray) {
    return {};
  }

  const message = lastItemOfArray.message.slice(0, 40);
  const usrDate = lastItemOfArray.lastMsgDate;
  return { message, usrDate };
};
