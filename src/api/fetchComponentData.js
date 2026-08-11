// For Fetching Course data
export const fetchComponentData = async (DynamicRoute) => {
  try {
    const response = await fetch("/data/courses-details.json");
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    return data.courseDetails[DynamicRoute] || {};
  } catch (error) {
    console.error('Error fetching component data:', error);
    return {};
  }
}

//for fetching placed student data
export const fetchPlacedStudentData = async () => {
  const response = await fetch("/data/students.json");
  const data = await response.json();
  return data.placedStudentsData;
}

//fetching full course data
export const fetchFullCourseData = async (CourseName) => {
  const response = await fetch("/data/full-courses-data.json");
  const data = await response.json();
  return data.fullCourseData[CourseName];
}

// fetching about course
// fetching 'whatIs' points by course name
export const GetCourseAbout = async (courseName) => {
  try {
    const response = await fetch("/data/courses-details.json");
    if (!response.ok) throw new Error("Failed to fetch course details");
    const data = await response.json();

    const courseDetails = data.courseDetails;

    for (const key in courseDetails) {
      const course = courseDetails[key];
      if (course?.name?.toLowerCase() === courseName.toLowerCase()) {
        const points = course.whatIs?.points;
        return Array.isArray(points) ? points : [];
      }
    }

    // Not found
    return [];

  } catch (error) {
    console.error("Error fetching course about data:", error);
    return [];
  }
};

// fetch current job openings
export const fetchCurrentJobOpenings = async () => {
  const response = await fetch("/data/current-job-openings.json");
  const data = await response.json();
  return data.currentOpenings;
}
