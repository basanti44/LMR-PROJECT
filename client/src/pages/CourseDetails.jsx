import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function CourseDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [course, setCourse] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    if (!id) {
      setError("Course ID not found");
      setLoading(false);
      return;
    }

    axios
      .get(`http://localhost:5000/api/courses/${id}`)
      .then((res) => {

        if (res.data) {
          setCourse(res.data);
        } else {
          setError("Course not found");
        }

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to load course");
        setLoading(false);
      });

  }, [id]);

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <h1 className="text-3xl font-bold text-blue-600">
          Loading...
        </h1>
      </div>
    );
  }

  // Error
  if (error || !course) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-3xl font-bold text-red-500 mb-5">
          {error}
        </h1>

        <button
          onClick={() => navigate("/courses")}
          className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      {/* Back Button */}
      <button
        onClick={() => navigate("/courses")}
        className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded-lg mb-6"
      >
        ← Back
      </button>

      {/* Course Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          {course.title}
        </h1>

        {/* Video */}
        {course.videoLink ? (
          <iframe
            width="100%"
            height="450"
            src={course.videoLink}
            title={course.title}
            allowFullScreen
            className="rounded-xl mb-6"
          ></iframe>
        ) : (
          <p className="text-gray-500 mb-6">
            No video available
          </p>
        )}

        {/* Description */}
        <p className="text-lg text-gray-700 mb-4">
          {course.description}
        </p>

        {/* Details */}
        <div className="space-y-2">

          <p className="text-lg">
            📺 Videos: {course.videos ?? 0}
          </p>

          <p className="text-lg">
            ⏰ Hours: {course.hours ?? 0}
          </p>

          <p className="text-lg">
            📈 Progress: {course.progress ?? 0}%
          </p>

        </div>

      </div>

    </div>
  );
}

export default CourseDetails;