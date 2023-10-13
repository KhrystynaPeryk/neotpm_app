export const countMonthsAgo = (isoDateString) => {
    const currentDate = new Date();
    const creationDate = new Date(isoDateString);
  
    const monthsAgo = (currentDate.getFullYear() - creationDate.getFullYear()) * 12 +
      (currentDate.getMonth() - creationDate.getMonth());
  
    if (monthsAgo === 0) {
      return "This month";
    } else if (monthsAgo === 1) {
      return "1 month ago";
    } else if (monthsAgo > 1) {
      return monthsAgo + " months ago";
    } else {
      // If the date is in the future, handle it accordingly
      return "";
    }
}
