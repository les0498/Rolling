// src/pages/PostDetail/mock.js
const users = {
  2: {
    id: 2,
    name: '강영훈',
    backgroundColor: 'green',
    backgroundImageURL: null,
    createdAt: '2023-10-26T13:19:31.401765Z',
  },
  3: {
    id: 3,
    name: '홍길동',
    backgroundColor: 'blue',
    backgroundImageURL: 'https://picsum.photos/200/200',
    createdAt: '2023-10-27T10:00:00.000000Z',
  },
  4: {
    id: 4,
    name: '홍길동',
    backgroundColor: 'beige',
    backgroundImageURL: 'https://picsum.photos/200/200',
    createdAt: '2023-10-27T10:00:00.000000Z',
  },

  5: {
    id: 5,
    name: '홍길동',
    backgroundColor: 'purple',
    backgroundImageURL: 'https://picsum.photos/200/200',
    createdAt: '2023-10-27T10:00:00.000000Z',
  },
};

export const messages = [
  // 사용자 2 (강영훈) 메시지 1~15개 정도
  {
    id: 1,
    recipientId: 2,
    sender: '김철수',
    profileImageURL: 'https://picsum.photos/200/200',
    relationship: '친구',
    content: '안녕 형!',
    font: 'NanumSquare',
    createdAt: '2023-10-23T09:00:00Z',
  },
  {
    id: 2,
    recipientId: 2,
    sender: '박지수',
    profileImageURL: 'https://picsum.photos/200/200',
    relationship: '동료',
    content: '열심히 하자~!',
    font: 'NanumSquare',
    createdAt: '2023-04-24T09:01:00Z',
  },
  {
    id: 3,
    recipientId: 2,
    sender: '김동훈',
    profileImageURL: 'https://picsum.photos/200/200',
    relationship: '동료',
    content: '열심히 하자~!',
    font: 'NanumSquare',
    createdAt: '2023-11-31T09:01:00Z',
  },
  {
    id: 4,
    recipientId: 2,
    sender: '박영철',
    profileImageURL: 'https://picsum.photos/200/200',
    relationship: '동료',
    content: '열심히 하자~!',
    font: 'NanumSquare',
    createdAt: '2023-11-11T09:01:00Z',
  },
  {
    id: 5,
    recipientId: 2,
    sender: '김정한',
    profileImageURL: 'https://picsum.photos/200/200',
    relationship: '동료',
    content: '열심히 하자~!',
    font: 'NanumSquare',
    createdAt: '2023-11-01T09:01:00Z',
  },
  {
    id: 6,
    recipientId: 2,
    sender: '이원빈',
    profileImageURL: 'https://picsum.photos/200/200',
    relationship: '동료',
    content: '열심히 하자~!',
    font: 'NanumSquare',
    createdAt: '2023-11-01T09:01:00Z',
  },
  {
    id: 7,
    recipientId: 2,
    sender: '박지수',
    profileImageURL: 'https://picsum.photos/200/200',
    relationship: '동료',
    content: '열심히 하자~!',
    font: 'NanumSquare',
    createdAt: '2023-11-01T09:01:00Z',
  },
  {
    id: 8,
    recipientId: 2,
    sender: '박지수',
    profileImageURL: 'https://picsum.photos/200/200',
    relationship: '동료',
    content: '열심히 하자~!',
    font: 'NanumSquare',
    createdAt: '2023-11-01T09:01:00Z',
  },
  {
    id: 9,
    recipientId: 2,
    sender: '박지수',
    profileImageURL: 'https://picsum.photos/200/200',
    relationship: '동료',
    content: '열심히 하자~!',
    font: 'NanumSquare',
    createdAt: '2023-11-01T09:01:00Z',
  },
  {
    id: 10,
    recipientId: 2,
    sender: '박지수',
    profileImageURL: 'https://picsum.photos/200/200',
    relationship: '동료',
    content: '열심히 하자~!',
    font: 'NanumSquare',
    createdAt: '2023-11-01T09:01:00Z',
  },
  {
    id: 11,
    recipientId: 2,
    sender: '박지수',
    profileImageURL: 'https://picsum.photos/200/200',
    relationship: '동료',
    content: '열심히 하자~!',
    font: 'NanumSquare',
    createdAt: '2023-11-01T09:01:00Z',
  },
  {
    id: 12,
    recipientId: 2,
    sender: '박지수',
    profileImageURL: 'https://picsum.photos/200/200',
    relationship: '동료',
    content: '열심히 하자~!',
    font: 'NanumSquare',
    createdAt: '2023-11-01T09:01:00Z',
  },
  {
    id: 13,
    recipientId: 2,
    sender: '박지수',
    profileImageURL: 'https://picsum.photos/200/200',
    relationship: '동료',
    content: '열심히 하자~!',
    font: 'NanumSquare',
    createdAt: '2023-11-01T09:01:00Z',
  },
  {
    id: 14,
    recipientId: 2,
    sender: '박지수',
    profileImageURL: 'https://picsum.photos/200/200',
    relationship: '동료',
    content: '열심히 하자~!',
    font: 'NanumSquare',
    createdAt: '2023-11-01T09:01:00Z',
  },
  {
    id: 15,
    recipientId: 2,
    sender: '박지수',
    profileImageURL: 'https://picsum.photos/200/200',
    relationship: '동료',
    content: '열심히 하자~!',
    font: 'NanumSquare',
    createdAt: '2023-11-01T09:01:00Z',
  },
  // 사용자 3 (홍길동)
  {
    id: 16,
    recipientId: 3,
    sender: '이영준',
    profileImageURL: 'https://picsum.photos/200/200',
    relationship: '가족',
    content: '잘 지내지?',
    font: 'Pretendard',
    createdAt: '2023-11-02T10:00:00Z',
  },
];

export function getUserById(id) {
  return users[id] || null;
}

export function getMessagesByUserId(id, offset = 0, limit = 8) {
  const userMessages = messages
    .filter((msg) => msg.recipientId === Number(id))
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  const sliced = userMessages.slice(offset, offset + limit);
  const count = userMessages.length;
  const nextOffset = offset + limit;
  const prevOffset = offset - limit;

  const next =
    nextOffset < count
      ? `/recipients/${id}/messages/?limit=${limit}&offset=${nextOffset}`
      : null;

  const previous =
    prevOffset >= 0
      ? `/recipients/${id}/messages/?limit=${limit}&offset=${prevOffset}`
      : null;

  return {
    count,
    next,
    previous,
    results: sliced,
  };
}
