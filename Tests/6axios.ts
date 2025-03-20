// ========================
`Just copy this down so you remember the syntax!`;

//G.T.C.F.
`💡 Get, Then, Catch, Finally`;
// ========================

axios
  .get<DataItem[]>("https://jsonplaceholder.typicode.com/posts")
  // ✅ .get() sends an HTTP GET request to fetch data from the provided URL
  // ✅ <DataItem[]> is a TypeScript generic that specifies the expected response type (an array of DataItem objects)

  .then((response) => {
    // ✅ .then() runs if the request is successful
    // ✅ 'response' is an object containing the fetched data and metadata (status, headers, etc.)
    setData(response.data);
    // ✅ response.data holds the actual array of DataItem objects from the API
    // ✅ setData updates the React state with the fetched data
  })

  .catch((error) => {
    // ✅ .catch() runs if there’s an error in the request (e.g., network issues, server failure)
    console.error("Error fetching data:", error);
    // ✅ Logs the error message to the console for debugging
  })

  .finally(() => {
    // ✅ .finally() runs after the request completes, whether successful or failed
    setLoading(false);
    // ✅ Ensures 'loading' state is updated to false, indicating data fetching is done
  });
// ========================================================================
// 📝 YOUR ANSWER:

// ========================================================================
