// src/pages/PostDetail/mock.js
const users = {
  2: {
    id: 2,
    name: '강영훈',
    backgroundColor: 'green',
    backgroundImageURL: null,
    createdAt: '2023-10-26T13:19:31.401765Z',
    messageCount: 3,
    recentMessages: [
      {
        id: 32,
        recipientId: 2,
        sender: '김하은',
        profileImageURL:
          'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
        relationship: '가족',
        content: '열심히 일하는 모습 멋있습니다.',
        font: 'Pretendard',
        createdAt: '2023-11-01T08:05:25.399056Z',
      },
      {
        id: 1,
        recipientId: 3,
        sender: '김철수',
        profileImageURL: 'https://picsum.photos/200/200',
        relationship: '친구',
        content: '안녕하세요!',
        font: 'NanumSquare',
        createdAt: '2023-11-01T09:00:00.000000Z',
      },
      {
        id: 3,
        recipientId: 3,
        sender: '홍길동',
        profileImageURL: 'https://picsum.photos/200/200',
        relationship: '동료',
        content: '반갑습니다!',
        font: 'NanumSquare',
        createdAt: '2023-11-01T09:00:00.000000Z',
      },
      // ...더 많은 메시지
    ],
  },
  3: {
    id: 3,
    name: '홍길동',
    backgroundColor: 'blue',
    backgroundImageURL: 'https://picsum.photos/200/200',
    createdAt: '2023-10-27T10:00:00.000000Z',
    messageCount: 1,
    recentMessages: [
      {
        id: 1,
        recipientId: 3,
        sender: '김철수',
        profileImageURL: 'https://picsum.photos/200/200',
        relationship: '친구',
        content: '안녕하세요!',
        font: 'NanumSquare',
        createdAt: '2023-11-01T09:00:00.000000Z',
      },
    ],
  },
  4: {
    id: 3,
    name: '홍길동',
    backgroundColor: 'begie',
    backgroundImageURL: 'https://picsum.photos/200/200',
    createdAt: '2023-10-27T10:00:00.000000Z',
    messageCount: 1,
    recentMessages: [
      {
        id: 1,
        recipientId: 3,
        sender: '김철수',
        profileImageURL: 'https://picsum.photos/200/200',
        relationship: '친구',
        content: '안녕하세요!',
        font: 'NanumSquare',
        createdAt: '2023-11-01T09:00:00.000000Z',
      },
    ],
  },

  5: {
    id: 3,
    name: '홍길동',
    backgroundColor: 'purple',
    backgroundImageURL: 'https://picsum.photos/200/200',
    createdAt: '2023-10-27T10:00:00.000000Z',
    messageCount: 1,
    recentMessages: [
      {
        id: 1,
        recipientId: 3,
        sender: '김철수',
        profileImageURL: 'https://picsum.photos/200/200',
        relationship: '친구',
        content: '안녕하세요!',
        font: 'NanumSquare',
        createdAt: '2023-11-01T09:00:00.000000Z',
      },
    ],
  },
};

export function getUserById(id) {
  return users[id] || null;
}
