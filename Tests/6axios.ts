// ========================
`Just copy this down so you remember the syntax!`;

//G.T.C.F.
`💡 Get, Then, Catch, Finally`;

// 🚂 “Grandma Takes Cookies Forever” (G.T.C.F.)

// Grandma (G) always Takes (T) fresh cookies from the bakery.
// But sometimes, she Catches (C) the wrong order.
// No matter what, she Finally (F) enjoys her snack.

// ⸻

// How It Relates to Axios:
// 	•	Get → Grandma gets cookies from the bakery (axios.get() sends the request).
// 	•	Then → If the order is correct, she takes them home (.then(response) handles success).
// 	•	Catch → If there’s a mistake, she catches the wrong order and complains (.catch(error) handles failure).
// 	•	Finally → No matter what, she finally gets to enjoy a snack (.finally() runs cleanup).
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

//GTCF

axios.get<DataItem[]>("https://jsonplaceholder.typicode.com/posts")
.then((response)=> {setData(response.data)})
.catch((error)=>}{console.log(`error:`,error;)})
.finally(()=>{setLoading(false)})
// ========================================================================
