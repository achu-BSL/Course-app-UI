import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { IGETCoursesResponse } from "@/interfaces";

export const useCourses = () => {
  const { data, isLoading, error } = useSWR<IGETCoursesResponse>(
    "/api",
    fetcher
  );

  return {
    courses: data?.data,
    isLoading,
    error,
  };
};
