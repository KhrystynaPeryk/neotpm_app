export const maintenanceQuoteCalculator = (
    propertyType, 
    propertyLocation,
    roomsNumber,
    maidRoom,
    driverRoom,
    villaPackages
    ) => {

    const studioQuotes = {
      AbuDhabiCityReem: 2541.00,
      SaadiyatYas: 2541.00,
        OutOfAbuDhabi: 2900.00
      };
        
    const apartmentQuotes = {
      AbuDhabiCityReem: {
        br1: 2695.00,
        br2: 3245.00,
        br3: 3735.00,
        br4: 4235.00
      },
      SaadiyatYas: {
        br1: 2695.00,
        br2: 3245.00,
        br3: 3735.00,
        br4: 4235.00
      },
      OutOfAbuDhabi: {
        br1: 3000.00,
        br2: 3730.00,
        br3: 4050.00,
        br4: 4850.00
      }
    };
        
    const villaTownhouseQuotes = {
      AlReefVillas: {
        br2: 3549.00,
        br3: 4599.00,
        br4: 6049.00,
        br5: 6649.00,
        br6: 7495.00,
        br7: 8389.00
      },
      BloomGardens: {
        br2: 3595.00,
        br3: 4619.00,
        br4: 9499.00,
        br5: 10649.00,
        br6: 11235.00,
        br7: 12499.00
      },
      AlMuneera: {
        br2: 5085.00,
        br3: 5689.00,
        br4: 6184.00,
        br5: 6899.00,
        br6: 7920.00,
        br7: 8189.00
      },
      HydraVillage: {
        br2: 3549.00,
        br3: 4100.00,
        br4: 4750.00,
        br5: 5049.00
      }
    };
        
    const villaPackagesQuotes = {
      SaadiyatBeachVillas: {
        platinum: {
          br2: 7430.00,
          br3: 9030.00,
          br4: 9818.00,
          br5: 10605.00,
          br6: 11360.00,
          br7: 13220.00
        },
        gold: {
          br2: 6280.00,
          br3: 7500.00,
          br4: 8295.00,
          br5: 9083.00,
          br6: 10129.00,
          br7: 12189.00
        },
        bronze: {
          br2: 5085.00,
          br3: 5749.00,
          br4: 6579.00,
          br5: 8056.00,
          br6: 9459.00,
          br7: 10286.00
        }
      },
      HiddAlSaadiyat: {
        platinum: {
          br2: 8499.00,
          br3: 9849.00,
          br4: 10102.00,
          br5: 10814.00,
          br6: 11531.00,
          br7: 13899.00
        },
        gold: {
          br2: 6569.00,
          br3: 7804.00,
          br4: 8579.00,
          br5: 9399.00,
          br6: 10488.00,
          br7: 12795.00
        },
        bronze: {
          br2: 5085.00,
          br3: 5869.00,
          br4: 6899.00,
          br5: 8295.00,
          br6: 9869.00,
          br7: 10864.00
        }
      }
    };

    let maintenanceQuote = 0;

    if (propertyType === 'studio') {
      maintenanceQuote = studioQuotes[propertyLocation] || 0;
    } else if (propertyType === 'apartment') {
      maintenanceQuote = apartmentQuotes[propertyLocation]?.[roomsNumber] || 0;
    } else if (propertyType === 'villa' || propertyType === 'townhouse') {
      if (propertyLocation === 'SaadiyatBeachVillas' || propertyLocation === 'HiddAlSaadiyat') {
        maintenanceQuote = villaPackagesQuotes[propertyLocation]?.[villaPackages]?.[roomsNumber] || 0;
      } else {
        maintenanceQuote = villaTownhouseQuotes[propertyLocation]?.[roomsNumber] || 0;
      }
    }

    if (maidRoom === 'yes' || driverRoom === 'yes') {
      maintenanceQuote += 250;
    }
        
    if (maidRoom === 'yes' && driverRoom === 'yes') {
      maintenanceQuote += 200; // 450 - 250 = 200
    }
    return maintenanceQuote;
  }