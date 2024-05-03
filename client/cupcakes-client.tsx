//TODO: change to .ts file once API call built

export async function getCupcakes() {
  return [
    {
      id: 1,
      title: 'Belgian Chocolate',
      image: '/belgian_chocolate.webp',
      price: '3.50',
      summary:
        'Our Belgian Chocolate Cupcake features a rich, moist sponge smothered with Belgian chocolate frosting.',
    },
    {
      id: 2,
      title: 'Red Velvet',
      image: '/red_velvet.webp',
      price: '3.50',
      summary:
        'Our iconic Red Velvet Cupcake has a distinctly velvety sponge, with a mild cocoa butter flavour that falls halfway between chocolate and vanilla.',
    },
    {
      id: 3,
      title: 'Lemon Delight',
      image: '/lemon_delight.webp',
      price: '3.50',
      summary:
        'Enjoy the classic french vanilla butter cake with a refreshing twist of lemon butter cream.',
    },
  ];
}
