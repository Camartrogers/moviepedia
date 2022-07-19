//cb9c2a64fab4983afd5a4d6d47b157cd
// https://api.themoviedb.org/3/movie/550?api_key=cb9c2a64fab4983afd5a4d6d47b157cd

export const API_URL =
  "https://api.themoviedb.org/3/movie/550?api_key=cb9c2a64fab4983afd5a4d6d47b157cd";
export const API_KEY = "cb9c2a64fab4983afd5a4d6d47b157cd";
export const appStorageName = "moviepedia-favs";

// format release date
export const formatDate = (dateString) => {
  let arrayDate = dateString.split("-");
  //set month
  if (arrayDate[1] === "01") {
    arrayDate[1] = "Jan";
  }
  if (arrayDate[1] === "02") {
    arrayDate[1] = "Feb";
  }
  if (arrayDate[1] === "03") {
    arrayDate[1] = "Mar";
  }
  if (arrayDate[1] === "04") {
    arrayDate[1] = "Apr";
  }
  if (arrayDate[1] === "05") {
    arrayDate[1] = "May";
  }
  if (arrayDate[1] === "06") {
    arrayDate[1] = "Jun";
  }
  if (arrayDate[1] === "07") {
    arrayDate[1] = "Jul";
  }
  if (arrayDate[1] === "08") {
    arrayDate[1] = "Aug";
  }
  if (arrayDate[1] === "09") {
    arrayDate[1] = "Sep";
  }
  if (arrayDate[1] === "10") {
    arrayDate[1] = "Oct";
  }
  if (arrayDate[1] === "11") {
    arrayDate[1] = "Nov";
  }
  if (arrayDate[1] === "12") {
    arrayDate[1] = "Dec";
  }
  //Remove leading 0 from day
  if (arrayDate[2] < 10) {
    arrayDate[2] = arrayDate[2].substring(1, 2);
  }
  let newDateString = arrayDate[1] + " " + arrayDate[2] + ", " + arrayDate[0];
  return newDateString;
};
