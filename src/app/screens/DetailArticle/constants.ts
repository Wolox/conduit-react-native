export function MOCK_DATA(username: string, comment: string) {
  return {
    author: {
      bio: 'Bio de prebas',
      following: false,
      image:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      username
    },
    body: comment,
    createdAt: '2021-08-06T18:16:15.699Z',
    updatedAt: '2021-08-06T18:16:15.699Z',
    id: Number(Math.random().toFixed(2))
  };
}
