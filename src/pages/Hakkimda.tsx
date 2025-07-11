import React from 'react';
import { Book, Computer, Headphones, Circle, Award, Briefcase, GraduationCap, MapPin, Calendar, Phone, Mail, User, Globe } from 'lucide-react';
import Layout from '../components/Layout';

const Hakkimda = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-5xl px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h1>

        {/* Personal Information */}
        <div className="bg-gray-800/50 rounded-lg p-8 mb-12 backdrop-blur-sm border border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <User className="text-blue-400" size={32} />
            <h2 className="text-2xl font-semibold text-blue-400">Personal Information</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="text-purple-400" size={20} />
                <div>
                  <span className="text-gray-400 text-sm">Date of Birth & Age:</span>
                  <p className="text-gray-300">02.03.1991 - 33 Years Old</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-green-400" size={20} />
                <div>
                  <span className="text-gray-400 text-sm">Place of Birth:</span>
                  <p className="text-gray-300">Beyoğlu, Istanbul</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-400" size={20} />
                <div>
                  <span className="text-gray-400 text-sm">Phone:</span>
                  <p className="text-gray-300">0538 22 444 88</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-yellow-400" size={20} />
                <div>
                  <span className="text-gray-400 text-sm">Email:</span>
                  <p className="text-gray-300">dizpatek@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="text-purple-400" size={20} />
                <div>
                  <span className="text-gray-400 text-sm">Language Skills:</span>
                  <p className="text-gray-300">Turkish (Native), English (Advanced)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-green-400" size={20} />
                <div>
                  <span className="text-gray-400 text-sm">Driver's License:</span>
                  <p className="text-gray-300">A1, A2, B, D, F</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-gray-800/50 rounded-lg p-8 mb-12 backdrop-blur-sm border border-gray-700">
          <Computer className="text-blue-400 mb-4" size={40} />
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Professional Summary</h3>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            As a technical expert with innovative and advanced experience in mechatronics and system integration, 
            I am able to provide maintenance, repair, usage and control training for all products operating or 
            manufactured in these fields. I have a good level of education and can understand and speak Technical English.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            With the experience I gained in the hospitality sector from 2012 to 2019, where I started as a technical 
            service and finished as a manager, I now provide remote support, technical service and sales management 
            services in the hospitality field. I am currently actively serving as Social Media and Technical Service 
            at a private dental hospital located in Taksim Square.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="bg-gray-800/50 rounded-lg p-8 mb-12 backdrop-blur-sm border border-gray-700">
          <Computer className="text-purple-400 mb-4" size={40} />
          <h3 className="text-2xl font-semibold mb-6 text-purple-400">Technical Skills</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-300 mb-3">Electronics & Electrical</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Electronic Device Repair</li>
                <li>• Electrical Panel Systems</li>
                <li>• Industrial Electronics</li>
                <li>• Medical Devices</li>
                <li>• Dental Systems</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-green-300 mb-3">Computer & Network</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Web Design</li>
                <li>• Network Systems</li>
                <li>• Security Systems</li>
                <li>• Computer Technician</li>
                <li>• Office Applications</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-yellow-300 mb-3">Machinery & Systems</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• CNC Machines</li>
                <li>• CAD-CAM Software</li>
                <li>• Air Conditioning & HVAC Systems</li>
                <li>• Elevator Technology</li>
                <li>• Reverse Engineering</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="bg-gray-800/50 rounded-lg p-8 mb-12 backdrop-blur-sm border border-gray-700">
          <Briefcase className="text-green-400 mb-4" size={40} />
          <h3 className="text-2xl font-semibold mb-6 text-green-400">Work Experience</h3>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-lg font-semibold text-blue-300 mb-2">Siya Health Services "CityDent"</h4>
              <p className="text-purple-300 text-sm mb-2">Social Media, System & Network Specialist (2022-Present)</p>
              <p className="text-gray-300 text-sm">
                Handled social media management, system and network maintenance, technical responsibilities 
                and repair work at a private dental hospital.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="text-lg font-semibold text-purple-300 mb-2">Repair Hospital - Electronics Hospital</h4>
              <p className="text-green-300 text-sm mb-2">Own Business (2019-2022)</p>
              <p className="text-gray-300 text-sm">
                Managed my own electronic repair and maintenance service business.
              </p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-6">
              <h4 className="text-lg font-semibold text-yellow-300 mb-2">Venus Hotel</h4>
              <p className="text-blue-300 text-sm mb-2">Sales and Personnel Manager (2015-2017)</p>
              <p className="text-gray-300 text-sm">
                Undertook personnel management, operations and technical work control and field responsibility 
                in the hospitality sector.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-gray-800/50 rounded-lg p-8 mb-12 backdrop-blur-sm border border-gray-700">
          <GraduationCap className="text-yellow-400 mb-4" size={40} />
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Education Background</h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-lg font-semibold text-blue-300">Şişli Vocational High School</h4>
              <p className="text-gray-400 text-sm">Electronic Products Master - Master Instructor (2024)</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="text-lg font-semibold text-purple-300">Istanbul University</h4>
              <p className="text-gray-400 text-sm">Civil Air Transportation (2015)</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-lg font-semibold text-green-300">Anadolu University</h4>
              <p className="text-gray-400 text-sm">Public Administration (2014)</p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-6">
              <h4 className="text-lg font-semibold text-yellow-300">Kasımpaşa Anatolian Science High School</h4>
              <p className="text-gray-400 text-sm">Science - Mathematics (2009) - GPA: 4.00</p>
            </div>
          </div>
        </div>

        {/* Certificates & Memberships */}
        <div className="bg-gray-800/50 rounded-lg p-8 mb-12 backdrop-blur-sm border border-gray-700">
          <Award className="text-purple-400 mb-4" size={40} />
          <h3 className="text-2xl font-semibold mb-6 text-purple-400">Certificates & Memberships</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-300 mb-3">Professional Certificates</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="text-yellow-400" size={16} />
                  <span className="text-gray-300 text-sm">Press Photography Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-yellow-400" size={16} />
                  <span className="text-gray-300 text-sm">Documentary Photography Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-yellow-400" size={16} />
                  <span className="text-gray-300 text-sm">Screenplay Certificate</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-green-300 mb-3">Association & Club Memberships</h4>
              <div className="flex items-center gap-2">
                <Circle className="text-blue-400" size={16} />
                <span className="text-gray-300 text-sm">IFSAK - Istanbul Photography and Cinema Foundation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hobbies */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
            <Headphones className="text-purple-400 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Music & Creativity</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Beat production</li>
              <li>• MIDI keyboard playing</li>
              <li>• Specializing in techno music genre</li>
              <li>• Blending music with technology</li>
              <li>• Graphic design and animation</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
            <Circle className="text-green-400 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-4 text-green-400">Sports & Nature</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Extreme cycling (Danny MacAskill style)</li>
              <li>• Active swimming</li>
              <li>• Passionate about outdoor sports</li>
              <li>• Love spending time in nature</li>
              <li>• Photography (Press & Documentary)</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hakkimda;