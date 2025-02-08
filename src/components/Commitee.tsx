import React from 'react';
import Image from 'next/image';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

type Member = {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
};

type Committee = {
  title: string;
  members: Member[];
};

const committees: Committee[] = [
  {
    title: 'Organizing Committee',
    members: [
      {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Chairperson',
        imageUrl: 'https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg',
        socials: {
          twitter: 'https://twitter.com/sarahjohnson',
          linkedin: 'https://linkedin.com/in/sarahjohnson'
        }
      },
      {
        id: 2,
        name: 'Michael Chen',
        role: 'Event Coordinator',
        imageUrl: 'https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg',
        socials: {
          linkedin: 'https://linkedin.com/in/michaelchen',
          github: 'https://github.com/michaelchen'
        }
      }
    ]
  },
  {
    title: 'Technical Committee',
    members: [
      {
        id: 3,
        name: 'Emma Wilson',
        role: 'Lead Developer',
        imageUrl: 'https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg',
        socials: {
          twitter: 'https://twitter.com/emmawilson',
          github: 'https://github.com/emmawilson'
        }
      },
      {
        id: 4,
        name: 'David Kim',
        role: 'Systems Architect',
        imageUrl: 'https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg',
        socials: {
          linkedin: 'https://linkedin.com/in/davidkim'
        }
      }
    ]
  }
];

export default function Committee() {
  return (
    <section className="relative py-20  overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Our Committees
        </h2>
        
        {committees.map((committee) => (
          <div key={committee.title} className="mb-16 group">
            <h3 className="text-3xl font-bold mb-8 text-gray-800 border-b-4 border-blue-500 inline-block pb-2">
              {committee.title}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
              {committee.members.map((member) => (
                <div 
                  key={member.id} 
                  className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 p-6"
                >
                  <div className="relative w-40 h-40 mx-auto mb-4">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="rounded-full object-cover border-4 border-gray-200"
                    />
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-2xl font-bold mb-2 text-gray-800">{member.name}</h4>
                    <p className="text-gray-600 mb-4 font-medium">{member.role}</p>
                    
                    <div className="flex justify-center space-x-4">
                      {Object.entries(member.socials).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors duration-200"
                        >
                          {platform === 'twitter' && <FaTwitter className="text-blue-500 w-6 h-6" />}
                          {platform === 'linkedin' && <FaLinkedin className="text-blue-700 w-6 h-6" />}
                          {platform === 'github' && <FaGithub className="text-gray-800 w-6 h-6" />}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}