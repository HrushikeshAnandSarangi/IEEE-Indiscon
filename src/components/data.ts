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
        imageUrl: "/director.jpg",
      },
      {
        id: 2,
        name: "Prof. Prerna Gaur",
        role: "Chair, IEEE India Council",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRub3_UMM7LMjkMpiAGe88Lhi6SQiPRaVv9vA&s",
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
        imageUrl: "/SuparnaKar.jpg",
      },
      {
        id: 4,
        name: "Prof. Dipankar Debnath",
        role: "Chair. IEEE Kharagpur Section",
        imageUrl: "/DipankarDebnath.jpg",
      },
      {
        id: 5,
        name: "Prof. Subhranshu Samantray",
        role: "Chair, IEEE Bhubaneswar Subsection",
        imageUrl: "/SubhransuRanjanSamantaray.png",
      },
      {
        id: 6,
        name: "Prof. S. M. Sameer",
        role: "IEEE Region 10 Director-Elect",
        imageUrl: "/smSameer.jpg",
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
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AwK73IZlWew38so4ddMSLprBk8ZRgZ3Edw&s",
      },
      {
        id: 8,
        name: "Prof. Suresh Nair",
        role: "Founder and Managing Director, Amara Raja Design Alpha",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8qFEnAViKWyntqryCxH_UxoG35CErxKazg&s",
      },
      {
        id: 9,
        name: "Prof. Debabrata Das",
        role: "Immediate Past Chair, IEEE India Council",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnzniJrVCK2IHkTCQ952FifWpbA32bD2Hnw&s",
      },
      {
        id: 10,
        name: "Prof. K. V. S. Hari",
        role: "IISC Bangalore, India",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4WVVa8r6WM5cKlKDVB-SamxnWBYCjZi_dmw&s",
      },
      {
        id: 11,
        name: "Prof. Ashutosh Dutta",
        role: "IEEE Fellow, Johns Hopkins University, USA",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_-K-vlJRAOVfL4j7zHUURjEmbF3JoeofPw&s",
      },
      {
        id: 12,
        name: "Prof. Celia Shahnaz",
        role: "BUET, Bangladesh",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNTV6dd_xf7XpQ9KJnFZRTywG1sIxKS-2Epw&s",
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
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3tiubeHnlguDmkR7ptxgeDFPhPcrXaq_CQ&s",
      },
      {
        id: 14,
        name: "Prof. Amit Mishra",
        role: "Aberystwyth University, UK",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1o3rDuAbq0PLG0jfl0lnTvJzGBJwD6T82w&s",
      },
      {
        id: 15,
        name: "Prof. Ranga Rao Venkatesha Prasad",
        role: "Delft University of Technology, Netherland",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6TKe40G6bZhp2Yz531yN9ilTzy-tNpukTrA&s",
      },
      {
        id: 16,
        name: "Prof. Akshay Rathore",
        role: "Singapore Institute of Technology (SIT), Singapore",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHXEaZS4xXyIVtFvHm2FhcmcjUV99f2_KPYg&s",
      },
      {
        id: 17,
        name: "Prof. Aryan Kaushik",
        role: "Manchester Met, UK",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcLwiiJEuuiyRcRktpPYpScd4ZVPgUTt_w0A&s",
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
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGtVIkTKM0AIsuDJASTyMOcfB51OsJppxDYQ&s",
      },
      {
        id: 19,
        name: "Prof. Pradipta Kumar Nanda",
        role: "VC, SOA University, Bhubaneswar",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoXDg2W2xADZ7H86KagW_B0J4LHokVm02M5Q&s",
      },
      {
        id: 20,
        name: "Prof. Iti Saha Misra",
        role: "Jadavpur University",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6n9eRStKrY5Cp0pSNTFhVJcG12r1RABFfg&s",
      },
      {
        id: 21,
        name: "Prof. Bansidhar Majhi",
        role: "VC, C V Raman Global University",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGtHwL9xZCMnfOSUpkn9RyLKOVPnm0Cw9cg&s",
      },
      {
        id: 22,
        name: "Er. Hare Krushna Rath",
        role: "Ex-Director, DRDO, ITR Chandipur",
        imageUrl: "/citations.jpg",
      },
      {
        id: 23,
        name: "Prof. Anup Kumar Panda",
        role: "Professor, EE Department, NIT Rourkela",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSScBdBOi0pd4H__o4_PQSflRPI156y1K-1gw&s",
      },
      {
        id: 24,
        name: "Prof. Kamalakanta. Mahapatra",
        role: "Professor, EC Department, NIT Rourkela",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1SI0JEJwvlMXVy9w2Kf7pK_fw55ubCOBW1g&s",
      },
      {
        id: 25,
        name: "Prof. Dipti Patra",
        role: "Professor, EE Department, NIT Rourkela",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYPRz-408LAYtkCb4lVUcIrZsvE0p0DWs_g&s",
      },
      {
        id: 26,
        name: "Prof. Kanungo Barada Mohanty",
        role: "Professor and Head, EE Department, NIT Rourkela",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSohckGqGQyeK7n6vtg1qY2O5jEQmeBYos-RQ&s",
      },
      {
        id: 27,
        name: "Prof. Bibhudatta Sahoo",
        role: "CSE Department, NIT Rourkela",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvqNum4uS10zumAQE4ZKtlLJ9uXW-ryc_8Q&s",
      },
      {
        id: 28,
        name: "Prof. Sukadev Meher",
        role: "EC Department, NIT Rourkela",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7StybJ11PYJnvKdOPz2C9U3fnZdTqQ8u0JA&s",
      },
      {
        id: 29,
        name: "Prof. Durga Prasad Mohapatra",
        role: "CSE Dept, NIT Rourkela",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ33Dna7ug5kCJdSz_hpXEd3WuMLsTSXN3B7Q&s",
      },
      {
        id: 30,
        name: "Prof. Debiprasad Priyabrata Acharya",
        role: "Professor, EC Department, NIT Rourkela",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWr8bTZsZ8aFe9Yr0RO0VxSrxRFj80jkpbmA&s",
      },
      {
        id: 31,
        name: "Prof. Prasanna Kumar Sahu",
        role: "Professor, EE Department, NIT Rourkela, India",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJ7eFNsyleGIqX0ynEETMsE6NkVN8fgKwbA&s",
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
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXkrB2XBntiS7udpgQ4su_NMKm2htUC9B9GA&s",
      },
      {
        id: 33,
        name: "Prof. Bhaskar Gupta",
        role: "Chair-Elect, IEEE Kolkata Section",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-beIsWhPvxyF2eWrMRDsXcQt74c8OBuKd-g&s",
      },
      {
        id: 34,
        name: "Prof. Sarat Kumar Patra",
        role: "Director, NIT Agartala",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8H3TSEd1Zbh0byDKoQuDpQBw30L9Yq2UaRQ&s",
      },
      {
        id: 35,
        name: "Prof. Bidyadhar Subudhi",
        role: "Director, NIT Warangal",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU3TqCgKhjr-O6W8QuexCF17zjTmmePY0_Hg&s",
      },
      {
        id: 36,
        name: "Prof. Sukumar Mishra",
        role: "Director, IIT(ISM) Dhanbad",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Lrp93YhGtnrXYpQByZW6sVnQTDR9_DAd7g&s",
      },
      {
        id: 37,
        name: "Prof. Bijaya Ketan Panigrahi",
        role: "IIT Delhi",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThRKjITwO55dKDIHUrEulkhFbpuvuKp0inHA&s",
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
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pmQsCHnY7PwtCJ7ingtuEX_oI1jHrSRLdg&s",
      },
      {
        id: 39,
        name: "Prof. Susmita Das",
        role: "EE Department, NIT Rourkela",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfeXpBAv800fsA9nS5_pl-nCXvnudQYAxdTw&s",
      },
      {
        id: 40,
        name: "Prof. Sudip Misra",
        role: "CSE Department, IIT Kharagpur",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0kNf4MSYv7421NiVcST6kCJ-0aou8aQJuSw&s",
      },
    ],
  },
  {
    title: "TPC Chairs",
    members: [
      {
        "id": 41,
        "name": "Prof. Ashok Kumar Turuk",
        "role": "Professor, CS Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3cNMT_fDzX8j9Lyyjzqe22iI2_vuGNQnEuw&s"
      },
      {
        "id": 42,
        "name": "Prof. Pravat Kumar Ray",
        "role": "Professor, EE Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpJH37mRe7cGhlxs_ZFI11LezmoGr6Gq6Kg&s"
      },
      {
        "id": 43,
        "name": "Prof. Preetam Kumar",
        "role": "Professor, EE Department, IIT Patna",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_qowBlj9bw3ZjqKewj2-CHqzbUz4CYw82Q&s"
      },
      {
        "id": 44,
        "name": "Prof. Mrinal Kanti Mandal",
        "role": "Professor, ECE Dept, IIT Kharagpur",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVXuEj0q8UFlStnynbw1zyBdmNxbbIUB0dw&s"
      }
    ]
  },
  {
    title: "TPC Vice-Chairs",
    members: [
      {
        "id": 45,
        "name": "Prof. Ajit Kumar Sahoo",
        "role": "EC Dept, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp0nqQf4vDylv55netq8zmh4OiQwxkoGvgjg&s"
      },
      {
        "id": 46,
        "name": "Prof. Supratim Gupta ",
        "role": "EE Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdpGnopcssghyFYcha1C53OazbG5-Id00ESQ&s"
      },
      {
        "id": 47,
        "name": "Prof. Ratnakar Dash",
        "role": "CSE Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFYhgcGBxdoVBn5FdOrQLhehfRLtcfkorzKw&s"
      },
      {
        "id": 48,
        "name": "Prof. Mahesh Mohan M R",
        "role": "AI Department, IIT Kharagpur",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2QZBsCKVi1j0gmEeUuGMZd_ba4_wfU-mqA&s"
      }
    ]
  },
  {
    title: "Organizing Secretary",
    members: [
      {
        "id": 49,
        "name": "Prof. Ayaskanta Swain",
        "role": "ECE Department, NIT Rourkela",
        "imageUrl": "/AyashKantaSwain.jpg"
      },
      {
        "id": 50,
        "name": "Prof. Shrishail Hiremath",
        "role": "ECE Department, NIT Rourkela",
        "imageUrl": "/citations1.jpg"
      },
      {
        "id": 51,
        "name": "Prof. Arnab Ghosh",
        "role": " EE Department, NIT Rourkela",
        "imageUrl": "/ArnabGhosh.jpg"
      },
      {
        "id": 52,
        "name": "Prof. Tanmoy Roy Choudhury",
        "role": "EE Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgt5uHmw9uwK3r2n45CS-F1xS9jRyY3lqnZg&s"
      },
      {
        "id": 53,
        "name": "Mr. Nandan S",
        "role": "Secretary IEEE India Council",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdSXJaHkiUdEaH6TZ8YsKrY3Jxj6oc4Sz-Cw&s"
      }
    ]
  },
  
  {
    title: "Co-Organizing Secretary",
    members: [
      {
        "id": 54,
        "name": "Prof. Suman Kr Dey",
        "role": "EE Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYm2zGph6fZSF3KzOc1su3OEIsSh5BfM-iEw&s"
      },
      {
        "id": 55,
        "name": "Prof. Sudip Kundu",
        "role": "ECE Department, NIT Rourkela",
        "imageUrl": "/citations2.jpg"
      },
      {
        "id": 56,
        "name": "Prof. Sandip Ghoshal",
        "role": "ECE Department, NIT Rourkela",
        "imageUrl": "/SandipGhosal.jpeg"
      },
      {
        "id": 57,
        "name": "Prof. Pankaj Sharma",
        "role": "ECE Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAfKlWblRJjR5dHoEoxaPSQVJKfOBQsvfS2g&s"
      }
    ]
  },
   {
    "title": "Finance Chairs",
    "members": [
      {
        "id": 58,
        "name": "Prof. Arun Kumar",
        "role": "CSE Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HDbQbsWPW8ACy_7g8CTbLTHJBSbnYJzQ6A&s"
      },
      {
        "id": 59,
        "name": "Prof. Sandip Ghosal",
        "role": "ECE Department, NIT Rourkela",
        "imageUrl": "/SandipGhosal.jpeg"
      },
      {
        "id": 60,
        "name": "Dr. Rajashree Jain",
        "role": "Treasurer, IEEE India Council",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeeUPsWXGbGmzM3i1PmRWjSTP_yahMu3g9MQ&s"
      }
    ]
  },
  {
    "title": "Publication Chairs",
    "members": [
      {
        "id":92,
        "name":"Dr. Abraham Varhughese",
        "role":"Section Chair, Vizag Bay",
        "imageUrl":"/abrahamvarughese.jpg"

      },
      {
        "id": 61,
        "name": "Mr. Sabarinath Pillai",
        "role": "Secretary, IEEE India Council",
        "imageUrl": "/Sabarinath.jpeg"
      },
      {
        "id": 62,
        "name": "Prof. P.K Sharma",
        "role": "ECE Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAfKlWblRJjR5dHoEoxaPSQVJKfOBQsvfS2g&s"
      },
      {
        "id": 63,
        "name": "Prof. Basabdatta Palit",
        "role": "EC Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwe9ziL34x2NzLkt-2lV-ELn-wY-1qH15TQ&s"
      },
      {
        "id": 64,
        "name": "Prof. Monalisa Pattnaik",
        "role": "EE Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYukutpgXJbONNGStPI9izhMUyApHJ_dv5ng&s"
      },
      {
        "id": 65,
        "name": "Prof. Rakesh Sinha",
        "role": "EE Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCnuU1xEDX4y2HKm9gPVOlP0kx3KhZ3GW1yw&s"
      }
    ]
  },
  {
    "title": "Internet and Web Chairs",
    "members": [
      {
        "id": 66,
        "name": "Prof. Anirban Bhowal",
        "role": "EC Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZM5o7owWopsWVdTgws4wa-BoGHi69WNBrAg&s"
      },
      {
        "id": 67,
        "name": "Mr Chengappa M R",
        "role": "HP Inc Bangalore, India",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStd4etRi_iX0G7ONZ_XefJW5c3g6QYNHFZcA&s"
      },
      {
        "id": 68,
        "name": "Prof. P.K Jain",
        "role": "CSE Department, NIT Rourkela",
        "imageUrl": "/ProfPk.jpeg"
      }
    ]
  },
  {
    "title": "Registration Chairs",
    "members": [
      {
        "id": 69,
        "name": "Prof. Pawan Kumar",
        "role": "EC Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyYMRr-p9ddNuAIKlJDhVZPJS1IXh68cprGw&s"
      },
      {
        "id": 70,
        "name": "Prof. Shekha Rai",
        "role": "EE Department, NIT Rourkela",
        "imageUrl": "/ShekhaRai.jpg"
      },
      {
        "id": 71,
        "name": "Prof. Anusha",
        "role": "EC Department, NIT Rourkela",
        "imageUrl": "/AnushaMam.jpg"
      },
      {
        "id": 72,
        "name": "Prof. Sumit Saha",
        "role": "EC Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP3sx0HYGgLGcSC6lU4qXsxm1_ra4VHCHbeA&s"
      },
      {
        "id": 73,
        "name": "Prof. Anwesha Sengupta",
        "role": "EE Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYwVRtoCiNAgwhKf9SKWwmFud7-RmUvKVktA&s"
      },
      {
        "id":95,
        "name":"Prof. Saptarshi Chaterjee",
        "role":"ECE Department, NIT Rourkela",
        "imageUrl":"/SaptarshiChaterjee.jpeg"
      }
    ]
  },
  {
    "title": "Women in Engineering Chairs",
    "members": [
      {
        "id": 74,
        "name": "Prof. Neeli Prasad",
        "role": "CEO of SmartAvatar B.V Debarati Sen, IIT Kharagpur",
        "imageUrl": "/NeeliP.jpg"
      },
      {
        "id": 75,
        "name": "Prof. Situ Rani Patre",
        "role": "EC Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOnsMSciMbIIoicYIIRHG-X5HS9Si89qkKLA&s"
      },
      {
        "id": 76,
        "name": "Prof. Suchismita Chinara",
        "role": "CSE Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxacZbQNQ9SXK213DSK6-n1ebpnNFIahmptA&s"
      },
      {
        "id": 77,
        "name": "Prof.K Ratna Subhashini",
        "role": "EE Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmNOe7BdSHb7anYjsXSWgUWbWpBXkBhHvHLQ&s"
      },
      {
        "id": 78,
        "name": "Prof. Rashmi Prasad",
        "role": "EE Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJTyoEMk10Eh9V04VErKGDuVx9WNa-ZScSQ&s"
      },
      {
        "id": 79,
        "name": "Prof. Kumari Swati",
        "role": "EE Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWNFp3XJj9JSLhxQcLxtzogogcOXe9R-i2Ag&s"
      }
    ]
  },
  {
    "title": "Sponsorship Committee",
    "members": [
      {
        "id": 77,
        "name": "Prof. Subrata Karmakar",
        "role": "EE Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmlg3Mv5G5QYKIjInHySHexis7PPU4dAKUg&s"
      },
      {
        "id": 78,
        "name": "Prof. L.P Roy",
        "role": "EC Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9hoiEIURlxPKME_2RYMHfKlsCh__poWcKQ&s"
      },
      {
        "id": 79,
        "name": "Prof. Sudip Kundu",
        "role": "EC Department, NIT Rourkela",
        "imageUrl": "/citations2.jpg"
      },
      {
        "id": 80,
        "name": "Prof. Santosh Das",
        "role": "EC Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSwNrju8b0sQLV1EThIKSFOhpDKRoUCqD4Zw&s"
      }
    ]
  },
  {
    "title": "Special Session Chairs",
    "members": [
      {
        "id": 81,
        "name": "Prof. Arnab Ghosh",
        "role": "EE Department, NIT Rourkela",
        "imageUrl": "/ArnabGhosh.jpg"
      }
    ]
  },
  {
    "title": "Young Professional",
    "members": [
      {
        "id": 82,
        "name": "Prof.Situ Rani Patre",
        "role": "EC Department,NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOnsMSciMbIIoicYIIRHG-X5HS9Si89qkKLA&s"
      }
    ]
  },
  {
    "title": "Industry Track and Interfacing Chairs",
    "members": [
      {
        "id": 83,
        "name": "Mr.Chandan Pramanik",
        "role": "Director Education, MathWorks India Private Limited",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdpo63yU3KnHRk6I42hzqXN4BoYl26cI9-g&s"
      },
      {
        "id": 84,
        "name": "Prof. Jogesh Chandra Dash",
        "role": "EC Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1Z1NG0Gs1aHxTeAkJtTomuNozMwfjt3SBw&s"
      },
      {
        "id": 85,
        "name": "Prof.Arijit Guha",
        "role": "EE Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwujJTc_JymxIvanoOQPyyhwWjnpuAsHV7w&s"
      },
      {
        "id": 86,
        "name": "Prof. Prasanjit Dey",
        "role": "EE Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDYN3su4dJPUamg17gnkEJGutFy7MtuXNuBw&s"
      },
      {
        "id": 87,
        "name": "Prof. Sanath Sahu",
        "role": "EE Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWn9Eh8YkstaKw1ZZQql6rfHA6KRjmM8J9tQ&s"
      }
    ]
  },
  {
    "title": "Local Arrangement Chairs",
    "members": [
      {
        "id": 86,
        "name": "Prof. Sanatanu Sarkar",
        "role": "EC Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdelsZ6fJq-f0cbbIpTCKYrkdHPWiHcW6GWQ&s"
      },
      {
        "id": 87,
        "name": "Prof. R.K. Mohapatra",
        "role": "CSE Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBRO331pVjGt_XZhz3uiUk9P53j5aHjirE6g&s"
      },
      {
        "id": 88,
        "name": "Prof. Sadananda Behera",
        "role": "EC Department, NIT Rourkela",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFLHUMqT7tru9wVujvpoeOwKAX86jYR55PQ&s"
      },
      {
        "id": 89,
        "name": "Prof. Prasad N. Ramavath",
        "role": "EC Department, NIT Rourkela",
        "imageUrl": "/PrasadSir.jpg"
      },
      {
        "id": 90,
        "name": "Prof. Indrajit Sarkar",
        "role": "EE Department, NIT Rourkela",
        "imageUrl": "/ISarkar.jpg"
      },
      {
        "id": 91,
        "name": "Prof. Rashmi Achla Minz",
        "role": "EC Department, NIT Rourkela",
        "imageUrl": "/RMinz.jpg"
      }
    ]
  }
]