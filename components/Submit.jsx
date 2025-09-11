import { useState } from "react";
import { supabase } from "../utils/supabase";
import { v4 as uuidv4 } from "uuid";

const Submit = () => {
  const [form, setForm] = useState({
    student_name: "",
    startup_desc: "",
    startup_idea: "",
    startup_logo: "",
    problem_statement: "",
    solution: "",
  });
  const [logo, setLogo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let publicUrl = "";
      if (logo) {
        const fileExt = logo.name.split(".").pop();
        const fileID = uuidv4();
        const fileName = `${fileID}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from("logos")
          .upload(fileName, logo);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage.from("logos").getPublicUrl(fileName);
        publicUrl = data.publicUrl;
      }

      const { error } = await supabase.from("kid_ideas").insert([
        {
          student_name: form.student_name,
          startup_idea: form.startup_idea,
          startup_desc: form.startup_desc,
          startup_logo: publicUrl,
          problem_statement: form.problem_statement,
          solution: form.solution,
        },
      ]);

      if (error) throw error;

      // Reset form + show success modal
      setForm({
        student_name: "",
        startup_desc: "",
        startup_idea: "",
        startup_logo: "",
        problem_statement: "",
        solution: "",
      });
      setLogo(null);
      setSuccessModal(true);
    } catch (err) {
      console.error("Submit error:", err);
      alert("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-13 text-[#191919]">
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold tracking-tight text-center mb-2">
            Submit Your{" "}
            <span className="bg-gradient-to-br from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Idea
            </span>
          </h1>
          <p className="text-md font-medium text-gray-500 text-center mb-12">
            Have an innovative startup idea? Share it with us and inspire others!
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                className="w-full border bg-white border-gray-900/35 rounded-lg px-4 py-2 focus:outline-none focus:shadow-lg transition"
                placeholder="Your name"
                required
                type="text"
                name="student_name"
                value={form.student_name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Startup Logo
              </label>
              <div className="flex items-center">
                <label
                  htmlFor="startup_logo"
                  className="cursor-pointer bg-white text-sm px-5 py-1 rounded-lg border border-gray-900/35 hover:scale-105 hover:shadow-lg transition"
                >
                  Upload Logo
                </label>
                <input
                  id="startup_logo"
                  type="file"
                  name="startup_logo"
                  className="hidden"
                  onChange={(e) => setLogo(e.target.files[0])}
                />
                <span className="ml-3 text-sm text-gray-600" id="file-name">
                  {logo ? logo.name : "No file chosen"}
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Startup Idea
              </label>
              <input
                className="w-full border bg-white border-gray-900/35 rounded-lg px-4 py-2 focus:outline-none focus:shadow-lg transition"
                placeholder="Startup Idea"
                required
                type="text"
                name="startup_idea"
                value={form.startup_idea}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Startup Description
              </label>
              <input
                className="w-full border bg-white border-gray-900/35 rounded-lg px-4 py-2 focus:outline-none focus:shadow-lg transition"
                placeholder="Startup Description"
                required
                type="text"
                name="startup_desc"
                value={form.startup_desc}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Problem Statement
              </label>
              <input
                className="w-full border bg-white border-gray-900/35 rounded-lg px-4 py-2 focus:outline-none focus:shadow-lg transition"
                placeholder="State what problem you are trying to solve"
                required
                type="text"
                name="problem_statement"
                value={form.problem_statement}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Solution
              </label>
              <textarea
                rows="5"
                className="w-full border bg-white border-gray-900/35 rounded-lg px-4 py-2 focus:outline-none focus:shadow-lg transition"
                placeholder="Describe the solution"
                required
                name="solution"
                value={form.solution}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className={`bg-orange-600 text-white font-semibold text-sm px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ${
                  loading ? "opacity-70 cursor-not-allowed" : "hover:scale-105"
                }`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </main>

      {successModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs shadow-2xl border-2 border-gray-900 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-3">
              🎉 Idea Submitted!
            </h2>
            <p className="text-gray-700 mb-4">
              Your idea has been successfully submitted.
            </p>
            <button
              onClick={() => setSuccessModal(false)}
              className="bg-orange-600 text-white px-5 py-2 rounded-lg font-medium hover:scale-105 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Submit;
