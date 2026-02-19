"use client"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FaReact, 
  FaCode, 
  FaClock, 
  FaBookOpen, 
  FaGraduationCap,
  FaUsers,
  FaCheck,
  FaLaptopCode,
  FaCertificate,
  FaChalkboardTeacher,
  FaRocket,
  FaChartLine,
  FaLayerGroup,
  FaDatabase
} from 'react-icons/fa';

export default function Trainings() {
  const courseModules = [
    {
      week: "Week 1",
      title: "Introduction to React",
      topics: [
        "What is React?",
        "Setting up the development environment",
        "JSX syntax and basics",
        "Components and Props",
        "State and Lifecycle"
      ],
      icon: <FaReact className="w-8 h-8 text-[#61DAFB]" />
    },
    {
      week: "Week 2",
      title: "Advanced React Concepts",
      topics: [
        "Hooks (useState, useEffect, useContext)",
        "Custom Hooks",
        "Context API for state management",
        "React Router for navigation",
        "Form handling and validation"
      ],
      icon: <FaLayerGroup className="w-8 h-8 text-purple-500" />
    },
    {
      week: "Week 3",
      title: "State Management & API Integration",
      topics: [
        "Redux basics and setup",
        "Redux Toolkit",
        "Fetching data from APIs",
        "Async operations with Redux Thunk",
        "Error handling and loading states"
      ],
      icon: <FaDatabase className="w-8 h-8 text-green-500" />
    },
    {
      week: "Week 4",
      title: "Advanced Topics & Best Practices",
      topics: [
        "Performance optimization",
        "Code splitting and lazy loading",
        "Testing React applications",
        "TypeScript with React",
        "Deployment and production builds"
      ],
      icon: <FaRocket className="w-8 h-8 text-red-500" />
    }
  ];

  const courseFeatures = [
    {
      title: "Hands-on Projects",
      description: "Build real-world applications throughout the course to solidify your understanding",
      icon: <FaLaptopCode className="w-10 h-10 text-primary mb-4" />
    },
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of React development experience",
      icon: <FaChalkboardTeacher className="w-10 h-10 text-green-500 mb-4" />
    },
    {
      title: "Flexible Learning",
      description: "Self-paced modules with live Q&A sessions and personalized support",
      icon: <FaClock className="w-10 h-10 text-blue-600 mb-4" />
    },
    {
      title: "Certificate",
      description: "Receive a certificate of completion to showcase your new React skills",
      icon: <FaCertificate className="w-10 h-10 text-yellow-500 mb-4" />
    }
  ];

  const learningOutcomes = [
    "Build modern, responsive web applications using React",
    "Understand and implement React Hooks effectively",
    "Manage application state using Context API and Redux",
    "Create reusable components and custom hooks",
    "Integrate RESTful APIs and handle asynchronous operations",
    "Optimize React applications for performance",
    "Write clean, maintainable React code following best practices",
    "Deploy React applications to production"
  ];

  const prerequisites = [
    "Basic understanding of HTML, CSS, and JavaScript",
    "Familiarity with ES6+ syntax (arrow functions, destructuring, etc.)",
    "Basic command line knowledge",
    "A laptop with Node.js installed"
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a1e2d] via-[#0a1e2d] to-[#1a3a4d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
                <FaReact className="w-5 h-5 text-[#61DAFB] mr-2" />
                <span className="text-sm font-medium text-blue-300">Professional Training Program</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Master React Development</h1>
              <p className="text-xl text-gray-300 mb-6">
                Comprehensive React training designed to transform you into a proficient React developer in just 4 weeks.
              </p>
              <div className="bg-[#61DAFB]/20 border border-[#61DAFB]/40 rounded-lg px-6 py-4 mb-8 inline-block">
                <div className="text-2xl font-bold text-[#61DAFB] mb-1">Fee: NPR 9,999</div>
                <div className="text-sm text-gray-300">Inclusive of VAT</div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#discover-us"
                  className="bg-[#61DAFB] text-[#0a1e2d] px-8 py-4 rounded-full font-medium hover:bg-[#61DAFB]/90 transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center"
                >
                  <FaGraduationCap className="mr-2 h-5 w-5" />
                  Enroll Now
                </Link>
                <Link
                  href="#curriculum"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 inline-flex items-center"
                >
                  <FaBookOpen className="mr-2 h-5 w-5" />
                  View Curriculum
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FaClock className="w-8 h-8 text-[#61DAFB]" />
                    </div>
                    <div className="text-3xl font-bold mb-1">4 Weeks</div>
                    <div className="text-sm text-gray-400">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FaBookOpen className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="text-3xl font-bold mb-1">16+</div>
                    <div className="text-sm text-gray-400">Topics Covered</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FaLaptopCode className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-3xl font-bold mb-1">5+</div>
                    <div className="text-sm text-gray-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FaCertificate className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div className="text-3xl font-bold mb-1">Yes</div>
                    <div className="text-sm text-gray-400">Certificate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a1e2d] mb-4">Why Choose Our React Training?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive training program is designed with practical, industry-relevant content
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseFeatures.map((feature, index) => (
              <Card key={index} className="border-t-4 border-primary hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="pt-8 flex flex-col items-center text-center">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1e2d] mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a1e2d] mb-4">Course Curriculum</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured 4-week journey from React fundamentals to advanced concepts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {courseModules.map((module, index) => (
              <Card key={index} className="border-l-4 border-primary hover:shadow-xl transition-all duration-300 group">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {module.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary mb-1">{module.week}</div>
                      <h3 className="text-xl font-bold text-[#0a1e2d]">{module.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <FaCheck className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center mb-6">
                <FaChartLine className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-[#0a1e2d]">
                  What You'll Learn
                </h2>
              </div>
              <p className="text-gray-600 mb-8">
                By the end of this course, you'll have the skills and confidence to build professional React applications.
              </p>
              <div className="grid gap-4">
                {learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <FaCheck className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <FaUsers className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-[#0a1e2d]">
                  Prerequisites
                </h2>
              </div>
              <p className="text-gray-600 mb-8">
                To get the most out of this course, you should have:
              </p>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <ul className="space-y-4">
                  {prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <FaCheck className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{prereq}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 bg-gradient-to-r from-[#0a1e2d] to-[#1a3a4d] text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Course Format</h3>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-center">
                    <FaCheck className="w-4 h-4 mr-2 text-[#61DAFB]" />
                    Live interactive sessions
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="w-4 h-4 mr-2 text-[#61DAFB]" />
                    Recorded videos for review
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="w-4 h-4 mr-2 text-[#61DAFB]" />
                    Coding assignments and projects
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="w-4 h-4 mr-2 text-[#61DAFB]" />
                    Community support and mentorship
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0a1e2d] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FaGraduationCap className="w-16 h-16 mx-auto mb-6 text-[#61DAFB]" />
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your React Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our comprehensive React training program and become a proficient React developer. 
            Limited seats available for the next batch!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/#discover-us"
              className="bg-[#61DAFB] text-[#0a1e2d] px-8 py-4 rounded-full font-medium hover:bg-[#61DAFB]/90 transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center"
            >
              <FaGraduationCap className="mr-2 h-5 w-5" />
              Enroll Now
            </Link>
            <Link
              href="/#discover-us"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 inline-flex items-center"
            >
              <FaUsers className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Questions? Reach out to us and we'll be happy to help!
          </p>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
