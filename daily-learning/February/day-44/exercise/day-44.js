// Write an async function that fetches data from http://jsonplaceholder.typicode.com/post/1 and uses try...catch to handle errors and logs the post title if successful

async function fetchPost() {
  try {
    const response = await fetch("http://jsonplaceholder.typicode.com/post/1");
    
    if (!response.ok) {
      throw new Error(`HTTP Error detected! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Post Title:`, data.title);
  } catch (error) {
    console.log(`Error fetching data:`, error.message);
  }
}

fetchPost();