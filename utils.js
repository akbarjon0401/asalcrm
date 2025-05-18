// utils.js
export function showNotification(message) {
  const notifications = document.getElementById('notifications');
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerText = message;
  notifications.appendChild(notification);
  setTimeout(() => notification.remove(), 5000);
}