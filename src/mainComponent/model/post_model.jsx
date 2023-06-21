const postData = [
  {
    author: 'Jane Doe',
    authorAvatarUrl: 'https://randomuser.me/api/portraits/women/17.jpg',
    date: '2 hours ago',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sodales metus. Integer euismod, neque vel lacinia elementum, dui arcu tempus augue, et mollis nisl orci eu lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    imageUrl: 'https://picsum.photos/600/400',
    likes: 23,
    comments: 7,
    shares: 4,
    commentsData: [
      { text: 'Great post!', author: 'John', authorAvatarUrl: 'https://randomuser.me/api/portraits/men/17.jpg' },
      { text: 'Thanks for sharing!', author: 'Alice', authorAvatarUrl: 'https://randomuser.me/api/portraits/women/18.jpg' },
      { text: 'I agree with you.', author: 'Bob', authorAvatarUrl: 'https://randomuser.me/api/portraits/men/19.jpg' },
      { text: 'Keep up the good work!', author: 'Sara', authorAvatarUrl: 'https://randomuser.me/api/portraits/women/20.jpg' },
      { text: 'This is really helpful.', author: 'Alex', authorAvatarUrl: 'https://randomuser.me/api/portraits/men/21.jpg' },
      { text: 'Interesting perspective.', author: 'Megan', authorAvatarUrl: 'https://randomuser.me/api/portraits/women/22.jpg' },
      { text: 'Looking forward to more posts!', author: 'David', authorAvatarUrl: 'https://randomuser.me/api/portraits/men/23.jpg' },
    ],
  },
  {
    author: 'John Doe',
    authorAvatarUrl: 'https://randomuser.me/api/portraits/men/17.jpg',
    date: '5 hours ago',
    content:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer bibendum commodo leo, sit amet mollis purus. Nulla vitae bibendum sapien. Fusce quis sapien placerat, luctus mauris a, vestibulum dui.',
    imageUrl: 'https://picsum.photos/600/400',
    likes: 12,
    comments: 3,
    shares: 2,
    commentsData: [
      { text: 'Nice post!', author: 'Alice', authorAvatarUrl: 'https://randomuser.me/api/portraits/women/24.jpg' },
      { text: 'I learned something new.', author: 'Bob', authorAvatarUrl: 'https://randomuser.me/api/portraits/men/25.jpg' },
      { text: 'Thanks for sharing your thoughts.', author: 'Sara', authorAvatarUrl: 'https://randomuser.me/api/portraits/women/26.jpg' },
    ],
  },
  {
    author: 'John Doe',
    authorAvatarUrl: 'https://randomuser.me/api/portraits/men/17.jpg',
    date: '5 hours ago',
    content:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer bibendum commodo leo, sit amet mollis purus. Nulla vitae bibendum sapien. Fusce quis sapien placerat, luctus mauris a, vestibulum dui.',
    imageUrl: 'https://picsum.photos/600/400',
    likes: 12,
    comments: 3,
    shares: 2,
    commentsData: [
      { text: 'Interesting post!', author: 'Alice', authorAvatarUrl: 'https://randomuser.me/api/portraits/women/27.jpg' },
      { text: 'I enjoyed reading this.', author: 'Bob', authorAvatarUrl: 'https://randomuser.me/api/portraits/men/28.jpg' },
      { text: 'Thanks for sharing your insights.', author: 'Sara', authorAvatarUrl: 'https://randomuser.me/api/portraits/women/29.jpg' },
    ],
  },
];
export default postData;