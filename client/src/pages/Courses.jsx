import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    
    axios.get("https://lmr-backend-aeja.onrender.com/api/courses")
      .then((res) => {
        if (res?.data) {
          if (Array.isArray(res.data)) {
            setCourses(res.data);
          } else if (Array.isArray(res.data.courses)) {
            setCourses(res.data.courses);
          } else {
            setCourses([]);
          }
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);

        setError(
          "Failed to fetch courses. Please check backend connection."
        );

        setCourses([]);
        setLoading(false);
      });
  }, []);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-blue-50 flex flex-col justify-center items-center p-10">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4"></div>

        <p className="text-2xl font-semibold text-blue-700">
          Loading your courses...
        </p>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-blue-50 flex flex-col justify-center items-center p-10 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md">
          <p className="text-red-500 text-6xl mb-4">
            ⚠️
          </p>

          <p className="text-2xl font-bold text-gray-800 mb-2">
            {error}
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-10">
          My Courses
        </h1>

        {/* Empty State */}
        {courses.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
            <p className="text-2xl text-gray-500">
              No courses available.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {courses?.map((course) => {

              const isNode =
                course?.title &&
                course.title.toLowerCase().includes("node");

              const titleColor = isNode
                ? "text-green-600"
                : "text-blue-600";

              const progressColor = isNode
                ? "bg-green-500"
                : "bg-blue-500";

              const buttonColor = isNode
                ? "bg-green-500 hover:bg-green-700"
                : "bg-blue-500 hover:bg-blue-700";

              return (
                <div
                  key={course?._id}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >

                  {/* Title */}
                  <h2
                    className={`text-3xl font-bold mb-4 ${titleColor}`}
                  >
                    {course?.title || "Untitled Course"}
                  </h2>

                  {/* Progress */}
                  <p className="text-lg mb-3">
                    Progress: {course?.progress ?? 0}%
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-300 rounded-full h-5 mb-6">
                    <div
                      className={`h-5 rounded-full ${progressColor}`}
                      style={{
                        width: `${course?.progress ?? 0}%`,
                      }}
                    ></div>
                  </div>

                  {/* Video */}
                  {course?.videoLink && (
                    <div className="mb-5 rounded-xl overflow-hidden">
                      <iframe
                        width="100%"
                        height="220"
                        src={course.videoLink}
                        title={course?.title}
                        allowFullScreen
                        className="border-0 w-full"
                      ></iframe>
                    </div>
                  )}

                  {/* Details */}
                  <div className="space-y-2 mb-5">
                    <p>📺 Videos: {course?.videos ?? 0}</p>

                    <p>⏰ Hours: {course?.hours ?? 0}</p>

                    <p>
                      📘{" "}
                      {course?.description ||
                        "No description available"}
                    </p>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() =>
                      navigate(`/course/${course?._id}`)
                    }
                    className={`w-full text-white px-6 py-3 rounded-xl text-lg ${buttonColor}`}
                  >
                    Continue Learning
                  </button>
                </div>
              );
            })}

          </div>
        )}
      </div>
    </div>
  );
}

export default Courses;