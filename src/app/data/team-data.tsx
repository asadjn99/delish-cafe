// Define the shape of a Team Member object
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  experience: string;
  email: string;
  phone: string;
  fax: string;
}

// Export the array of data
export const teamMembers: TeamMember[] = [
  {
    id: 'kuman-tunman',
    name: 'KUMAN TUNMAN',
    role: 'WAITER',
    image: '/images/waiter1.jpg', // Ensure this file exists in public/images
    bio: 'Sem consequat mauris conubia inceptos nostra rutrum morbi sagittis pulvinar, commodo curabitur maecenas fermentum magna tempus nisi ullamcorper, ante auctor magnis pretium eu lectus euismod platea. Congue sociosqu nostra est urna pellentesque placerat euismod bibendum.',
    experience: 'More Than 10 Years',
    email: 'kuman@agency.com',
    phone: '+(256) 58621-69581',
    fax: '+2568145632'
  },
  {
    id: 'benjamin-kenneth',
    name: 'BENJAMIN KENNETH',
    role: 'WAITER',
    image: '/images/waiter2.webp',
    bio: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.',
    experience: '5 Years',
    email: 'benjamin@agency.com',
    phone: '+(256) 555-0123',
    fax: '+2568145632'
  },
  {
    id: 'matthew-nathaniel',
    name: 'MATTHEW NATHANIEL',
    role: 'WAITER',
    image: '/images/waiter1.jpg',
    bio: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
    experience: '8 Years',
    email: 'matthew@agency.com',
    phone: '+(256) 555-0199',
    fax: '+2568145632'
  },
  {
    id: 'george-james',
    name: 'GEORGE JAMES',
    role: 'WAITER',
    image: '/images/waiter2.webp',
    bio: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
    experience: '4 Years',
    email: 'george@agency.com',
    phone: '+(256) 555-0254',
    fax: '+2568145632'
  },
  {
    id: 'edward-may',
    name: 'EDWARD MAY',
    role: 'WAITER',
    image: '/images/waiter3.jpg',
    bio: 'Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat.',
    experience: '9 Years',
    email: 'edward@agency.com',
    phone: '+(256) 555-0789',
    fax: '+2568145632'
  },
  {
    id: 'patrick-robert',
    name: 'PATRICK ROBERT',
    role: 'WAITER',
    image: '/images/waiter1.jpg',
    bio: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt.',
    experience: '6 Years',
    email: 'patrick@agency.com',
    phone: '+(256) 555-0999',
    fax: '+2568145632'
  },
];