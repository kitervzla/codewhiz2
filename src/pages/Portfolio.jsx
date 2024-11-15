import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3"
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-black/80"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Work</h1>
          <p className="text-xl max-w-2xl mx-auto">Showcasing our best projects and success stories</p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section" ref={ref}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="card group overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">{project.category}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const projects = [
  {
    title: "FreshMart E-commerce",
    description: "A modern e-commerce platform for organic produce with real-time inventory.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3",
    category: "E-commerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    title: "TravelBuddy App",
    description: "Mobile app for connecting travelers and sharing experiences.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "Google Maps API"]
  },
  {
    title: "RestaurantPro",
    description: "Complete restaurant management system with online ordering.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3",
    category: "Web Application",
    technologies: ["Vue.js", "Laravel", "MySQL", "WebSockets"]
  },
  {
    title: "HealthTrack Platform",
    description: "Healthcare management system for clinics and patients.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3",
    category: "Healthcare",
    technologies: ["Angular", "Python", "PostgreSQL", "Docker"]
  },
  {
    title: "EduLearn LMS",
    description: "Modern learning management system for schools.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3",
    category: "Education",
    technologies: ["Next.js", "GraphQL", "AWS", "Material UI"]
  },
  {
    title: "SmartHome IoT",
    description: "IoT platform for smart home device management.",
    image: "https://images.unsplash.com/photo-1558002038-bb4237b50b11?ixlib=rb-4.0.3",
    category: "IoT",
    technologies: ["React", "Node.js", "MQTT", "MongoDB"]
  }
]
