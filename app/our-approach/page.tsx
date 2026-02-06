"use client"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FaSearch, 
  FaChartPie, 
  FaPencilRuler, 
  FaLaptopCode, 
  FaClipboardCheck, 
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaRegComments,
  FaTools,
  FaChartLine,
  FaComments,
  FaArrowRight,
  FaUserCircle, 
  FaCode, 
  FaShieldAlt, 
  FaExpandArrowsAlt, 
  FaChartBar,
  FaHandshake,
  FaBullseye,
  FaCalendarAlt
} from 'react-icons/fa';

export default function OurApproach() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We begin by understanding your business goals, requirements, and challenges through comprehensive discussions and research.',
      icon: <FaSearch className="w-10 h-10 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Our team develops a tailored approach, defining the technology stack, timeline, and resources needed for your project.',
      icon: <FaChartPie className="w-10 h-10 text-green-500 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      number: '03',
      title: 'Design',
      description: 'We create prototypes and wireframes that visualize the solution before development begins.',
      icon: <FaPencilRuler className="w-10 h-10 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      number: '04',
      title: 'Development',
      description: 'Our engineers build your solution using agile methodologies, ensuring quality and regular updates throughout.',
      icon: <FaLaptopCode className="w-10 h-10 text-red-500 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Rigorous quality assurance ensures your solution works flawlessly across all platforms and scenarios.',
      icon: <FaClipboardCheck className="w-10 h-10 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      number: '06',
      title: 'Launch & Support',
      description: 'We help you deploy the solution and provide ongoing maintenance and support to ensure long-term success.',
      icon: <FaRocket className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
    }
  ];

  const principles = [
    {
      title: 'User-Centered Design',
      description: 'We build with the end user in mind, ensuring intuitive, accessible, and engaging user experiences.',
      icon: <FaUserCircle className="w-10 h-10 text-primary mb-4" />
    },
    {
      title: 'Agile Development',
      description: 'Our iterative approach allows for flexibility, continuous improvement, and faster time to market.',
      icon: <FaRocket className="w-10 h-10 text-green-500 mb-4" />
    },
    {
      title: 'Technical Excellence',
      description: 'We maintain high coding standards, architectural integrity, and performance optimization.',
      icon: <FaCode className="w-10 h-10 text-blue-600 mb-4" />
    },
    {
      title: 'Security By Design',
      description: 'Security considerations are built into every step of our process, not added as an afterthought.',
      icon: <FaShieldAlt className="w-10 h-10 text-red-500 mb-4" />
    },
    {
      title: 'Scalable Solutions',
      description: 'We design systems that can grow with your business, handling increased load and expanded functionality.',
      icon: <FaExpandArrowsAlt className="w-10 h-10 text-purple-500 mb-4" />
    },
    {
      title: 'Data-Driven Decisions',
      description: 'We use analytics and metrics to guide development priorities and optimize user experiences.',
      icon: <FaChartBar className="w-10 h-10 text-yellow-500 mb-4" />
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-[#0a1e2d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Our Approach & How We Work</h1>
            <p className="text-xl">
              We combine technical expertise with strategic thinking and a streamlined process to deliver exceptional results efficiently and transparently.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-[#0a1e2d] mb-6">
                A collaborative approach designed for your success
              </h2>
              <p className="text-gray-600 mb-6">
                We believe in transparent communication, collaborative problem-solving, and iterative development to ensure your project succeeds.
                Our methodology combines the best practices of agile development with our years of industry experience.
              </p>
              <p className="text-gray-600">
                Each step in our process is designed to minimize risk, maximize efficiency, and ensure the final product aligns perfectly with your business goals.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 z-0"></div>
              
              {/* Core values icons with animations */}
              <div className="relative z-10 grid grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center" style={{animation: "float 6s ease-in-out infinite"}}>
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <FaUsers className="w-8 h-8 text-blue-500" />
                  </div>
                  <p className="font-medium text-[#0a1e2d]">Collaboration</p>
                </div>
                
                <div className="flex flex-col items-center text-center" style={{animation: "float 6s ease-in-out 1s infinite"}}>
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-3">
                    <FaLightbulb className="w-8 h-8 text-green-500" />
                  </div>
                  <p className="font-medium text-[#0a1e2d]">Innovation</p>
                </div>
                
                <div className="flex flex-col items-center text-center" style={{animation: "float 6s ease-in-out 2s infinite"}}>
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                    <FaRegComments className="w-8 h-8 text-purple-500" />
                  </div>
                  <p className="font-medium text-[#0a1e2d]">Communication</p>
                </div>
                
                <div className="flex flex-col items-center text-center" style={{animation: "float 6s ease-in-out 1.5s infinite"}}>
                  <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-3">
                    <FaTools className="w-8 h-8 text-yellow-500" />
                  </div>
                  <p className="font-medium text-[#0a1e2d]">Expertise</p>
                </div>
                
                <div className="flex flex-col items-center text-center" style={{animation: "float 6s ease-in-out 0.5s infinite"}}>
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-3">
                    <FaChartLine className="w-8 h-8 text-red-500" />
                  </div>
                  <p className="font-medium text-[#0a1e2d]">Results</p>
                </div>
                
                <div className="flex flex-col items-center text-center" style={{animation: "float 6s ease-in-out 2.5s infinite"}}>
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <FaRocket className="w-8 h-8 text-blue-400" />
                  </div>
                  <p className="font-medium text-[#0a1e2d]">Delivery</p>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-center text-[#0a1e2d] mb-16">Our Process</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card 
                key={step.number} 
                className="border-t-4 border-primary hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 hover:border-t-[6px] overflow-hidden"
              >
                <CardContent className="pt-6 relative">
                  {/* Large number in background */}
                  <span className="absolute text-[120px] font-bold text-gray-50 top-0 left-0 leading-none z-0 opacity-80 transition-all duration-300 group-hover:text-gray-100 group-hover:scale-110">
                    {step.number}
                  </span>
                  
                  <div className="flex justify-between items-start relative z-10">
                    <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">{step.number}</span>
                    <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0a1e2d] mt-4 mb-4 relative z-10 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 relative z-10 group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>
                  
                  {/* Show progress line for all except last item */}
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-10 w-8 border-t-2 border-dashed border-gray-200 z-0"></div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-[#0a1e2d] mb-8">Core Principles</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Our approach is built on fundamental principles that ensure we deliver exceptional quality, value, and results for every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="border-t-4 border-primary hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="pt-8 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1e2d] mb-4">{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <FaHandshake className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-[#0a1e2d]">
                  Strategic Partnership
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                We don't just build software; we build relationships. Our team becomes an extension of yours, aligning our technical expertise with your business objectives.
              </p>
              <p className="text-gray-600 mb-4">
                This collaborative approach ensures we understand your unique challenges and deliver solutions that address your specific needs, both immediate and long-term.
              </p>
              <p className="text-gray-600">
                Through regular communication, transparent reporting, and shared goals, we create a partnership that drives mutual success.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <FaBullseye className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1e2d] mb-2">Understand Your Goals</h3>
                    <p className="text-gray-600">We start by gaining a deep understanding of your business objectives</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <FaTools className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1e2d] mb-2">Align Technical Solutions</h3>
                    <p className="text-gray-600">We recommend technologies and approaches that best serve your needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <FaComments className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1e2d] mb-2">Collaborate Continuously</h3>
                    <p className="text-gray-600">We maintain open communication and adapt as your needs evolve</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <FaChartLine className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1e2d] mb-2">Measure Success Together</h3>
                    <p className="text-gray-600">We track metrics that matter to your business, not just technical KPIs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0a1e2d] mb-6">Ready to start your project?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let's discuss how our development process and approach can bring your ideas to life and transform your business challenges into opportunities.
          </p>
          <Link
            href="/#discover-us"
            className="bg-[#0a1e2d] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0a1e2d]/90 transition-all duration-300 group hover:shadow-lg hover:scale-105 inline-flex items-center"
          >
            <FaCalendarAlt className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
            Start a conversation 
            <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
      
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
      
      <Footer />
    </main>
  );
}
