function findMatching(drivers, name) {
    
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  function fuzzyMatch(drivers, searchString) {
    
    return drivers.filter(driver => driver.startsWith(searchString));
  }

  function matchName(drivers, name) {
   
    return drivers.filter(driver => driver.name === name);
  }
  