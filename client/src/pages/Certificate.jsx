import jsPDF from "jspdf";

function Certificate() {

  // Auto User Name
  const userName = localStorage.getItem("username") || "Basanti Kumari";

  // PDF Download Function
  const downloadCertificate = () => {

    const doc = new jsPDF("landscape");

    // Background
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, 300, 210, "F");

    // Border
    doc.setDrawColor(59, 130, 246);
    doc.setLineWidth(2);
    doc.roundedRect(20, 20, 255, 160, 4, 4);

    // Title
    doc.setFontSize(28);
    doc.setTextColor(37, 99, 235);
    doc.text("Certificate of Completion", 78, 55);

    // Subtitle
    doc.setFontSize(14);
    doc.setTextColor(100);
    doc.text(
      "This certificate is proudly presented to",
      95,
      80
    );

    // User Name Auto
    doc.setFontSize(24);
    doc.setTextColor(16, 185, 129);
    doc.text(userName, 110, 105);

    // Course
    doc.setFontSize(14);
    doc.setTextColor(100);
    doc.text(
      "For Successfully Completing",
      103,
      125
    );

    doc.setFontSize(20);
    doc.setTextColor(37, 99, 235);
    doc.text("MERN Stack Course", 105, 145);

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(180);
    doc.text("LMS Learning Platform", 115, 170);

    // PDF Save
    doc.save("Certificate.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">

      <div className="bg-white border-4 border-blue-400 rounded-xl shadow-2xl p-16 w-full max-w-4xl text-center">

        <h1 className="text-5xl font-bold text-blue-600">
          Certificate of Completion
        </h1>

        <p className="mt-8 text-gray-500 text-xl">
          This certificate is proudly presented to
        </p>

        {/* Auto User Name */}
        <h2 className="text-4xl font-bold text-green-500 mt-8">
          {userName}
        </h2>

        <p className="mt-8 text-gray-500 text-xl">
          For Successfully Completing
        </p>

        <h3 className="text-3xl font-bold mt-5 text-blue-600">
          MERN Stack Course
        </h3>

        {/* Download Button */}
        <button
          onClick={downloadCertificate}
          className="mt-12 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-xl font-semibold"
        >
          Download Certificate
        </button>

      </div>
    </div>
  );
}

export default Certificate;