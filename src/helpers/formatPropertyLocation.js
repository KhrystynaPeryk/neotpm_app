export const formatPropertyLocation = (propertyLocation) => {
    if (propertyLocation === 'SaadiyatYas') {
        return 'on Saadiyat or Yas Island'
    } else if (propertyLocation === 'AbuDhabiCityReem') {
        return 'in Abu Dhabi City or Al Reem Island'
    } else if (propertyLocation === 'OutOfAbuDhabi') {
        return 'out of Abu Dhabi'
    }
}