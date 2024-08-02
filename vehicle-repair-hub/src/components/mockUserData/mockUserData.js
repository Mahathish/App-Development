// src/data/mockUserData.js
export const mockUserData = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    joinedDate: '2022-05-15T00:00:00.000Z',
    recentActivities: [
      { id: 1, activity: 'Changed oil', date: '2023-06-01' },
      { id: 2, activity: 'Replaced air filter', date: '2023-04-15' },
      { id: 3, activity: 'Checked tire pressure', date: '2023-02-20' },
    ],
    settings: {
      notification: true,
      darkMode: false,
    },
    support: [
      { id: 1, query: 'How to change a tire?', response: 'Refer to our guide here...' },
      { id: 2, query: 'Best oil for my car?', response: 'We recommend synthetic oil for most vehicles.' },
    ],
  };
  