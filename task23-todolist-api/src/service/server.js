export let getDataFromAPI = async (link) =>{
    try {
        const response = await fetch(link);
        const jsonData = await response.json();
        return jsonData
      } catch (error) {
        console.log('Error fetching data:', error);
      }
}
export const addToApi = async (newData) => {
  try {
    const response = await fetch('https://61498bf2035b3600175ba32f.mockapi.io/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });

    if (response.ok) {
      // Creation successful
      console.log('Item created successfully!');
      // Perform any necessary actions after successful creation
    } else {
      // Handle non-successful response (e.g., server error)
      console.log('Error creating item:', response.status);
    }
  } catch (error) {
    // Handle network or other errors
    console.log('Error creating item:', error);
  }
};

export const deleteTodoFromApi = async (id) => {
  try {
    const response = await fetch(`https://61498bf2035b3600175ba32f.mockapi.io/todo/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log('Item deleted successfully!');
    } else {
      console.log('Error deleting item:', response.status);
    }
  } catch (error) {
    console.log('Error deleting item:', error);
  }
};

export const updateTodoInApi = async (id, updatedData) => {
  try {
    const response = await fetch(`https://61498bf2035b3600175ba32f.mockapi.io/todo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (response.ok) {
      console.log('Item updated successfully!');
    } else {
      console.log('Error updating item:', response.status);
    }
  } catch (error) {
    console.log('Error updating item:', error);
  }
};