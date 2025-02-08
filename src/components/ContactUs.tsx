"use client"

const contacts = [
  { id: 1, name: "John Doe", designation: "Event Coordinator", email: "johndoe@example.com" },
  { id: 2, name: "Jane Smith", designation: "Technical Lead", email: "janesmith@example.com" },
  { id: 3, name: "Alice Johnson", designation: "Marketing Head", email: "alicejohnson@example.com" },
  { id: 4, name: "Bob Williams", designation: "Sponsorship Manager", email: "bobwilliams@example.com" },
]

const EmailIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

export default function ContactUs() {
  return (
    <section className="relative py-20 overflow-hidden ">
      <div className="absolute inset-0 bg-white opacity-10 transform rotate-45 skew-y-12" aria-hidden="true" />
      <div className="container relative mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-black drop-shadow-lg">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contacts.map((contact, index) => (
            <div
              key={contact.id}
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-center transform transition duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black text-2xl font-bold">
                {contact.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">{contact.name}</h3>
              <p className="text-lg text-black opacity-80 mb-3">{contact.designation}</p>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center text-black font-medium hover:underline transition duration-300 group"
                aria-label={`Email ${contact.name}`}
              >
                <EmailIcon />
                <span className="group-hover:text-orange-500">{contact.email}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

