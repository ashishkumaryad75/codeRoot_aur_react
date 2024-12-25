export async function fetchAvailablePlaces() {
    
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    // it is ok then return status code 200, 300..
    throw new Error("Failed to fetch the places...");
  }

  return resData.places;
}
