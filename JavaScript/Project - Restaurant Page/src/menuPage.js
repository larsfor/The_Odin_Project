const menuPage = () => {
    // 'Hi! This is the menu page.'
    const menu = document.createElement('div');

    const menuText = document.createElement("p");
    menu.innerHTML = `
    
Lunch service starts at 12:15pm, dinner at 7pm
SNACKS

Steamed edamame, sea salt
7

Gua bao, crispy soft shell crab, jalapenos
18

Spicy tuna crispy rice, red tuna, chili mayo, chilies, kumquat
19
Starters

Chicken popcorn, lemon mayonnaise
19

Sea bream, tuna and salmon maki chirashi
19

Grilled artichokes*, green apple miso
22

*with 3gr truffle
31

Gabi chakchouka, organic egg and feta cheese
20

Scallop crudo*, yuzu jelly, black pepper soy sauce
24

*with 3gr caviar
33

Salmon tataki, sweet lime sauce
19

Crab tacos, guacamole with yuzu kosho, chilies and lime*
22

*with caviar (3g)
31

Avocado salad & grilled lettuce, sesame sauce, cucumber and crispy seaweed
18
Fishes

Roasted teriyaki salmon, pickled cucumber
32

Jumbo shrimp tempura, soy marinated ginger, tentsuyu sauce
39

Kalamansi tuna, guacamole and kumquat
35

Jumbo tiger prawns Jakarta style, sauteed with tamarin and spring onions
39
Hot pot

Vegan and gluten free hot pot, mushrooms and 2gr of truffle
39

with 3gr truffle
48
MEATS

Baby chicken tandoori, korean style, raita yuzu
30

Beef filet, grilled spring onion, spicy soy juice
42

Braised pork belly, honey & sake glaze, miso mustard
32

Angus beef short ribs, 24h shio koji aged, yakiniku black pepper sauce*
42

*with 3gr truffle
51
Sides

White rice with furikake
7

Mesclun salad, miso dressing
7

Miso eggplant
9

Grilled corn wedges, parmesan & chilies, chili mayo
12

Roasted potato, shiso butter
11
"Pierre Hermé" desserts collection

Cheesecake Suzette,
crispy crumble, caramel cheesecake, orange marmalade
16

2000 feuilles,
caramelized puff pastry, mousseline hazelnut cream
16

Carrément chocolat,
Tender chocolate cake, rich chocolate cream, mousse and crisp, thin wafers of crisp chocolate
16

Ispahan,
Rose macaron biscuit, rose petal cream, raspberries and litchis
16
Desserts

Benoît Castel Chocolate cream puff, whipped cream
14

Ice-cream or sorbet (3pcs)
ice-cream: vanilla, chocolate, matcha green tea
sorbet: coco, mango
14

Home made fruit salad
16

    `;
    menu.classList.add("pageText");

    menu.appendChild(menuText);

    return menu;
}

export default menuPage;