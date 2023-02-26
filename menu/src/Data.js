const data = [
    {
        id : 1,
        name : 'Idli-Sambhar',
        image : 'https://thumbs.dreamstime.com/z/south-indian-breakfast-idli-dosa-chutney-indian-breakfast-lentil-rice-pancake-also-known-as-dosa-dumplings-known-as-idli-158574513.jpg',
        category : 'breakfast',
        cost : 'Rs. 12',
        info : 'South India is a vast, diverse region with a cuisine that has captured the minds of many. The popularity of South Indian staples such as idli, vada and dosa has transcended geographical boundaries, and has now found fans across the globe.',
        type : 'Veg'
    },
    {
        id : 2,
        name : 'Chocolate Shake',
        image : 'https://media.istockphoto.com/id/926990564/photo/chocolate-milk-and-whipped-cream.jpg?s=612x612&w=0&k=20&c=LabS3iGKio9kYS7OUGsosTm0Bb4XKY8WkXPer_RU3IQ=',
        category : 'Shakes',
        cost : 'Rs. 120',
        info : 'Drink and have fun!!!',
        type : 'Veg'
    },
    {
        id : 3,
        name : 'Chicken Biryani',
        image : 'https://www.indianfoodforever.com/iffwd/wp-content/uploads/chicken-biryani-pressure-cooker.jpg',
        category : 'lunch',
        cost : 'Rs. 220',
        info : 'A wonderful fragrant chicken biryani which is cooked in pressure cooker saving all the time consuming steps of layering and waiting for the biryani to cook in dum.',
        type : 'Non-eg'
    },
    {
        id : 4,
        name : 'Dosa',
        image : 'https://images.slurrp.com/prod/rich_article/cffhaub2oto.webp?impolicy=slurrp-20210601&width=880&height=500',
        category : 'breakfast',
        cost : 'Rs. 35',
        info : 'You do not associate South Indian breakfast with all things fiery hot, but the food is in fact renowned for its use of healing spices such as turmeric, mustard seeds, black pepper, cumin fenugreek seeds, chillies et al.',
        type : 'Veg'
    },
    {
        id : 5,
        name : 'Phulkari Pulao ',
        image : 'https://images.slurrp.com/prodrich_article/4y02yryh4sn.webp?impolicy=slurrp-20210601&width=880&height=500',
        category : 'breakfast',
        cost : 'Rs. 20',
        info : 'This rich dish is connected to the regime of Maharaja Ranjit Singh in Patiala. Made with curd and khoya, this dish has beautiful spots and thus, resembles Phulkari.',
        type : 'Veg'
    },
    {
        id : 6,
        name : 'Vegan Shakes',
        image : 'https://www.lordofthefries.com.au/wp-content/uploads/2016/02/shakes02-1.jpg',
        category : 'Shakes',
        cost : 'Rs. 50',
        info : 'Now vegan people can have their special shake available : so have and enjoy the Vegan Shake.',
        type : 'Vegan'
    },
    {
        id : 7,
        name : 'Tandoori Chicken Sandwich',
        image : 'https://drop.ndtv.com/albums/COOKS/these-5-non-veg_637891537843222204/637891537879934948.jpeg',
        category : 'breakfast',
        cost : 'Rs. 60',
        info : 'The chicken is marinated before being cooked in a skillet or in the oven in this meal. Create this sandwich with vegetables and sauces on any bread of your choice. This sandwich can easily be turned into a sub and eaten!',
        type : 'Non-veg'
    },
    {
        id : 8,
        name : 'Vegetables and fruits',
        image : 'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2012/09/vegetables-and-fruits-farmers-market.jpg',
        category : 'lunch',
        cost : 'Rs. 50',
        info : 'Vegetables and fruits are an important part of a healthy diet, and variety is as important as quantity.',
        type : 'Veg'
    },
    {
        id : 9,
        name : 'cookies and cream milkshake',
        image : 'https://icecreamfromscratch.com/wp-content/uploads/2021/11/Cookies-and-Cream-Milkshake-4.2-720x720.jpg',
        category : 'Shakes',
        cost : 'Rs. 122',
        info : 'A simple recipe for a cookies and cream milkshake that is perfect for anyone who loves cookies and ...',
        type : 'Veg'
    },
    {
        id : 10,
        name : 'Indian Thali',
        image : 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Indian_Home_Made_Lunch.jpg',
        category : 'lunch',
        cost : 'Rs. 155',
        info : 'The type of carbohydrate in the diet is more important than the amount of carbohydrate in the diet.',
        type : 'Veg'
    },
    {
        id : 11,
        name : 'Chilli Garlic Omelette',
        image : 'https://drop.ndtv.com/albums/COOKS/these-5-non-veg_637891537843222204/637891537881181009.jpeg',
        category : 'breakfast',
        cost : 'Rs. 22',
        info : 'Spicy chilli and peppery garlic flavours combine in this omelette. If you enjoy spicy foods, you should try this dish. This omelette takes only a few minutes to make.',
        type : 'Non-veg'
    },
    {
        id : 12,
        name : 'Creamy Broccoli Vegan Pasta',
        image : 'https://cdn.loveandlemons.com/wp-content/uploads/2019/12/vegan-food.jpg',
        category : 'breakfast',
        cost : 'Rs. 80',
        info : `This luscious creamy vegan pasta will give any traditional mac and cheese a run for its money. Instead of containing dairy, the smooth, tangy sauce is a protein-packed blend of white beans, nutritional yeast, and lemon juice.`,
        type : 'Vegan'
    },
    {
        id : 13,
        name : 'Gujrati-Thali',
        image : 'https://media-cdn.tripadvisor.com/media/photo-s/07/3a/98/6e/extra-bread-and-spring.jpg',
        category : 'lunch',
        cost : 'Rs. 100',
        info : 'Gujarati Summer Thali includes traditional food recipes along with fresh mango pulp (aamras), which is an integral part of the meal during summer season.',
        type : 'Veg'
    },
    {
        id : 14,
        name : 'Chicken Pakora',
        image : 'https://www.indianfoodforever.com/iffwd/wp-content/uploads/2019/10/chicken-pakora.jpg',
        category : 'breakfast',
        cost : 'Rs. 45',
        info : 'Chicken pakora is Indian style chicken nuggets. This Indian style chicken pakora is very easy and simple to make and very delicious to eat., chillies et al.',
        type : 'Non-veg'
    },
    {
        id : 15,
        name : 'Grilled Chicken Salad',
        image : 'https://drop.ndtv.com/albums/COOKS/these-5-non-veg_637891537843222204/637891537884935063.jpeg',
        category : 'breakfast',
        cost : 'Rs. 60',
        info : `Here's another delicious chicken recipe to try. Grilled chicken, veggies, and a delectable dipping sauce are featured in this salad. This salad is easy to create at home and full of flavour. Enjoy it with a cup of coffee.`,
        type : 'Non-veg'
    },
    {
        id : 16,
        name : 'Vegan Burger',
        image : 'https://cdn.loveandlemons.com/wp-content/uploads/2019/12/vegan.jpg',
        category : 'breakfast',
        cost : 'Rs. 180',
        info : `When I say that this is the best veggie burger, I mean it. Made with wholesome plant-based ingredients like mushrooms and walnuts and seasoned with tamari and smoked paprika, these patties are hearty, satisfying, and packed with smoky umami flavor.`,
        type : 'Vegan'
    },
    {
        id : 17,
        name : 'Potato Chop',
        image : 'https://www.slurrp.com/web/_next/image?url=https%3A%2F%2Fimages.slurrp.com%2Fprod%2Farticles%2Frxv58i3em1g.webp%3Fimpolicy%3Dslurrp-20210601%26width%3D1200%26height%3D675&w=1080&q=75',
        category : 'breakfast',
        cost : 'Rs. 20',
        info : 'Aloo Chop or potato chop made of boiled potatoes and various spices is a snack originating from the Indian subcontinent.The recipe has simple ingredients like potato, ginger-garlic paste, onion, and a few Indian spices. ',
        type : 'Veg'
    },
    {
        id : 18,
        name : 'Egg Curry South Indian Style',
        image : 'https://www.indianfoodforever.com/iffwd/wp-content/uploads/egg-curry-south-indian-styl.jpg',
        category : 'lunch',
        cost : 'Rs. 150',
        info : `This is a very easy egg curry South Indian style. The addition of curry leaves make this egg curry extra tasty. What more you can make it in a jiffy. You can even make it for your next dinner party or when some guest arrives unexpected - this hardly takes 10 minutes.`,
        type : 'Non-veg'
    },
    {
        id : 19,
        name : 'Best Vegan Pizza',
        image : 'https://cdn.loveandlemons.com/wp-content/uploads/2019/12/IMG_14058.jpg',
        category : 'lunch',
        cost : 'Rs. 380',
        info : `Who says you need cheese to make a crave-worthy pizza? This easy vegan pizza may be my all-time favorite! I top chewy homemade pizza dough with a lemony cashew cream sauce, a jumble of savory, spicy, crisp, and juicy veggies, and big handfuls of fresh basil.`,
        type : 'Vegan'
    },
    {
        id : 20,
        name : 'Shahi Chicken Korma',
        image : 'https://www.indianfoodforever.com/iffwd/wp-content/uploads/shahi-chicken-korma-2.jpg',
        category : 'lunch',
        cost : 'Rs. 355',
        info : 'A finger licking good Chicken Shahi korma which is a must try for beginners and pro in Indian cooking. It’s spice level is pretty mild but you can add more chillies and making it more fiery.',
        type : 'Non-veg'
    },
]

export default data;