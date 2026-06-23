import education from "../data/eductaion";

function Education() {
  return (
    <section id="education" className="py-10 px-6 font-sans">
      <h1 className="text-2xl font-medium text-white mb-6">
        My{" "}
        <span className="text-violet-500 underline underline-offset-4">
          Education
        </span>
      </h1>

      <ul className="border-l-2 border-gray-700 space-y-0">
        {education.map((item, index) => (
          <li key={item.id} className="relative pl-6 pb-8 last:pb-0">
            {/* Timeline dot */}
            <span
              className={`absolute -left-[7px] top-1 w-3 h-3 rounded-full border-2 bg-gray-600 border-gray-500 hover:bg-violet-700 border-violet-400`}
            />

            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                {/* Degree title */}
                <h2
                  className={`text-[15px] font-medium mb-1 transition-colors hover:text-violet-400 cursor-default`}
                >
                  {item.title}
                </h2>

                {/* Logo + Institute */}
                <div className="flex items-center gap-2">
                  {item.logo && (
                    <div className="w-7 h-7 rounded overflow-hidden bg-gray-700 flex-shrink-0">
                      <img
                        src={item.logo}
                        alt={`${item.institute} logo`}
                        className="w-full h-full object-cover bg-white"
                      />
                    </div>
                  )}
                  <h3 className="text-sm text-gray-400">{item.institute}</h3>
                </div>
              </div>

              {/* Year + Grade stacked */}
              <div className="flex flex-col items-end flex-shrink-0 gap-1">
                <h3 className="text-sm text-gray-400 whitespace-nowrap">
                  {item.year}
                </h3>
                <h3 >
                  {item.grade}
                </h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;