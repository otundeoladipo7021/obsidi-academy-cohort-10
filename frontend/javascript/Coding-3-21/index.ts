async function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Data fetched successfully!" });
    }, 4000);
  });
}

async function startTask() {
  try {
    console.log("Fetching data...");
    const data: any = await getData();
    console.log(data.message);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

startTask();
