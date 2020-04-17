import { useState, useEffect } from "react";
import { fetchProjects } from "../action/projects";
import data from "../data";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      fetchProjects(data);
    } catch (error) {
      console.warn(error);
    } finally {
      setLoading(false);
    }
  }, []);
  return loading;
};
