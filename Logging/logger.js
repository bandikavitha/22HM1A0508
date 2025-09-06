export const logEvent = (type, message, data = {}) => {
  console.log = {
    timestamp: new Date().toISOString(),
    type,
    message,
    data
  };
  const logs = JSON.parse(localStorage.getItem('logs')) || [];
  logs.push(log);
  localStorage.setItem("logs", JSON.stringify(logs));
};