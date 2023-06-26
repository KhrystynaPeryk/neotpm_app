export function formatNumber(number) {
    // Convert the number to a string
    let numStr = String(number);
  
    // Split the string into the integer and decimal parts
    let parts = numStr.split('.');
  
    // Format the integer part with commas
    let integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    // Format the decimal part with two decimal places
    let decimalPart = parts[1] ? parts[1].padEnd(2, '0') : '00';
  
    // Combine the formatted parts
    let formattedNumber = `${integerPart}.${decimalPart}`;
  
    return formattedNumber;
}