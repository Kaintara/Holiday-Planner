const SavedData = sessionStorage.getItem("UserInput")
if (SavedData) {
  const userData = JSON.parse(SavedData);
  console.log(userData);
}