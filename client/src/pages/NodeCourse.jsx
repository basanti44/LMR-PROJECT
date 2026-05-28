// NodeCourse.jsx

function NodeCourse() {

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-green-700 mb-8">
        Node.js Course
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-lg">

        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/BLl32FvcdVM"
          title="CodeWithHarry Node.js Course"
          allowFullScreen
          className="rounded-xl"
        ></iframe>

        <h2 className="text-3xl font-bold mt-8">
          Lesson 1 : Introduction to Node.js
        </h2>

        <p className="mt-4 text-gray-600">
          Learn backend development using Node.js, Express and APIs.
        </p>

      </div>

    </div>

  );
}

export default NodeCourse;