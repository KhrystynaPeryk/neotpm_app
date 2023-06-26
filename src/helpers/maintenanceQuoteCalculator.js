export const maintenanceQuoteCalculator = (
    propertyType, 
    propertyLocation,
    roomsNumber,
    maidRoom,
    driverRoom,
    villaPackages
    ) => {

        const driverRoomPrice = 250;
        const maidRoomPrice = 250;
        const maidAndDriverPrice = 450;

        //---------- apartment ----------
        if (propertyType === 'apartment') {
            // Location: Abu Dhabi City / Al Reem
            const r_1_AbuDhabiCityReem = 2695.00;
            const r_2_AbuDhabiCityReem = 3245.00;
            const r_3_AbuDhabiCityReem = 3735.00;
            const r_4_AbuDhabiCityReem = 4235.00;

            // Location: Saadiyat / Yas islands
            const r_1_SaadiyatYas = 2695.00;
            const r_2_SaadiyatYas = 3245.00;
            const r_3_SaadiyatYas = 3735.00;
            const r_4_SaadiyatYas = 4235.00;

            // Location: Out of Abu Dhabi
            const r_1_outOfAbuDhabi = 3000.00;
            const r_2_outOfAbuDhabi = 3730.00;
            const r_3_outOfAbuDhabi = 4050.00;
            const r_4_outOfAbuDhabi = 4850.00;

            if (propertyLocation === 'AbuDhabiCityReem') {
                if (roomsNumber === '1BR') {
                    if (driverRoom === 'yes' && maidRoom === 'yes') {
                        return r_1_AbuDhabiCityReem + maidAndDriverPrice
                    } else if (maidRoom === 'yes') {
                        return r_1_AbuDhabiCityReem + maidRoomPrice
                    } else if (driverRoom === 'yes') {
                        return r_1_AbuDhabiCityReem + driverRoomPrice
                    } else {
                        return r_1_AbuDhabiCityReem
                    }
                } else if (roomsNumber === '2BR') {
                    if (driverRoom === 'yes' && maidRoom === 'yes') {
                        return r_2_AbuDhabiCityReem + maidAndDriverPrice
                    } else if (maidRoom === 'yes') {
                        return r_2_AbuDhabiCityReem + maidRoomPrice
                    } else if (driverRoom === 'yes') {
                        return r_2_AbuDhabiCityReem + driverRoomPrice
                    } else {
                        return r_2_AbuDhabiCityReem
                    }
                } else if (roomsNumber === 'BR') {
                    if (driverRoom === 'yes' && maidRoom === 'yes') {
                        return r_3_AbuDhabiCityReem + maidAndDriverPrice
                    } else if (maidRoom === 'yes') {
                        return r_3_AbuDhabiCityReem + maidRoomPrice
                    } else if (driverRoom === 'yes') {
                        return r_3_AbuDhabiCityReem + driverRoomPrice
                    } else {
                        return r_3_AbuDhabiCityReem
                    }
                } else if (roomsNumber === '4BR') {
                    if (driverRoom === 'yes' && maidRoom === 'yes') {
                        return r_4_AbuDhabiCityReem + maidAndDriverPrice
                    } else if (maidRoom === 'yes') {
                        return r_4_AbuDhabiCityReem + maidRoomPrice
                    } else if (driverRoom === 'yes') {
                        return r_4_AbuDhabiCityReem + driverRoomPrice
                    } else {
                        return r_4_AbuDhabiCityReem
                    }
                }
            } else if (propertyLocation === 'SaadiyatYas') {
                if (roomsNumber === '1BR') {
                    if (driverRoom === 'yes' && maidRoom === 'yes') {
                        return r_1_SaadiyatYas + maidAndDriverPrice
                    } else if (maidRoom === 'yes') {
                        return r_1_SaadiyatYas + maidRoomPrice
                    } else if (driverRoom === 'yes') {
                        return r_1_SaadiyatYas + driverRoomPrice
                    } else {
                        return r_1_SaadiyatYas
                    }
                } else if (roomsNumber === '2BR') {
                    if (driverRoom === 'yes' && maidRoom === 'yes') {
                        return r_2_SaadiyatYas + maidAndDriverPrice
                    } else if (maidRoom === 'yes') {
                        return r_2_SaadiyatYas + maidRoomPrice
                    } else if (driverRoom === 'yes') {
                        return r_2_SaadiyatYas + driverRoomPrice
                    } else {
                        return r_2_SaadiyatYas
                    }
                } else if (roomsNumber === '3BR') {
                    if (driverRoom === 'yes' && maidRoom === 'yes') {
                        return r_3_SaadiyatYas + maidAndDriverPrice
                    } else if (maidRoom === 'yes') {
                        return r_3_SaadiyatYas + maidRoomPrice
                    } else if (driverRoom === 'yes') {
                        return r_3_SaadiyatYas + driverRoomPrice
                    } else {
                        return r_3_SaadiyatYas
                    }
                } else if (roomsNumber === '4BR') {
                    if (driverRoom === 'yes' && maidRoom === 'yes') {
                        return r_4_SaadiyatYas + maidAndDriverPrice
                    } else if (maidRoom === 'yes') {
                        return r_4_SaadiyatYas + maidRoomPrice
                    } else if (driverRoom === 'yes') {
                        return r_4_SaadiyatYas + driverRoomPrice
                    } else {
                        return r_4_SaadiyatYas
                    }
                }
            } else if (propertyLocation === 'OutOfAbuDhabi') {
                if (roomsNumber === '1BR') {
                    if (driverRoom === 'yes' && maidRoom === 'yes') {
                        return r_1_outOfAbuDhabi + maidAndDriverPrice
                    } else if (maidRoom === 'yes') {
                        return r_1_outOfAbuDhabi + maidRoomPrice
                    } else if (driverRoom === 'yes') {
                        return r_1_outOfAbuDhabi + driverRoomPrice
                    } else {
                        return r_1_outOfAbuDhabi
                    }
                } else if (roomsNumber === '2BR') {
                    if (driverRoom === 'yes' && maidRoom === 'yes') {
                        return r_2_outOfAbuDhabi + maidAndDriverPrice
                    } else if (maidRoom === 'yes') {
                        return r_2_outOfAbuDhabi + maidRoomPrice
                    } else if (driverRoom === 'yes') {
                        return r_2_outOfAbuDhabi + driverRoomPrice
                    } else {
                        return r_2_outOfAbuDhabi
                    }
                } else if (roomsNumber === '3BR') {
                    if (driverRoom === 'yes' && maidRoom === 'yes') {
                        return r_3_outOfAbuDhabi + maidAndDriverPrice
                    } else if (maidRoom === 'yes') {
                        return r_3_outOfAbuDhabi + maidRoomPrice
                    } else if (driverRoom === 'yes') {
                        return r_3_outOfAbuDhabi + driverRoomPrice
                    } else {
                        return r_3_outOfAbuDhabi
                    }
                } else if (roomsNumber === '4BR') {
                    if (driverRoom === 'yes' && maidRoom === 'yes') {
                        return r_4_outOfAbuDhabi + maidAndDriverPrice
                    } else if (maidRoom === 'yes') {
                        return r_4_outOfAbuDhabi + maidRoomPrice
                    } else if (driverRoom === 'yes') {
                        return r_4_outOfAbuDhabi + driverRoomPrice
                    } else {
                        return r_4_outOfAbuDhabi
                    }
                }
            }
        } else if (propertyType === 'studio') {
            const studio_AbuDhabiCityReem = 2541.00;
            const studio_SaadiyatYas = 2541.00;
            const studio_outOfAbuDhabi = 2900.00;

            if (propertyLocation === 'AbuDhabiCityReem') {
                if (driverRoom === 'yes' && maidRoom === 'yes') {
                    return studio_AbuDhabiCityReem + maidAndDriverPrice
                } else if (maidRoom === 'yes') {
                    return studio_AbuDhabiCityReem + maidRoomPrice
                } else if (driverRoom === 'yes') {
                    return studio_AbuDhabiCityReem + driverRoomPrice
                } else {
                    return studio_AbuDhabiCityReem
                }
            } else if (propertyLocation === 'SaadiyatYas') {
                if (driverRoom === 'yes' && maidRoom === 'yes') {
                    return studio_SaadiyatYas + maidAndDriverPrice
                } else if (maidRoom === 'yes') {
                    return studio_SaadiyatYas + maidRoomPrice
                } else if (driverRoom === 'yes') {
                    return studio_SaadiyatYas + driverRoomPrice
                } else {
                    return studio_SaadiyatYas
                }
            } else if (propertyLocation === 'OutOfAbuDhabi') {
                if (driverRoom === 'yes' && maidRoom === 'yes') {
                    return studio_outOfAbuDhabi + maidAndDriverPrice
                } else if (maidRoom === 'yes') {
                    return studio_outOfAbuDhabi + maidRoomPrice
                } else if (driverRoom === 'yes') {
                    return studio_outOfAbuDhabi + driverRoomPrice
                } else {
                    return studio_outOfAbuDhabi
                }
            }
        } else if (propertyType === 'villa' || propertyType === 'townhouse') {
            const r_2_villa_AbuDhabiCityReem = 3245.00;
            const r_3_villa_AbuDhabiCityReem = 3735.00;
            const r_4_villa_AbuDhabiCityReem = 4235.00;
            const r_5_villa_AbuDhabiCityReem = 6981.00;
            const r_6_villa_AbuDhabiCityReem = 7250.00;

            const r_2_villa_OutOfAbuDhabi = 4150.00;
            const r_3_villa_OutOfAbuDhabi = 5049.00;
            const r_4_villa_OutOfAbuDhabi = 5849.00;
            const r_5_villa_OutOfAbuDhabi = 6649.00;
            const r_6_villa_OutOfAbuDhabi = 7450.00;

            const villaSaadiyatPackagePrices = {
                bronze: {
                    r_2: 4100.00,
                    r_3: 4950.00,
                    r_4: 5700.00,
                    r_5: 6450.00,
                    r_6: 7250.00,
                },
                gold: {
                    r_2: 5250.00,
                    r_3: 7500.00,
                    r_4: 8295.00,
                    r_5: 9083.00,
                    r_6: 9580.00,
                },
                platinum: {
                    r_2: 7430.00,
                    r_3: 9030.00,
                    r_4: 9818.00,
                    r_5: 10605.00,
                    r_6: 11350.00,
                },
            }

            if (propertyLocation === 'AbuDhabiCityReem') {
                if (roomsNumber === '2BR') {
                    return r_2_villa_AbuDhabiCityReem
                } else if (roomsNumber === '3BR') {
                    return r_3_villa_AbuDhabiCityReem
                } else if (roomsNumber === '4BR') {
                    return r_4_villa_AbuDhabiCityReem
                } else if (roomsNumber === '5BR') {
                    return r_5_villa_AbuDhabiCityReem
                } else if (roomsNumber === '6BR') {
                    return r_6_villa_AbuDhabiCityReem
                }
            } else if (propertyLocation === 'SaadiyatYas') {
                if (roomsNumber === '2BR') {
                    switch (villaPackages) {
                        case 'bronze':
                            return villaSaadiyatPackagePrices.bronze.r_2;
                            break;
                        case 'gold':
                            return villaSaadiyatPackagePrices.gold.r_2;
                            break;
                        case 'platinum':
                            return villaSaadiyatPackagePrices.platinum.r_2;
                            break;
                    }
                } else if (roomsNumber === '3BR') {
                    switch (villaPackages) {
                        case 'bronze':
                            return villaSaadiyatPackagePrices.bronze.r_3;
                            break;
                        case 'gold':
                            return villaSaadiyatPackagePrices.gold.r_3;
                            break;
                        case 'platinum':
                            return villaSaadiyatPackagePrices.platinum.r_3;
                            break; 
                    }
                } else if (roomsNumber === '4BR') {
                    switch (villaPackages) {
                        case 'bronze':
                            return villaSaadiyatPackagePrices.bronze.r_4;
                            break;
                        case 'gold':
                            return villaSaadiyatPackagePrices.gold.r_4;
                            break;
                        case 'platinum':
                            return villaSaadiyatPackagePrices.platinum.r_4;
                            break;
                    }
                } else if (roomsNumber === '5BR') {
                    switch (villaPackages) {
                        case 'bronze':
                            return villaSaadiyatPackagePrices.bronze.r_5;
                            break;
                        case 'gold':
                            return villaSaadiyatPackagePrices.gold.r_5;
                            break;
                        case 'platinum':
                            return villaSaadiyatPackagePrices.platinum.r_5;
                            break;
                    }
                } else if (roomsNumber === '6BR') {
                    switch (villaPackages) {
                        case 'bronze':
                            return villaSaadiyatPackagePrices.bronze.r_6;
                            break;
                        case 'gold':
                            return villaSaadiyatPackagePrices.gold.r_6;
                            break;
                        case 'platinum':
                            return villaSaadiyatPackagePrices.platinum.r_6;
                            break;
                    }
                }
            } else if (propertyLocation === 'OutOfAbuDhabi') {
                if (roomsNumber === '2BR') {
                    return r_2_villa_OutOfAbuDhabi
                } else if (roomsNumber === '3BR') {
                    return r_3_villa_OutOfAbuDhabi
                } else if (roomsNumber === '4BR') {
                    return r_4_villa_OutOfAbuDhabi
                } else if (roomsNumber === '5BR') {
                    return r_5_villa_OutOfAbuDhabi
                } else if (roomsNumber === '6BR') {
                    return r_6_villa_OutOfAbuDhabi
                }
            }
        }
}