interface ICourse {
  id: string;
  title: string;
  description: string;
}
export interface IGETCoursesResponse {
  data: ICourse[];
}
