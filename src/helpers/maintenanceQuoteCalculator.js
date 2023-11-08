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
      // the same prices for Yas Island / Al Raha / Al Reef as below
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
        
    const villaQuotes = {
      AlReefVillas: {
        br2: 3549.00,
        br3: 4599.00,
        br4: 6049.00,
        br5: 6649.00,
        br6: 7495.00
      },
      AlMuneera: {
        br2: 5690.00,
        br3: 6475.00,
        br4: 7899.00,
        br5: 8459.00,
        br6: 9860.00
      },
      HydraVillage: {
        br2: 3549.00,
        br3: 4100.00,
        br4: 4750.00,
        br5: 5049.00
      },
      OutOfAbuDhabi: {
        br2: 4150.00,
        br3: 5049.00,
        br4: 5849.00,
        br5: 6649.00,
        br6: 7450.00
      }
    };
        
    const villaPackagesQuotes = {
      SaadiyatBeachVillas: {
        platinum: {
          br2: 7430.00,
          br3: 8690.00,
          br4: 9818.00,
          br5: 10485.00,
          br6: 11650.00
        },
        gold: {
          br2: 6280.00,
          br3: 7500.00,
          br4: 8295.00,
          br5: 9083.00,
          br6: 10647.00
        },
        bronze: {
          br2: 5085.00,
          br3: 6749.00,
          br4: 7580.00,
          br5: 8295.00,
          br6: 9550.00
        }
      },
      // prices for Yas Acres are the same as below
      HiddAlSaadiyat: {
        platinum: {
          br3: 9134.00,
          br4: 11300.00,
          br5: 13531.00,
          br6: 14253.00
        },
        gold: {
          br3: 7611.00,
          br4: 10795.00,
          br5: 11291.00,
          br6: 13730.00
        },
        bronze: {
          br3: 6049.00,
          br4: 8479.00,
          br5: 9649.00,
          br6: 10449.00
        }
      },
      YasIslandAlRaha: {
        gold: {
          br2: 5250.00,
          br3: 7500.00,
          br4: 8295.00,
          br5: 9083.00,
          br6: 9580.00
        },
        bronze: {
          br2: 4150.00,
          br3: 4750.00,
          br4: 5600.00,
          br5: 6350.00,
          br6: 7150.00
        }
      },
      BloomGardens: {
        platinum: {
          br2: 8379.00,
          br3: 9459.00,
          br4: 10800.00,
          br5: 11699.00,
          br6: 12789.00
        },
        gold: {
          br2: 7850.00,
          br3: 8540.00,
          br4: 9695.00,
          br5: 10487.00,
          br6: 12000.00
        }
      }
    }

    const townhouseQuotes = {
      AlReefVillas: {
        br3: 3735.00,
        br4: 4235.00,
        br5: 6981.45,
        br6: 7250.00
      },
      HydraVillage: {
        br2: 3549.00,
        br3: 4100.00,
        br4: 4750.00,
        br5: 5049.00
      },
      OutOfAbuDhabi: {
        br3: 5049.00,
        br4: 5849.00,
        br5: 6649.00,
        br6: 7450.00
      }
    }

    const townhousePackagesQuotes = {
      SaadiyatBeachVillas: {
        platinum: {
          br3: 9030.00,
          br4: 9818.00,
          br5: 10605.00,
          br6: 11350.00
        },
        gold: {
          br3: 7500.00,
          br4: 8295.00,
          br5: 9083.00,
          br6: 9580.00
        },
        bronze: {
          br3: 4950.00,
          br4: 5700.00,
          br5: 6450.00,
          br6: 7250.00
        }
      },
      HiddAlSaadiyat: {
        platinum: {
          br3: 9134.00,
          br4: 9974.00,
          br5: 10814.00,
          br6: 11850.00
        },
        gold: {
          br3: 7611.00,
          br4: 8451.00,
          br5: 9291.00,
          br6: 9980.00
        },
        bronze: {
          br3: 5049.00,
          br4: 5849.00,
          br5: 6649.00,
          br6: 7450.00
        }
      },
      YasIslandAlRaha: {
        gold: {
          br3: 7500.00,
          br4: 8295.00,
          br5: 9083.00,
          br6: 9580.00
        },
        bronze: {
          br3: 4750.00,
          br4: 5600.00,
          br5: 6350.00,
          br6: 7150.00
        }
      }
    }

    let maintenanceQuote = 0;

    if (propertyType === 'studio') {
      maintenanceQuote = studioQuotes[propertyLocation] || 0;
    } else if (propertyType === 'apartment') {
      maintenanceQuote = apartmentQuotes[propertyLocation]?.[roomsNumber] || 0;
    } else if (propertyType === 'villa') {
      if (propertyLocation === 'SaadiyatBeachVillas' || propertyLocation === 'HiddAlSaadiyat' || propertyLocation === 'YasIslandAlRaha' || propertyLocation === 'BloomGardens' ) {
        maintenanceQuote = villaPackagesQuotes[propertyLocation]?.[villaPackages]?.[roomsNumber] || 0;
      } else {
        maintenanceQuote = villaQuotes[propertyLocation]?.[roomsNumber] || 0;
      }
    } else if (propertyType === 'townhouse') {
      if (propertyLocation === 'SaadiyatBeachVillas' || propertyLocation === 'HiddAlSaadiyat' || propertyLocation === 'YasIslandAlRaha' ) {
        maintenanceQuote = townhousePackagesQuotes[propertyLocation]?.[villaPackages]?.[roomsNumber] || 0;
      } else {
        maintenanceQuote = townhouseQuotes[propertyLocation]?.[roomsNumber] || 0;
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