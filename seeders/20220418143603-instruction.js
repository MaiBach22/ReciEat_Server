"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "instructions",
      [
        {
          content: "Cook pasta according to package directions.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 1,
        },
        {
          content:
            "When the onion is golden, add the ground beef and cook to the core.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 1,
        },
        {
          content:
            "While the pasta is cooking, heat the olive oil in a frying pan, cut the onion into strips and add it to the oil.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 1,
        },
        {
          content:
            "Add the Provence herbs, bay leaf, tomato paste, crushed tomatoes to the pan and let simmer a little.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 1,
        },
        {
          content:
            "Once the pasta is cooked, drain it and add salt, pepper, butter and cheese.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 1,
        },
        {
          content: "Serve the pasta with the sauce on it.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 1,
        },

        {
          content:
            "Put the chicken in a baking dish. Meanwhile, preheat oven to 210-240 ° C (thermostat 7-8).",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 2,
        },
        {
          content:
            "Take the butter and cut it into pieces to put it on the chicken everywhere. Salt, pepper and grass the beast ...",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 2,
        },
        {
          content:
            "Attack the potatoes ... Peel them and then soak them in the water to rinse and dry them. It is necessary after cutting them. So, that's how you feel ... make pretty shapes if you want me, I just make squares. In fact, I take the potato, cut it in length, turn it, and then after cutting in the other length and then turn it in the other direction to cut it in width ... and that, that, that do some kinds of squares. And I put all the potatoes in the dish around the chicken. The dirty ones.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 2,
        },
        {
          content:
            "Then direction the oven after watering everything half a glass of water",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 2,
        },
        {
          content:
            "Cook 1h15 ... more or less depending on the chicken and potatoes. I turn it regularly during cooking, on each side ... And if necessary I darter water ... like that, potatoes bathe in the juice",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 2,
        },
        {
          content: "Once it's ready and good just serve!",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 2,
        },

        {
          content:
            "Preheat oven to 375° and line a large baking sheet with parchment paper. Separate crescent dough into 4 rectangles, pinching together seams as necessary. Cut each rectangle lengthwise into thin strips.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 3,
        },
        {
          content: "Cut each slice of American cheese into 4 strips.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 3,
        },
        {
          content:
            "Place a hot dog on top of a piece of cheese, then wrap with crescent dough to look like bandages. (You’ll need about 4 pieces of crescent dough per hot dog.) Repeat with remaining ingredients.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 3,
        },
        {
          content:
            "Place on prepared baking sheet and brush with melted butter.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 3,
        },
        {
          content:
            "Bake until crescent dough is golden and cooked through, 12 to 15 minutes.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 3,
        },
        {
          content:
            "Using a toothpick, dot mustard onto each hot dog to create eyes.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 3,
        },

        {
          content:
            "Remove rib roast from packaging and place in a roasting pan. Let come to room temperature about 30 minutes. Preheat oven to 450º.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 4,
        },
        {
          content:
            "Generously cover all sides of rib roast with salt and pepper. Place roast in a roasting pan fat-side up. Arrange half the rosemary in the bottom of the pan around the roast.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 4,
        },
        {
          content:
            "Roast 30 minutes, then reduce heat to 350º and cook 1 hour 30 minutes more for medium rare. (Plan on about 15 minutes per pound.)",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 4,
        },
        {
          content:
            "Remove roast from oven, cover with foil, and let rest 20 minutes.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 4,
        },
        {
          content:
            "To serve, slice along ribs to remove them, then separate each rib and put them aside. Slice the roast crossways against the grain. Serve on a platter with the ribs and remaining half fresh rosemary.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 4,
        },

        {
          content:
            "Preheat grill to medium heat. Trim off fibrous bottom half of broccoli stem, then quarter broccoli head into small trees.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 5,
        },
        {
          content:
            "In a large bowl, whisk together oil, Worcestershire, soy sauce, ketchup, honey, and garlic. Season with salt, pepper, and red pepper flakes. Add in broccoli and toss to coat. Let sit for 10 minutes.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 5,
        },
        {
          content:
            "Place broccoli on grill and sprinkle lightly with more salt. Grill broccoli until knife-tender and slightly charred, flipping every 2 minutes and basting with any remaining sauce, 8 to 10 minutes.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 5,
        },
        {
          content:
            "Sprinkle with Parmesan and more red pepper flakes, and serve with lemon wedges.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 5,
        },

        {
          content:
            "Combine tomatoes, cucumbers, pepper, garlic, vinegar, and water in the bowl of a food processor or blender. Blend until smooth, then add oil and blend to combine. Taste and season with salt, pepper, and more vinegar if needed. Cover and refrigerate until chilled.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 6,
        },
        {
          content:
            "Meanwhile, in a large skillet over medium heat, add enough oil to coat the bottom of the pan. Add bread and cook, stirring occasionally, until golden and crisp. Remove from heat, season with salt, and let cool.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 6,
        },
        {
          content:
            "To serve, divide soup among bowls and top with basil, croutons, and a drizzle of oil.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 6,
        },

        {
          content:
            "To make the salmon meal prep: Combine halved cherry tomatoes with olive oil, minced red onion, salt and pepper. Marinate in a shallow plate or bowl while cooking salmon and asparagus.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 7,
        },
        {
          content:
            "Season salmon with salt and pepper. Let sit while you prepare the asparagus.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 7,
        },
        {
          content:
            "Wash and trim the ends of the asparagus, then blanch them in boiling water for 2- 3 minutes then soak in ice water to stop cooking. This way they will cook faster and evenly in the skillet. You can skip this step if you have very thin asparagus. Drain and set aside.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 7,
        },
        {
          content:
            "Heat olive oil in a large cast iron skillet over medium-low heat. Gently cook salmon on both sides until golden brown. Remove the salmon fillets from the skillet and set aside to a plate.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 7,
        },
        {
          content:
            "In the same skillet over medium heat, add minced garlic then deglaze with vegetable broth (or wine). Bring to a simmer. Add butter, lemon juice, hot sauce, parsley. Give a quick stir to combine.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 7,
        },
        {
          content:
            "Add the drained blanched asparagus and toss for 2 minutes to cook it up. Add salmon back to the pan and reheat for another minute.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 7,
        },
        {
          content:
            "Divide the meal prep salmon and asparagus into meal prep containers, add marinated tomatoes, and store in the refrigerator for up to 5 days.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 7,
        },

        {
          content:
            "To make the air fryer chicken: Preheat your air fryer to 400ºF (200ºC).",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 8,
        },
        {
          content:
            "In the meantime, chop the vegetables and chicken into small pieces and transfer them to a large salad bowl.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 8,
        },
        {
          content:
            "Add the oil and all seasoning ingredients to the bowl and toss the chicken and veggies to combine.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 8,
        },
        {
          content:
            "Add the chicken and veggies to the preheated air fryer and cook for 10 minutes, shaking halfway, or until the chicken and veggies are charred and the chicken bites are cooked through.",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 8,
        },
        {
          content:
            "Serve the air fryer chicken and veggies immediately, sprinkled with parsley and red chili pepper flakes if you like. Enjoy!",
          createdAt: new Date(),
          updatedAt: new Date(),
          recipeId: 8,
        },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("instructions", null, {});
  },
};
