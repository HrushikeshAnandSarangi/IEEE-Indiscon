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
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 2,
          name: "Prof. Prerna Gaur",
          role: "Chair, IEEE India Council",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
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
            imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
          },
          {
            id: 4,
            name: "Prof. Dipankar Debnath",
            role: "Chair. IEEE Kharagpur Section",
            imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
          },
          {
            id: 5,
            name: "Prof. Subhranshu Samantray",
            role: "Chair, IEEE Bhubaneswar Subsection",
            imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
          },
          {
            id: 6,
            name: "Prof. S. M. Sameer",
            role: "IEEE Region 10 Director-Elect",
            imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
          },
        ],
      },
    {
      title: "Executive Steering Committee",
      members: [
        {
          id: 7,
          name: "Mr. Deepak Mathur",
          role: "IEEE Past Vice President-MGA",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 8,
          name: "Dr. Suresh Nair",
          role: "Founder and Managing Director, Amara Raja Design Alpha",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 9,
          name: "Prof. Debabrata Das",
          role: "Immediate Past Chair, IEEE India Council",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 10,
          name: "Prof. K. V. S. Hari",
          role: "IISC Bangalore, India",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 11,
          name: "Prof. Ashutosh Dutta",
          role: "IEEE Fellow, Johns Hopkins University, USA",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 12,
          name: "Prof. Celia Shahnaz",
          role: "BUET, Bangladesh",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
      ],
    },
    {
      title: "International Advisory Committee",
      members: [
        {
          id: 13,
          name: "Prof. Sajal Das",
          role: "Missouri S&T University",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 14,
          name: "Prof. Amit Mishra",
          role: "Aberystwyth University, UK",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 15,
          name: "Prof. Ranga Rao Venkatesha Prasad",
          role: "Delft University of Technology, Netherland",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 16,
          name: "Prof. Akshay Rathore",
          role: "Singapore Institute of Technology (SIT), Singapore",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 17,
          name: "Prof. Aryan Kaushik",
          role: "Manchester Met, UK",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
      ],
    },
    {
      title: "National Advisory Committee",
      members: [
        {
          id: 18,
          name: "Prof. Ganpati Panda",
          role: "C.V. Raman Global University, Bhubaneswar",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 19,
          name: "Prof. Pradipta Kumar Nanda",
          role: "VC, SOA University, Bhubaneswar",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 20,
          name: "Prof. Iti Saha Misra",
          role: "Jadavpur University",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 21,
          name: "Prof. Bansidhar Majhi",
          role: "VC, C V Raman Global University",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 22,
          name: "Er. Hare Krushna Rath",
          role: "Ex-Director, DRDO, ITR Chandipur",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 23,
          name: "Prof. Anup Kumar Panda",
          role: "Professor, EE Department, NIT Rourkela",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 24,
          name: "Prof. Kamalakanta. Mahapatra",
          role: "Professor, EC Department, NIT Rourkela",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 25,
          name: "Prof. Dipti Patra",
          role: "Professor, EE Department, NIT Rourkela",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 26,
          name: "Prof. Kanungo Barada Mohanty",
          role: "Professor and Head, EE Department, NIT Rourkela",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 27,
          name: "Prof. Bibhudatta Sahoo",
          role: "CSE Department, NIT Rourkela",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 28,
          name: "Prof. Sukadev Meher",
          role: "EC Department, NIT Rourkela",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 29,
          name: "Prof. Durga Prasad Mohapatra",
          role: "CSE Dept, NIT Rourkela",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 30,
          name: "Prof. Debiprasad Priyabrata Acharya",
          role: "Professor, EC Department, NIT Rourkela",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 31,
          name: "Prof. Prasanna Kumar Sahu",
          role: "Professor, EE Department, NIT Rourkela, India",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
      ],
    },
    {
      title: "Honorary Chair",
      members: [
        {
          id: 32,
          name: "Prof. Saswat Chakrabarti",
          role: "GSSST, IIT, Kharagpur",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 33,
          name: "Prof. Bhaskar Gupta",
          role: "Chair-Elect, IEEE Kolkata Section",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 34,
          name: "Prof. Sarat Kumar Patra",
          role: "Director, NIT Agartala",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 35,
          name: "Prof. Bidyadhar Subudhi",
          role: "Director, NIT Warangal",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 36,
          name: "Prof. Sukumar Mishra",
          role: "Director, IIT(ISM) Dhanbad",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 37,
          name: "Prof. Bijaya Ketan Panigrahi",
          role: "IIT Delhi",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
      ],
    },
    {
      title: "General Chairs",
      members: [
        {
          id: 38,
          name: "Prof. Poonam Singh",
          role: "ECE Department, NIT Rourkela",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 39,
          name: "Prof. Susmita Das",
          role: "EE Department, NIT Rourkela",
          imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
        {
          id: 40,
          name: "Prof. Sudip Misra",
          role: "CSE Department, IIT Kharagpur",
            imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg",
        },
      ],
    },
    {
        title:"TPC Chairs",
        members:[
            {
                id:41,
                name:"Prof. Ashok Kumar Turuk",
                role:"Professor, CS Department, NIT Rourkela",
                imageUrl:"https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg"
            },
            {
                id:42,
                name:"Prof. Pravat Kumar Ray",
                role:"Professor, EE Department, NIT Rourkela",
                imageUrl:"https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg"
            },
            {
                id:43,
                name:"Prof. Preetam Kumar",
                role:"Professor, EE Department, IIT Patna",
                imageUrl:"https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg"
            },
            {
                id:44,
                name:"Prof. Mrinal Kanti Mandal",
                role:"Professor, ECE Dept, IIT Kharagpur",
                imageUrl:"https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg"
            }
        ]
    },
    {
        title:"TPC Vice-Chairs",
        members:[
            {
                id:45,
                name:"Prof. Ajit Kumar Sahoo",
                role:"EC Dept, NIT Rourkela",
                imageUrl:"https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg"
            },{
                id:46,
                name:"Dr. Supratim Gupta ",
                role:"EE Department, NIT Rourkela",
                imageUrl:"https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg"
            },{
                id:47,
                name:"Dr. Ratnakar Dash",
                role:"CSE Department, NIT Rourkela",
                imageUrl:"https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg"
            },{
                id:48,
                name:"Dr. Mahesh Mohan M R",
                role:"AI Department, IIT Kharagpur",
                imageUrl:"https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg"
            }
        ]
    },
    {
        title:"Organizing Secretary",
        members:[
            {
                id:49,
                name:"Dr. Ayaskanta Swain",
                role:"ECE Department, NIT Rourkela",
                imageUrl:"https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg"
            },
            {
                id:50,
                name:"Dr. Shrishail Hiremath",
                role:"ECE Department, NIT Rourkela",
                imageUrl:"https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg"
            },
            {
                id:51,
                name:"Dr. Arnab Ghosh",
                role:" EE Department, NIT Rourkela",
                imageUrl:"https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg"
            },
            {
                id:52,
                name:"Dr. Tanmoy Roy Choudhury",
                role:"EE Department, NIT Rourkela",
                imageUrl:"https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg"
            },
            {
                id:53,
                name:"Mr. Nandan S",
                role:"Secretary IEEE India Council",
                imageUrl:"https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg"
            }
        ]
    },
    {
        title:"Co-Organizing Secretary",
        members:[
            {
                id:54,
                name:"Dr. Suman Kumar Dey",
                role:"EE Department, NIT Rourkela",
                imageUrl:"https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg"
            },
            {
                id:55,
                name:"Dr. Sudip Kundu",
                role:"ECE Department, NIT Rourkela",
                imageUrl:"https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg"
            },
            {
                id:56,
                name:"Dr. Sandip Ghoshal",
                role:"ECE Department, NIT Rourkela",
                imageUrl:"https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg"
            },
            {
                id:57,
                name:"Dr. Pankaj Sharma",
                role:"ECE Department, NIT Rourkela",
                imageUrl:"https://res.cloudinary.com/dk6m1qejk/image/upload/v1741708401/IEEE/pbzekfhxktoa2xyjxexf.jpg"
            }
        ]
    }
]