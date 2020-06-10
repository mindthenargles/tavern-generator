
//action = 0, description = 1, needsPlural = 2
let adjectives =  [
	// 0 needs agent
	["Laughing", "Leering", "Sneering", "Smiling", 
	"Frowning", "Glaring", "Crying", "Happy", "Frightened", "Running", 
	"Prancing", "Dancing", "Leaping", "Wandering", "Barking", "Drunken", 
	"Slaughtered", "Roaring", "Howling", "Rearing", "Sleeping", "Hanging", 
	"Flying", "Galloping", "Hunted", "Drowned", "Fighting", "Swollen", 
	"Racing", "Limping", "Growling", "Yowling", "Prowling", "Horned", 
	"Fanged", "Silent", "Blind", "Naked", "Fettered"], 
	// 1 racist colors
	["Red", "Yellow", "White", "Black", "Brown", "Pale", "Dark"],
	// 2 neutral descriptors
	["Orange", "Green", "Blue", "Purple", "Pink", "Golden", "Silver", 
	"Striped", "Spotted", "Ashen", "Grey", "Dirty", "Tarnished", "Rusty", "Russet", 
	"Gilded", "Iron", "Tin", "Bronze", "Platinum", "Ochre", "Violet", 
	"Gray", "Crimson", "Indigo", "Rosy", "Umber", "Brass", "Copper", 
	"Lavender", "Stone", "Oaken", "Leaden", "Steel", "Saffron", 
	"Verdant", "Bronzed", "Electrum", "Cerulean", "Maroon", "Glass", 
	"Glazed", "Brazen", "Sanguine", "New", "Old", "Broken", "Great", 
	"High", "Upset", "Overturned", "Rotten", "Burned", "Enchanted", 
	"Shady", "Forsaken", "Ruined", "Near", "Far", "Hidden", "Sunlit", 
	"Single", "Lone", "Lonely", "Double", "Triple", "Rising", "Fallen", 
	"Crowned", "Royal", "Lucky", "Unlucky", "Cursed", "Blessed", 
	"Battered", "Smooth", "Bald"], 
	// 3 needs plural
	["Two", "Twin", "Three", "Four"]]; 
	
let nouns = [
	// 0 plants
	["Rose", "Daisy", "Lily", "Violet", "Carnation", 
	"Bluebell", "Blossom", "Crocus", "Snowdrop", "Primrose", "Jonquil", 
	"Honeysuckle", "Poppy", "Pansy", "Ambrosia", "Nightshade", "Camellia", 
	"Jasmine", "Cereus", "Dahlia", "Geranium", "Gillyflower", "Hemlock", 
	"Hibiscus", "Hyacinth", "Iris", "Lavender", "Lilac", "Lotus", 
	"Mandrake", "Marigold", "Saffron", "Pennyroyal", "Peony", "Pimpernel", 
	"Clover", "Thistle", "Tulip", "Oleander", "Orchid", "Cherry", 
	"Apple", "Plum", "Pear", "Peach", "Fig", "Chestnut", "Almond", 
	"Olive", "Filbert", "Lemon", "Lime", "Mulberry", "Persimmon", 
	"Quince", "Walnut", "Pomegranate", "Oak", "Elm", "Maple", "Pine", 
	"Fir", "Rowan", "Beech", "Cedar", "Willow", "Holly", "Laurel", 
	"Linden", "Aspen", "Birch", "Ebony", "Hazel", "Larch", "Cypress", 
	"Magnolia", "Palm", "Sycamore", "Yew", "Alder", "Juniper", "Aubergine", 
	"Grape", "Gooseberry", "Mushroom", "Pineapple", "Truffle", "Strawberry", 
	"Acorn", "Wheat", "Rye", "Potato", "Barley", "Corn", "Wormwood", 
	"Parsley", "Leaf", "Ivy", "Bush", "Log", "Branch", "Hedge", "Tree", 
	"Thorn", "Fern", "Vine"], 
	// 1 inanimates
	["Bud", "Barrel", "Hammer", "Stein", "Tankard", "Ball", "Chain", 
	"Lamp", "Shoe", "Egg", "Nut", "Goblet", "Stool", "Chair", "Table", 
	"Bridle", "Saddle", "Spindle", "Sword", "Spear", "Shield", "Bolt", 
	"Nest", "Dam", "Wall", "Gate", "Door", "Jack", "Spade", "Anchor", 
	"Sun", "Moon", "Star", "Coin", "Cup", "Rod", "Fork", "Spoon", 
	"Knife", "Heart", "Sheaf", "Cross", "Crescent", "Spur", "Cloud", 
	"Globe", "Crown", "Helm", "Hat", "Harp", "Pipe", "Drum", "Bugle", 
	"Flute", "Clarion", "Trumpet", "Axe", "Lance", "Banner", "Sickle", 
	"Key", "Anvil", "Nail", "Wheel", "Well", "Drop", "River", "Pearl", 
	"Bucket", "Plough", "Carbuncle", "Lock", "Arrow", "Bow", "Staff", 
	"Wand", "Orb", "Whip", "Pot", "Cane", "Collar", "Knot", "Mug", 
	"Lantern", "Cart", "Yoke", "Tub", "Tun", "Block", "Tackle", "Bone", 
	"Comb", "Rock", "Scale", "Pin", "Lute", "Fiddle", "Distaff", 
	"Tap", "Cork", "Cap", "Fetter", "Gallows", "Post", "Stirrup", 
	"Ring"],
	// 2 animal parts
	["Tooth", "Skull", "Tail", "Claw", "Horn", "Hoof", "Wing", "Feather", 
	"Antler", "Tusk", "Beak", "Fang", "Sting", "Beard"], 
	// 3 animals
	["Bull", "Pony", "Stag", "Hart", "Deer", "Hind", "Wolf", 
	"Lamb", "Goat", "Dog", "Hound", "Hare", "Coney", "Rabbit", "Hog", 
	"Pig", "Sow", "Cow", "Steer", "Fox", "Cat", "Lion", "Tiger", "Bear", 
	"Rat", "Giraffe", "Hippo", "Antelope", "Rhino", "Hyena", "Jackal", 
	"Camel", "Mule", "Horse", "Donkey", "Steed", "Baboon", "Badger", 
	"Hedgehog", "Weasel", "Mink", "Beaver", "Cub", "Boar", "Bat", 
	"Panther", "Elk", "Moose", "Ape", "Leopard", "Pard", "Elephant", 
	"Cougar", "Puma", "Pup", "Mastiff", "Calf", "Colt", "Foal", "Filly", 
	"Ox", "Yak", "Buck", "Doe", "Fawn", "Roe", "Kit", "Stallion", "Mare", 
	"Stoat", "Greyhound", "Ibex", "Ram", "Sheep", "Wombat", "Possum", 
	"Raccoon", "Porcupine", "Squirrel", "Monkey", "Mole", "Capybara", 
	"Camelopard", "Mouse", "Otter", "Eel", "Dolphin", "Fish", "Shark", "Crab", 
	"Octopus", "Seahorse", "Whale", "Perch", "Trout", "Mackerel", 
	"Herring", "Seal", "Walrus", "Carp", "Turtle", "Toad", "Frog", 
	"Salamander", "Tortoise", "Lizard", "Snake", "Serpent", "Crocodile", 
	"Alligator", "Viper", "Adder", "Eagle", "Cock", "Hen", "Owl", 
	"Hawk", "Tern", "Gull", "Albatross", "Songbird", "Goose", "Swan", 
	"Vulture", "Raven", "Crow", "Jay", "Cockerel", "Rooster", "Gander", 
	"Duck", "Duckling", "Dove", "Robin", "Bluebird", "Finch", "Sparrow", 
	"Bird", "Stork", "Crane", "Heron", "Loon", "Buzzard", "Turkey", "Lark", 
	"Pheasant", "Martlet", "Emu", "Magpie", "Osprey", "Ostrich", "Parrot", 
	"Pelican", "Quail", "Spider", "Bee", "Wasp", "Locust", "Grasshopper", 
	"Ant", "Scorpion", "Beetle", "Flea", "Dragonfly", "Butterfly", 
	"Pegasus", "Dragon", "Roc", "Griffin", "Manticore", "Yeti", "Gorgon", 
	"Owlbear", "Hippogriff", "Chimera", "Ettin", "Flumph", "Gargoyle", 
	"Basilisk", "Unicorn", "Drider", "Wyvern", "Hippocampus", "Phoenix"], 
	// 4 humanoids 
	["Dwarf", "Elf", "Orc", "Demon", "Devil", "Banshee", "Fairy", 
	"Mermaid", "Giant", "Kobold", "Ogre", "Troll", "Harpy", "Cyclops", 
	"Gnoll", "Hobgoblin", "Dryad", "Undine", "Nymph", "Centaur", "Hag", 
	"Imp", "Drow", "Goblin", "Pixie", "Bugbear", "Minotaur", "Angel", 
	"Satyr", "Sphinx", "Knight", "Jester", "Man", "Bandit", "Gladiator", 
	"Maid", "Maiden", "Sailor", "Soldier", "Rider", "Child", "Queen", 
	"King", "Thief", "Smith", "Priest", "Wizard", "Witch", "Mage", 
	"Sage", "Scholar", "Knave", "Seamstress", "Laundress"],
	// 5 people parts
	["Arm", "Leg", "Head", "Hand", "Foot", "Tongue", "Mouth", "Thumb", 
	"Toe",]];

function chooseRandInt(range) {
	//return random integer in range == number of formats
	let randInt = Math.floor((Math.random() * range))
	return randInt;
};

function chooseAdj() {
	//concat arrays for random adj
	let allAdj = adjectives[0].concat(adjectives[1], adjectives[2], adjectives[3]);
	//random index
	let randInt = chooseRandInt(allAdj.length);
	let adj = allAdj[randInt];
	return adj;
};

function needsPlural(adj) {
	//return t/f adj in last array in array, plural reqd
	return adjectives[adjectives.length - 1].includes(adj);
};

function pluralize(noun) {
	//different noun arrays for plural rules: irregular 
	let irrSg = ["Ox", "Mouse", "Goose", "Man", "Child", "Foot", "Tooth" ];
	let irrPl = ["Oxen", "Mice", "Geese", "Men", "Children", "Feet", "Teeth"];
	let samePl =["Deer", "Elk", "Moose", "Sheep", "Fish", "Perch", 
	"Trout", "Carp", "Drow", "Gallows", "Rye", "Wheat", "Barley", "Corn", ];
	if (samePl.includes(noun)) { 
		//plural is unchanged
	} else if (irrSg.indexOf(noun) != -1){ 
		//plural is irregular
		noun = irrPl[irrSg.indexOf(noun)];
	} else if (/f$/.test(noun) || /fe$/.test(noun) && !(noun == ("Giraffe" || "Mastiff"))) { 
		//"f" && "fe" && "ff" become "ves"
		noun = noun.slice(0, noun.indexOf("f", (noun.length - 2)));
		noun = noun + "ves";
	} else if (/y$/.test(noun) && !(/[aeou]y$/.test(noun))) { 
		//"y" && !"ey" becomes "ies"
		noun = noun.slice(0, noun.length - 1)
		noun = noun + "ies";
	} else if (/[osx]$/.test(noun) || /ch$/.test(noun)) { 
		//"s" || "x" || "o" || "ch" add "es"
		noun = noun + "es";
	} else { 
		//regular, add s
		noun = noun + "s";
	};
	return noun;
};

function sortNouns(adj) {
	let nounArray = [];
	// adj describes agent
	if (adjectives[0].includes(adj)) {
		nounArray = nouns[3].concat(nouns[4]);
	} else if (adjectives[1].includes(adj)) {
		//stop before last two items, people and people parts
		for (let i = 0; i < (adjectives.length - 2); i++) {
			nounArray = nounArray.concat(nouns[i]);
		}
	} else {
		for (let i = 0; i < adjectives.length; i++){
			nounArray = nounArray.concat(nouns[i]);
		}
	}
	return nounArray;
};

function chooseNoun(fromArray, needsPlural) {
	//random index
	let randInt = chooseRandInt(fromArray.length);
	let noun = fromArray[randInt];
	//pluralize as needed/on chance
	if (needsPlural || (Math.random() *5) > 4) {
		noun = pluralize(noun);
	};
	return noun;
};

function possessive(noun) {
	//define exceptions
	let singularS = ["Octopus", "Walrus", "Albatross", "Pegasus", 
	"Hippocampus", "Cyclops", "Seamstress", "Laundress", "Crocus", 
	"Cereus", "Hibiscus", "Iris", "Lotus", "Cypress", "Cross", "Gallows"];
	if (/s$/.test(noun) && !(singularS.includes(noun))) {
	//if ends in s and not in singularS	
	noun = noun + "\'";
	} else {
	// else +"\'s"
	noun = noun + "\'s";
	};
	return noun;
};

function display(tavern) {
	let newName = document.createElement('p');
	newName.textContent = tavern;
	newtext.prepend(newName);
	//document.getElementById("name").textContent = tavern;
};

function coinflipThe(firstWord) {
	if (Math.random() * 3 > 1) {
		firstWord = "The " + firstWord;
	} else if ((Math.random() * 4) > 3) {
		firstWord = "The Sign of the " + firstWord;
	};
	return firstWord;
};

function theAdjNoun() {
	//get adj
	let adj = chooseAdj();
	//require plural? 
	let plural = needsPlural(adj);
	//build array of valid nouns
	let nounArray = sortNouns(adj);
	//get noun
	let noun = chooseNoun(nounArray, plural);
	//coinflip "The"
	adj = coinflipThe(adj);
	//display string to HTML 
	let sign = adj + " " + noun;
	//console.log(sign);
	return (sign);
};

function theAniNoun() {
	let agents = nouns[3].concat(nouns[4]);
	let agent = chooseNoun(agents, false); 
	agent = possessive(agent);
	let items = nouns[0].concat(nouns[1], nouns[2], nouns[5]);
	item = chooseNoun(items, false);
	//coinflip "The"
	agent = coinflipThe(agent);
	//concat string
	let sign = agent + " " + item;
	return (sign);
};

function nounAndNoun() {
	let nounArray = nouns[0].concat(nouns[1]);
	let noun1 = chooseNoun(nounArray, false)
	let noun2 = chooseNoun(nounArray, false)
	//coinflip "The"
	noun1 = coinflipThe(noun1);
	//concat string
	let sign = noun1 + " and " + noun2;
	return (sign);
};

function namesPlace() {
	//need name array
	//coinflip choose place
	//possessive(name)
	//concat string 
};

function generate() {
	let format = chooseRandInt(3);
	//integer designates function
	let sign = "";
	switch(format) {
		case 0: 
			sign = theAdjNoun();
			break;
		case 1: 
			sign = theAniNoun();
			break;
		case 2: 
			sign = nounAndNoun();
			break;
	};
	//test and exclude bad combos
	//display string
	display(sign);
	
};

/*refactor as objects: format functions generate new object of given format
 * display refers to properties 
 * is there a reason to do this? maybe as functions bloat
 * */
 
 /* stretch goals: 
  * come back for namesPlace format with NPC generator name list
  * css 
  * random fonts
  * details like proprietor and type of establishment
  * */
