export interface Music {
  id: number;
  name: string;
  genre: string;
  image: string;
  file: string;
  singer: string;
  singerImage: string;
  duration?: any;
  isFavourite: boolean;
  rating: number;
}

export const music: Music[] = [
  {
    id: 1,
    name: 'Rain',
    genre: 'slow rock',
    image:
      'https://cdn.dribbble.com/users/31348/screenshots/5383318/aid_vinyl_19_4x.jpg',
    file: './assets/fade.mp3',
    singer: 'Rob Scallon',
    singerImage: 'https://tomijean.files.wordpress.com/2015/03/rob.jpg',
    isFavourite: false,
    rating: 4,
  },
  {
    id: 2,
    name: 'Blade',
    genre: 'core',
    image:
      'https://www.designwizard.com/wp-content/uploads/2019/09/10-Design-Wizard-Album-Cover.jpg',
    file: './assets/cheap-thrills.mp3',
    singer: 'Howard Jones',
    singerImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSqfVd6vZm-h2PwjBe4R11DeFJh4BQHicTAA&usqp=CAU',
    isFavourite: false,
    rating: 5,
  },
];

// artistImage https://assets.vogue.com/photos/5af5bfcf4e5f554679ec4c7a/4:3/w_2232,h_1674,c_limit/00-promo-arctic-monkeys.jpg

// songImage https://upload.wikimedia.org/wikipedia/en/a/ae/Favourite_Worst_Nightmare.jpg
