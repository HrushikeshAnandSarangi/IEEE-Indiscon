export type Member = {
    id: number
    name: string
    role: string
    imageUrl: string
  }
  
  export type Committee = {
    title: string
    members: Member[]
  }
  
  // Patron committees (Patrons and Co-Patrons)
  export const patronCommittees: Committee[] = [
    {
      title: "Patrons",
      members: [
        {
          id: 1,
          name: "Prof. Umamaheshwar Rao Karanam",
          role: "Director, NIT Rourkela, India",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 2,
          name: "Prof. Prerna Gaur",
          role: "Chair, IEEE India Council",
          imageUrl: "/defaultprofile.jpg",
        },
      ],
    }
  ]
  
  // Other committees
  export const otherCommittees: Committee[] = [
    {
        title: "Co-Patrons",
        members: [
          {
            id: 3,
            name: "Prof. Suparna Kar Chowdhury",
            role: "Chair, IEEE Kolkata Section",
            imageUrl: "/defaultprofile.jpg",
          },
          {
            id: 4,
            name: "Prof. Dipankar Debnath",
            role: "Chair. IEEE Kharagpur Section",
            imageUrl: "/defaultprofile.jpg",
          },
          {
            id: 5,
            name: "Prof. Subhranshu Samantray",
            role: "Chair, IEEE Bhubaneswar Subsection",
            imageUrl: "/defaultprofile.jpg",
          },
          {
            id: 6,
            name: "Prof. S. M. Sameer",
            role: "IEEE Region 10 Director-Elect",
            imageUrl: "/defaultprofile.jpg",
          },
        ],
      },
      {
          title:"Organizing Secretary",
          members:[
              {
                  id:7,
                  name:"Prof. Ayaskanta Swain",
                  role:"ECE Department, NIT Rourkela",
                  imageUrl:"/defaultprofile.jpg"
              },
              {
                  id:8,
                  name:"Prof. Shrishail Hiremath",
                  role:"ECE Department, NIT Rourkela",
                  imageUrl:"/defaultprofile.jpg"
              },
              {
                  id:9,
                  name:"Prof. Arnab Ghosh",
                  role:" EE Department, NIT Rourkela",
                  imageUrl:"/defaultprofile.jpg"
              },
              {
                  id:10,
                  name:"Prof. Tanmoy Roy Choudhury",
                  role:"EE Department, NIT Rourkela",
                  imageUrl:"/defaultprofile.jpg"
              },
              {
                  id:11,
                  name:"Mr. Nandan S",
                  role:"Secretary IEEE India Council",
                  imageUrl:"/defaultprofile.jpg"
              }
          ]
      },
    {
      title: "Executive Steering Committee",
      members: [
        {
          id: 12,
          name: "Mr. Deepak Mathur",
          role: "IEEE Past Vice President-MGA",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 13,
          name: "Prof. Suresh Nair",
          role: "Founder and Managing Director, Amara Raja Design Alpha",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 14,
          name: "Prof. Debabrata Das",
          role: "Immediate Past Chair, IEEE India Council",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 15,
          name: "Prof. K. V. S. Hari",
          role: "IISC Bangalore, India",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 16,
          name: "Prof. Ashutosh Dutta",
          role: "IEEE Fellow, Johns Hopkins University, USA",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 17,
          name: "Prof. Celia Shahnaz",
          role: "BUET, Bangladesh",
          imageUrl: "/defaultprofile.jpg",
        },
      ],
    },
    {
      title: "International Advisory Committee",
      members: [
        {
          id: 18,
          name: "Prof. Sajal Das",
          role: "Missouri S&T University",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 19,
          name: "Prof. Amit Mishra",
          role: "Aberystwyth University, UK",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 20,
          name: "Prof. Ranga Rao Venkatesha Prasad",
          role: "Delft University of Technology, Netherland",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 21,
          name: "Prof. Akshay Rathore",
          role: "Singapore Institute of Technology (SIT), Singapore",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 22,
          name: "Prof. Aryan Kaushik",
          role: "Manchester Met, UK",
          imageUrl: "/defaultprofile.jpg",
        },
      ],
    },
    {
      title: "National Advisory Committee",
      members: [
        {
          id: 23,
          name: "Prof. Ganpati Panda",
          role: "C.V. Raman Global University, Bhubaneswar",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 24,
          name: "Prof. Pradipta Kumar Nanda",
          role: "VC, SOA University, Bhubaneswar",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 25,
          name: "Prof. Iti Saha Misra",
          role: "Jadavpur University",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 26,
          name: "Prof. Bansidhar Majhi",
          role: "VC, C V Raman Global University",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 27,
          name: "Er. Hare Krushna Rath",
          role: "Ex-Director, DRDO, ITR Chandipur",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 28,
          name: "Prof. Anup Kumar Panda",
          role: "Professor, EE Department, NIT Rourkela",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 29,
          name: "Prof. Kamalakanta. Mahapatra",
          role: "Professor, EC Department, NIT Rourkela",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 30,
          name: "Prof. Dipti Patra",
          role: "Professor, EE Department, NIT Rourkela",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 31,
          name: "Prof. Kanungo Barada Mohanty",
          role: "Professor and Head, EE Department, NIT Rourkela",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 32,
          name: "Prof. Bibhudatta Sahoo",
          role: "CSE Department, NIT Rourkela",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 33,
          name: "Prof. Sukadev Meher",
          role: "EC Department, NIT Rourkela",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 34,
          name: "Prof. Durga Prasad Mohapatra",
          role: "CSE Dept, NIT Rourkela",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 35,
          name: "Prof. Debiprasad Priyabrata Acharya",
          role: "Professor, EC Department, NIT Rourkela",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 36,
          name: "Prof. Prasanna Kumar Sahu",
          role: "Professor, EE Department, NIT Rourkela, India",
          imageUrl: "/defaultprofile.jpg",
        },
      ],
    },
    {
      title: "Honorary Chair",
      members: [
        {
          id: 37,
          name: "Prof. Saswat Chakrabarti",
          role: "GSSST, IIT, Kharagpur",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 38,
          name: "Prof. Bhaskar Gupta",
          role: "Chair-Elect, IEEE Kolkata Section",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 39,
          name: "Prof. Sarat Kumar Patra",
          role: "Director, NIT Agartala",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 40,
          name: "Prof. Bidyadhar Subudhi",
          role: "Director, NIT Warangal",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 41,
          name: "Prof. Sukumar Mishra",
          role: "Director, IIT(ISM) Dhanbad",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 42,
          name: "Prof. Bijaya Ketan Panigrahi",
          role: "IIT Delhi",
          imageUrl: "/defaultprofile.jpg",
        },
      ],
    },
    {
      title: "General Chairs",
      members: [
        {
          id: 43,
          name: "Prof. Poonam Singh",
          role: "ECE Department, NIT Rourkela",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 44,
          name: "Prof. Susmita Das",
          role: "EE Department, NIT Rourkela",
          imageUrl: "/defaultprofile.jpg",
        },
        {
          id: 45,
          name: "Prof. Sudip Misra",
          role: "CSE Department, IIT Kharagpur",
            imageUrl: "/defaultprofile.jpg",
        },
      ],
    },
    {
        title:"TPC Chairs",
        members:[
            {
                id:46,
                name:"Prof. Ashok Kumar Turuk",
                role:"Professor, CS Department, NIT Rourkela",
                imageUrl:"/defaultprofile.jpg"
            },
            {
                id:47,
                name:"Prof. Pravat Kumar Ray",
                role:"Professor, EE Department, NIT Rourkela",
                imageUrl:"/defaultprofile.jpg"
            },
            {
                id:48,
                name:"Prof. Preetam Kumar",
                role:"Professor, EE Department, IIT Patna",
                imageUrl:"/defaultprofile.jpg"
            },
            {
                id:49,
                name:"Prof. Mrinal Kanti Mandal",
                role:"Professor, ECE Dept, IIT Kharagpur",
                imageUrl:"/defaultprofile.jpg"
            }
        ]
    },
    {
        title:"TPC Vice-Chairs",
        members:[
            {
                id:50,
                name:"Prof. Ajit Kumar Sahoo",
                role:"EC Dept, NIT Rourkela",
                imageUrl:"/defaultprofile.jpg"
            },{
                id:51,
                name:"Prof. Supratim Gupta ",
                role:"EE Department, NIT Rourkela",
                imageUrl:"/defaultprofile.jpg"
            },{
                id:52,
                name:"Prof. Ratnakar Dash",
                role:"CSE Department, NIT Rourkela",
                imageUrl:"/defaultprofile.jpg"
            },{
                id:53,
                name:"Prof. Mahesh Mohan M R",
                role:"AI Department, IIT Kharagpur",
                imageUrl:"/defaultprofile.jpg"
            }
        ]
    },
    {
        title:"Co-Organizing Secretary",
        members:[
            {
                id:54,
                name:"Prof. Suman Kumar Dey",
                role:"EE Department, NIT Rourkela",
                imageUrl:"/defaultprofile.jpg"
            },
            {
                id:55,
                name:"Prof. Sudip Kundu",
                role:"ECE Department, NIT Rourkela",
                imageUrl:"/defaultprofile.jpg"
            },
            {
                id:56,
                name:"Prof. Sandip Ghoshal",
                role:"ECE Department, NIT Rourkela",
                imageUrl:"/defaultprofile.jpg"
            },
            {
                id:57,
                name:"Prof. Pankaj Sharma",
                role:"ECE Department, NIT Rourkela",
                imageUrl:"/defaultprofile.jpg"
            }
        ]
    }
]