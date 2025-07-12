const BASE_API_URL = 'https://rolling-api.vercel.app/17-3/';

//대상 (Recipient): 게시판에 등록하는 롤링 페이퍼 대상 데이터를 저장합니다.
const DEFAULT_RECIPIENT = {
  id: 0,
  name: '',
  backgroundColor: '',
  backgroundImageURL: null,
  createdAt: '',
  messageCount: 0,
  recentMessages: [],
};

// 메세지 (Message) 롤링 페이퍼 대상에게 남기는 메세지 데이터를 저장합니다.
const DEFAULT_MESSAGE = {
  id: 0,
  recipientId: 0,
  sender: '',
  profileImageURL: '',
  relationship: '',
  content: '',
  font: '',
  createdAt: '',
};

//리액션 (Reaction): 롤링 페이퍼 객체에 대한 리액션 데이터를 저장합니다.
const DEFAULT_REACTION = {
  id: 0,
  recipient_id: 0,
  emoji: '',
  count: 0,
};

export { BASE_API_URL, DEFAULT_RECIPIENT, DEFAULT_MESSAGE, DEFAULT_REACTION };
