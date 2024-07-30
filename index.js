// Function to find matching drivers
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to find drivers whose names begin with the provided letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  // Function to find drivers by name in an array of driver objects
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  // Example data to test the functions
  const driversArray = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
  const driverObjects = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Sarah', hometown: 'Chicago' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
  ];
  
  // Testing the functions
  console.log(findMatching(driversArray, 'bobby')); // Should return ['Bobby', 'Bobby']
  console.log(fuzzyMatch(driversArray, 'Sa')); // Should return ['Sammy', 'Sally', 'Sarah']
  console.log(matchName(driverObjects, 'Bobby')); // Should return [{ name: 'Bobby', hometown: 'Pittsburgh' }, { name: 'Bobby', hometown: 'Tampa Bay' }]
  