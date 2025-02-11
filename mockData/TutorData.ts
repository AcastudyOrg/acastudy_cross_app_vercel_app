import { IMAGES } from "../src/constants";
import { TutorData } from "../src/types/User/Tutor";

export const tutorData: TutorData = {
    name: 'Chiyan Yey',
    rating: 3.9,
    reviews: 1000,
    imageUrl: IMAGES.userPlaceholder,
    bio: "I'm a professional engineer with 5 years of experience. I specialize in data analysis and machine learning. I've worked on several projects in the finance and healthcare industries.",
    subjects: ['Python', 'Data Analysis', 'Machine Learning', 'SQL', 'Tensorflow', 'Pandas'],
    experiences: [
      {
        company: 'Google',
        period: '2019 - present',
        position: 'Software Engineer, Google',
      },
      {
        company: 'Stanford University',
        period: '2017 - 2019',
        position: 'M.S. Computer Science, Stanford University',
      },
    ],
    upcomingEvents: [
      {
        "id": 1,
        "thumbnail": "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Analytical Geometry",
        "tutor": "Chiyan Yey",
        "datetime": "2024-04-13T08:30:00Z",
        "category": "Class"
      },
      {
        "id": 2,
        "thumbnail": "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Chinese History",
        "tutor": "Chiyan Yey",
        "datetime": "2024-05-13T15:30:00Z",
        "category": "Class"
      },
      {
        "id": 3,
        "thumbnail": "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Programming",
        "tutor": "Chiyan Yey",
        "datetime": "2024-05-18T09:00:00Z",
        "category": "Class"
      },
      {
        "id": 4,
        "thumbnail": "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Physics",
        "tutor": "Chiyan Yey",
        "datetime": "2024-05-20T07:00:00Z",
        "category": "Class"
      },
    ],
    reviewCounts: {
      '5': 50,
      '4': 33,
      '3': 0,
      '2': 17,
      '1': 0,
    },
    bookedOutDates: {
      dates: [
        '2024-09-23',
        '2024-09-24',
        '2024-09-25',
        '2024-09-26',
        '2024-09-30',
        '2024-10-01',
        '2024-10-02',
        '2024-10-03',
        '2024-10-04',
        '2024-10-05',
        '2024-10-06'
      ],
      bookedOutDatesTimeSlots: {
        '2024-11-20': ['10:00', '14:00'], 
        '2024-11-21': ['10:00', '14:00'], 
        '2024-11-23': ['10:00', '10:00', '10:00', '14:00', '10:00'], 
        '2024-11-24': ['10:00', '14:00'] ,
        '2024-11-25': ['10:00', '14:00'], 
        '2024-11-26': ['10:00', '14:00'], 
        '2024-11-27': ['10:00', '10:00', '10:00', '14:00', '10:00'], 
        '2024-11-28': ['10:00', '14:00'] ,
      }
    }
  };
