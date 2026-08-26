import React, { useEffect, useState } from "react";
import axios from "axios";

interface toDoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchToDoItem = async (): Promise<toDoItem | string | undefined> => {
  try {
    const res = await axios.post<toDoItem>(
      "https://jsonplaceholder.typicode.com/todos/6",
    );
    const fetchedTask = res.data.title;
    console.log(fetchedTask);
    return fetchedTask;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(`API Error: ${err.message}`);
    } else {
      console.error("An unexpected error occurred while fetching the task.");
    }
  }
};

type Props = {};

const Profile = (props: Props) => {
  const [task, setTask] = useState("");
  useEffect(() => {
    const newTask: any = fetchToDoItem();
    setTask(newTask);
  }, []);
  return <div>{task}</div>;
};

export default Profile;
