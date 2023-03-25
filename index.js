const drivers = ["Antonia", "Nuru", "Amari", "Mo"]

const returnFirstTwoDrivers = ( drivers ) => {
// return [ drivers [ 0 ], drivers [ 1 ] 
// return drivers.slice( 0, 2 )

    let firstTwoDrivers = []
    for ( let n = 0; n < 2; n ++ ) {
    // firstTwodrivers.push(drivers[n] )
    firstTwoDrivers = [...firstTwoDrivers, drivers[n] ]
}
return firstTwoDrivers
// return [...drivers].splice( 0, 2) 
}

const returnLastTwoDrivers = drivers => drivers.slice( -2 ) 
    
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers] 

const createFareMultiplier = integer => {
    return ( fare ) => fare * integer 
}

const fareDoubler = fare => createFareMultiplier( 2 )( fare )

const fareTripler = fare => createFareMultiplier( 3 )( fare )

const selectDifferentDrivers = ( drivers, someFunction ) => someFunction( drivers )