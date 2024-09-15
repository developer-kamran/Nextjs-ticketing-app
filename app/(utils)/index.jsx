export const formatTimestamp = (timestamp) => {
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minutes: '2-digit',
    hour12: true,
  };
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString('en-US', options);
  return formattedDate;
};
export const getPriorityColor = (priority) => {
  switch (priority) {
    case 1:
      return 'accent';
    case 2:
      return 'accent';
    case 3:
      return 'primary';
    case 4:
      return 'primary';
    case 5:
      return 'secondary';
    default:
      return 'primary';
  }
};
export const getStatusColor = (status) => {
  switch (status) {
    case 'not started':
      return 'primary';
    case 'started':
      return 'secondary';
    case 'done':
      return 'accent';

    default:
      return 'primary';
  }
};
