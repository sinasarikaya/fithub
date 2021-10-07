export const men_BMR = (weight, height, age) => {
    const calories = (
      88.362 +
      13.397 * weight +
      4.799 * height -
      5.677 * age
    ).toFixed();
    return calories;
  };
  
  export const women_BMR = (weight, height, age) => {
    const calories = (
      447.593 +
      9.247 * weight +
      3.098 * height -
      4.33 * age
    ).toFixed();
    return calories;
  };
  
  export const activityIndicator = (dailyCalories, activity) => {
    if (activity === "bmr") {
      return dailyCalories;
    }

    if (activity === "hic") {
      return (dailyCalories * 1.2).toFixed();
    }
    if (activity === "az") {
      return (dailyCalories * 1.375).toFixed();
    }
    if (activity === "orta") {
      return (dailyCalories * 1.550).toFixed();
    }
    if (activity === "cok") {
      return (dailyCalories * 1.725).toFixed();
    }
    if (activity === "ekstra") {
      return (dailyCalories * 1.9).toFixed();
    }
  };