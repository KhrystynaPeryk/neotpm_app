export const formatPropertyLocation = (propertyLocation) => {
    if (propertyLocation === 'SaadiyatYas') {
        return 'Saadiyat / Yas Island / Al Raha / Al Reef'
    } else if (propertyLocation === 'AbuDhabiCityReem') {
        return 'in Abu Dhabi City or Al Reem Island'
    } else if (propertyLocation === 'OutOfAbuDhabi') {
        return 'out of Abu Dhabi'
    } else if (propertyLocation === 'SaadiyatBeachVillas') {
        return 'in Saadiyat Beach Villas'
    } else if (propertyLocation === 'HiddAlSaadiyat') {
        return 'in Hidd Al Saadiyat / Yas Acres'
    } else if (propertyLocation === 'AlMuneera') {
        return 'in Al Muneera'
    } else if (propertyLocation === 'BloomGardens') {
        return 'in Bloom Gardens'
    } else if (propertyLocation === 'AlReefVillas') {
        return 'in Al Reef Villas'
    } else if (propertyLocation === 'YasIslandAlRaha') {
        return 'in Al Raha / Yas Island'
    } else if (propertyLocation === 'HydraVillage') {
        return 'in Hydra Village'
    } 
}