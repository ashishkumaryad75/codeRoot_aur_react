export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    // it is ok then return status code 200, 300..
    throw new Error("Failed to fetch the places...");
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
    
  const response = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({places}),
  })
  
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update user data .. ");
  }

  return responseData.messages;
}
  