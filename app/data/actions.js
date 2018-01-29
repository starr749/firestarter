(function() {
  var act = angular.module('actions', []);

  var blankActions = {
    "Strike": "-",
    "Great Strike": "-",
    "Block & Strike": "-",
    "Lock & Strike": "-",
    "Avoid": "-",
    "Block": "-",
    "Counterstrike": "-",
    "Assess": "-",
    "Change Stance": "-",
    "Charge/Tackle": "-",
    "Draw Weapon": "-",
    "Physical Action": "-",
    "Push": "-",
    "Lock": "-",
    "Get Up": "-",
    "Beat": "-",
    "Disarm": "-",
    "Feint": "-",
    "Throw Person": "-",
    "Throw Object/Weapon": "-",
    "Aim": "-",
    "Nock Arrow and Draw Bow": "-",
    "Reload Crossbow or Gun": "-",
    "Fire Gun or Crossbow": "-",
    "Release Bow": "-",
    "Snapshot": "-",
    "Cast Spell": "-",
    "Drop Spell": "-",
    "Command Spirit": "-",
    "Command": "-",
    "Intimidate": "-",
    "Stand and Drool": "-",
    "Fall Prone (and beg for mercy)": "-",
    "Run Screaming": "-",
    "Swoon": "-",
    "No Action": "-"
  }

  act.constant('ACTIONS',
    {
      "dow": [
        {
          "id": 1,
          "name": "Point",
          "category": "Verbal Attack Actions",
          "tests": "Coarse Persuasion, Interrogation, Oratory, Persuasion, Poisonous Platitudes, Rhetoric, Stentorious Debate",
          "speaking": "The Point action is the main attack of the verbal duelist. Hammer away using your statement of purpose and related points!",
          "effects": "In a standard test, subtract your Point successes from your opponent’s body of argument. In a versus test, subtract the margin of success from your opponent’s body of argument.",
          "special": ""
        },
        {
          "id": 2,
          "name": "Dismiss",
          "category": "Verbal Attack Actions",
          "tests": "Coarse Persuasion,Command, Intimidation, Oratory, Religious Diatribe, Rhetoric, Stentorious Debate, Ugly Truth",
          "speaking": "This maneuver is used for the cataclysmic and undeniable conclusion of your argument. Loudly declare that your opponent knows nothing about the topic at hand and furthermore, he’s a fool and a dullard and shouldn’t be listened to any further!",
          "special": "If a character fails to win the duel via his Dismiss action, he must hesitate for his next volley. Either cross off the next action, or skip the first volley of the coming exchange.",
          "effects": "Scripting a Dismiss adds +2D to the character’s skill. In a standard test, subtract each success rolled from your opponent’s body of argument. Against Rebuttal, subtract your margin of success over your opponent’s defense from the body of argument. If you win against Obfuscate, all Dismiss successes are subtracted from the body of argument—not just your margin of success."
        },
        {
          "id": 3,
          "name": "Avoid the Topic",
          "category": "Verbal Defense Actions",
          "tests": "Will",
          "speaking": "The speaking player must veer off topic, even to the point of sounding desperate or ridiculous.",
          "effects": "Avoid successes are subtracted from your opponent’s Point, Obfuscate, or Incite successes. This reduces the effectiveness of an incoming point. If Obfuscate or Incite successes aren’t reduced to zero, the the incoming action wins and takes effect.",
          "special": ""
        },
        {
          "id": 4,
          "name": "Obfuscate",
          "category": "Verbal Defense Actions",
          "tests": "Falsehood, Oratory, Poisonous Platitudes, Rhetoric, Soothing Platitudes, Stentorious Debate, Suasion, Ugly Truth",
          "speaking": "Obfuscate is a verbal block, The player attempting to Obfuscate must present some non sequitur or bizarre, unrelated point in an attempt to confuse or disract his opponent. Obfuscate is spoken while your opponent is speaking",
          "effects": "Avoid successes are subtracted from your opponent’s Point, Obfuscate, or Incite successes. This reduces the effectiveness of an incoming point. If Obfuscate or Incite successes aren’t reduced to zero, the the incoming action wins and takes effect.",
          "special": "Obfuscate is tested versus everything, even itself. If the Obfuscator wins, the victim of this tactic loses his current action. If the Obfuscator exceeds his obstacle, his opponent also suffers a +1 Ob to his next action. If the Obfuscator loses the versus test, his opponent’s current action goes off and his successes are applied as per his action description. Furthermore, he gains +1D to his next action."
        },
        {
          "id": 5,
          "name": "Rebuttal",
          "category": "Verbal Defense Actions",
          "tests": "Extortion, Interrogation, Oratory, Persuasion, Poisonous Platitudes, Rhetoric, Stentorious Debate, Persuasion",
          "speaking": "The player first lets his opponent make his attack. He then refutes the arguments made while making a fresh point himself.",
          "effects": "Successes from the defense roll are subtracted from the opponent’s successes. To fully defend against an Obfuscate action, you must get more defense successes that your opponent’s Obfusctate successes. Each success on the attacking portion of a Rebuttal reduces your opponent’s body of argument.",
          "special": "When making a Rebuttal, you must divide your dice between attack and defense. This division happens before your opponent rolls. You must put at least one die in each pool. Any penalties to the action are applied to both pools. Any bonuses to the action are applied to either attack or defense."
        },
        {
          "id": 6,
          "name": "Feint",
          "category": "Special Verbal Actions",
          "tests": "Extortion, Falsehood, Interrogation, Persuasion, Poisonous Platitudes, Religious Diatribe, Rhetoric, Soothing Platitudes, Seduction",
          "speaking": "Using a Feint, the speaker leads his opponent into a trap. He lures him to think he is discussing one point, until his hidden barb is revealed.",
          "effects": "Feint can be used to bypass Rebuttal and to attack Feint, Incite and Obfuscate. In a standard test, each success subtracts from your opponent’s body of argument. In a versus test, margin of success is subtracted from your opponent’s body of argument.",
          "special": ""
        },
        {
          "id": 7,
          "name": "Incite",
          "category": "Special Verbal Actions",
          "tests": "Coarse Persuasion, Command, Extortion, Falsehood, Intimidation, Seduction, Ugly Truth",
          "speaking": "With an acid tongue and biting wit, a character may attempt to distract or dismay his opponent. The speaking player must pronounce an outright insult to his opponent.",
          "effects": "In a standard test, the obstacle is equal to the victim’s Will exponent. If the Inciting player passes the standard test or wins the versus test, the victim must make a Steel test. If the victim hesitates, he misses his next action. However, if the Incite fails, the margin of failure is added as advantage dice to the opponent’s next test.",
          "special": ""
        }
      ],
      fight: [
        {
          "id:": 1,
          "name": "Strike",
          "category": "Attack Actions",
          "Test": "Weapon, Brawling, Boxing",
          "Effect": "Effect: Successes over the obstacle or margin of success in versus tests are used to increase " +
          "damage and target a specific location. See the weapons chapter for instructions on doing damage. You can only " +
          "Strike consecutively a number of times equal to your weapon speed. If you're alternating between different " +
          "weapons, use the lower weapon speed."
        },
        {
          "id:": 2,
          "name": "Great Strike",
          "category": "Attack Actions",
          "Test": "Weapon, Brawling, Boxing",
          "Restrictions": "Great Strike costs two actions to perform. On the first action, you take a breath " +
          "to set up your attack. You are effectively defenseless on this action; you count as Stand and Drool " +
          "hesitating. Also, while any weapon can perform a Great Strike, you must be able to put two hands on the " +
          "weapon to do so. A Great Strike counts as one action against your weapon speed limitation.",
          "Effect": "A Great Strike, is a lunging thrust, an overhand strike or a half-sword technique. " +
          "On the second action, Great Strike acts like a Strike but with two exceptions: It bypasses the Block action " +
          "and it grants a bonus to damage or armor penetration. Choose before you roll: +1 to your Incidental, Mark " +
          "and Superb damage results or +1 to your weapon's versus armor rating."
        },
        {
          "id:": 3,
          "name": "Block & Strike",
          "category": "Attack Actions",
          "Test": "Block and Strike tests the character's weapon skill. Divide your dice into two pools before " +
          "rolling—one for defense, one for attack. Add any shield dice to the defense portion, less the versus " +
          "armor rating of your opponent's weapon.",
          "Effect": "Successes from the Block portion reduce the successes of your opponent's action. " +
          "The Strike dice act like a Strike action. Apply penalties from wounds, light, weather and knock down to " +
          "both parts of the actions. Any advantages are only applied to one side. " +
          "You don't have to allocate any skill dice to defense, you can rely solely on your shield to protect you. " +
          "Disadvantage from weapon length or vying for position only applies to the Strike portion.",
          "Interactions": "Block and Strike counts as Block and a Strike for the purposes of interactions. " +
          "Test your divided pool against the possible interactions for both of those actions. Against Counterstrike, " +
          "both characters defend and both attack according to their action."
        },
        {
          "id:": 4,
          "name": "Lock & Strike",
          "category": "Attack Actions",
          "Restrictions": "Restrictions: This action requires a special trait like Crushing Jaws.",
          "Test": "Savage Attack",
          "Effect": "Successes over the obstacle count as damage as per the standard IMS damage rules and as a Lock " +
          "as per the Lock action."
        },
        {
          "id:": 5,
          "name": "Avoid",
          "category": "Defensive Actions",
          "Test": "Speed",
          "Effect": "Successes from the Avoid action reduce the effectiveness of " +
          "the opposing action. If you roll one success on an Avoid, and your " +
          "opponent rolls two, you°ve reduced his effective total to one. If you " +
          "roll two and he rolls two, you have stopped his action altogether.",
          "Special": "Avoid defends against all incoming attack, basic and special " +
          "actions. Test once; let Avoid successes ride for the action. Avoid is " +
          "special: it never suffers a double—obstacle penalty for being unskilled. " +
          "It does not protect against Shooting, Throwing or Magical Actions."
        },
        {
          "id:": 6,
          "name": "Block",
          "category": "Defensive Actions",
          "Test": "Weapon, Brawling, or Boxing",
          "Effect": "Block deflects and redirects the incoming attack. Like Avoid, " +
          "your successes reduce the effectiveness of the opposed action. Each " +
          "Block success reduces your opponent°s total. If you roll successes " +
          "equal to your opponent, you°ve stopped his action completely. If " +
          "you roll additional successes, you can spend your margin of success " +
          "as follows:" +
          "\n - One extra success: +1D to your next action or, to vying for position " +
          "if Block is your last action of the exchange)." +
          "\n - Two extra successes: +1 Ob to the blocked character°s next action." +
          "\n - Three extra successes: Blocked character loses his next action. He " +
          "hesitates, but may only Stand and Drool as a result.",
          "Note": "These effects can only be generated through the use of the " +
          "Block action. Counterstrike, Change Stance and the Block & Strike " +
          "actions do not gain these extra effects."
        },
        {
          "id:": 8,
          "name": "Counterstrike",
          "category": "Defensive Actions",
          "Test": "Your Weapon, Brawling or Boxing skill. After " +
          "actions are revealed, but before your opponent rolls, divide your " +
          "fighting skill and any advantages into two pools—one for defense " +
          "and one for attack.",
          "Effect": "In versus tests, use the defensive portion to oppose your " +
          "opponent’s action. Successes from yo1u' defense reduce his successes. " +
          "The attack portion counts as a Strike action. However, the Strike " +
          "portion of Counterstrike doesn°t suffer disadvantages from weapon " +
          "length or vying for position."
        },
        {
          "id:": 9,
          "name": "Assess",
          "category": "Basic Actions",
          "Description": "Assessing allows a player to look for specific details—easy exits, " +
          "the sources of that burning smell and unarmored locations on his " +
          "opponent.",
          "Test": "Perception",
          "Special": "An assess takes one action. This is a quick, over the shoulder " +
          "glance. Additional actions may be spent on an assess in order to " +
          "gain advantage dice to the Perception test— +1D for a second action " +
          "and +2D for a third."
        },
        {
          "id:": 10,
          "name": "Change Stance",
          "category": "Basic Actions",
          "Test": "It does not require a test to change stances. There are three " +
          "fighting stances: neutral, defensive and aggressive. Decide which " +
          "stance you're changing to when you select this action",
          "Neutral Stance": "Neutral stance is the default. You start a fight in neutral " +
          "stance unless otherwise noted. It grants no advantage and suffers no " +
          "disadvantages. The Change Stance: Neutral action counts as a Feint.",
          "Defensive Stance": "Defensive stance grants +2D to Avoid, Block and " +
          "Counterstrike. Strike and Great Strike suffer a +2 Ob penalty when " +
          "performed from defensive stance. The Change Stance: Defensive " +
          "action counts as a Block.",
          "Aggresive stance": "Aggressive stance grants +2D to Strike and Great " +
          "Strike. Block and Counterstrike suffer +2 Ob penalty. You may not " +
          "Avoid. If you accidently script Avoid while in aggressive stance, " +
          "you hesitate for a11 action. The Change Stance: Aggressive action " +
          "counts as the first action of Intimidate (found in the Social Actions " +
          "section). If you wish to complete the action, script one more action " +
          "of Intimidate. See Social Actions for rules on intimidate.",
          "Special": "Instead of using the stance dice as a bonus to actions in the " +
          "script, a player may use his +2D bonus to aid him vying for position. " +
          "Obviously, this must be declared at the top of the exchange. Stance " +
          "dice used to position cannot then be used as a bonus to actions, but\n" +
          "all other action/stance penalties apply.",
          "Restrictions": "You keep your stance until you change stance, disengage, " +
          "are incapacitated, hesitate or use the Charge/Tackle action. Any of " +
          "these conditions automatically drops the character back to neutral " +
          "stance. You may be Locked (but not incapacitated), on top of your " +
          "opponent, on your back, riding a horse or unskilled and still take " +
          "a stance."
        },
        {
          "id:": 11,
          "name": "Charge/Tackle",
          "category": "Basic Actions",
          "Test": "Your Power with a +1D advantage plus stride " +
          "advantage. Charge/Tackle must be your first action in the volley.",
          "Effect": "When performing this action, choose whether you're charging " +
          "your opponent or tackling him. If you charge, you attempt to knock " +
          "him down but you remain on your feet yourself. If you tackle, you " +
          "take your opponent down with you. If you win the versus test by " +
          "one or meet your obstacle in a standard test, you stagger your " +
          "opponent. He's at +1 Ob to his next test, whatever it may be. If you " +
          "win the versus test by two or exceed your obstacle in the standard " +
          "test, you knock your opponent down. He is off his feet and suffers " +
          "the appropriate penalties until he rights himself.",
          "Charge": "If you successfully charge, you also take the advantage for " +
          "your hands or for whatever weapon you're holding except spears " +
          "and missiles—your choice.",
          "Tackle": "If you tackle your opponent, you take the advantage at the " +
          "Hands fighting distance. If you successfully tackle your opponent, " +
          "he may not use the Shooting and Throwing or Magic actions. There " +
          "is one exception: He may discharge a pistol at this range.",
          "Restrictions": "Your stance reverts to neutral stance if you Charge/" +
          "Tackle. if you fail this action, you give your opponent the advantage " +
          "and lose your next action.",
          "Special": "When you use this action you change weapons to your hands, " +
          "unless you're using a shield which uses the short weapon length."
        },
        {
          "id:": 12,
          "name": "Draw Weapon",
          "category": "Basic Actions",
          "Action Cost": "Two actions are required to unsheath/unsling a handheld " +
          "weapon. This includes “sheathed swords, throwing knives, slung " +
          "crossbows, etc. Readying a weapon before a fight—on a strap or in " +
          "an off hand—decreases draw time to one action."
        },
        {
          "id": 13,
          "name": "Physical Action",
          "category": "Basic Actions",
          "Test": "Physical actions typically use Power (to rip something open), " +
          "Agility (to grab solnething) or Speed (to vault something).",
          "Action Cost": "Physical acts eat up two actions.",
          "Effect": "This category of actions covers everything from overttuning " +
          "tables to opening doors and climbing tln'ough windows."
        },
        {
          "id": 14,
          "name": "Push",
          "category": "Basic Actions",
          "Test": "Push tests Power. Push uses the Hands weapon length.",
          "Effect": "If you win the versus test by one or meet your obstacle in a " +
          "standard test, you stagger your opponent: He's at +1 Ob to his next " +
          "test, whatever it may be. If you win the versus test by two or exceed " +
          "your obstacle in a standard test, you stagger your opponent and " +
          "take the advantage so long as your weapon length is long or shorter. " +
          "If you win the versus test by three or exceed your obstacle by two in " +
          "a standard test, you knock your opponent down. He is off his feet " +
          "and suffers the appropriate penalties until he rights himself.",
          "Special": "Vhen you use this action you change weapons to your hands, " +
          "unless you°re using a shield which uses the short weapon length."
        },
        {
          "id": 15,
          "name": "Lock",
          "category": "Basic Actions",
          "Test": "Lock tests Power. Lock uses the Hands weapon length.",
          "Effect": "If you win the versus test by one or meet your obstacle in " +
          "a standard test, you grab your opponent: His Agility, Speed, " +
          "Power and Forte and his fighting, shooting and magical skills " +
          "are all reduced by one die. Each additional success reduces your " +
          "opponent°s abilities by another point. (Reflexes is not reduced.)",
          "Pulled In": "If you manage to grab your opponent with a Lock, you pull " +
          "him in. You have the advantage at the Hands fighting distance.",
          "In Your Face": "If you successfully Lock your opponent, he may not use " +
          "the Shooting and Throwing or Magic Actions with one exception: " +
          "He may shoot if he°s using a pistol.",
          "Increase the Pressure": "You can script multiple Lock actions and " +
          "increase the value of your Lock on your opponent. You maintain " +
          "your grip so long as your opponent fails to escape, you don’t hesitate " +
          "or voluntarily let go. Each additional successful Lock test further " +
          "reduces your opponent°s abilities by your margin of success.",
          "Incapacitation": "If you reduce your opponent°s Agility, Speed, Power " +
          "or Forte to zero dice, he is incapacitated. He may not resist or act " +
          "in any fashion Lmtil you release hirn. Skills cannot be used at all.",
          "Escaping Locks": "If you're in a Lock and wish to escape, use the Avoid " +
          "action but replace Speed with Agility, Power or Forte (your choice). " +
          "If scripted against a Dash interaction, test Avoid against Ob O, " +
          "otherwise use the results of the versus test. Margin of success for the " +
          "action reduces any standing Lock penalty. The dice are regained " +
          "and may be used on the next action.",
          "Special": "When you use this action you change weapons to yorn' hands.",
          "Restriction": "You must have at least one hand free to perform this " +
          "action. If you do not, you drop one item that you’re holding as you " +
          "go for the grab. You cannot vie for position, engage or disengage " +
          "until you've broken or let go of any locks."
        },
        {
          "id": 16,
          "name": "Get Up",
          "category": "Basic Actions",
          "Description": "Characters are always getting knocked down. lt requires two actions " +
          "to get up from being laid flat. See the Knocked Down rules."
        },
        {
          "id": 17,
          "name": "Beat",
          "category": "Special Actions",
          "Test": "Weapon Skill",
          "Effect": "If you meet the obstacle or win the versus test, you steal the " +
          "advantage from your opponent. He now suffers the appropriate " +
          "disadvantage according to your weapons and you gain an advantage " +
          "to the positioning test at the start of the next exchange (provided " +
          "you maintain advantage). If you already have the advantage, you " +
          "can give your opponent a +1 Ob penalty to his next action or you " +
          "can take +1D to your next action. You choose.",
          "Special": "Gain a +1D advantage to the Beat test if you're using two " +
          "hands on your weapon. You cannot hold anything in your off hand!"
        },
        {
          "id": 18,
          "name": "Disarm",
          "category": "Special Actions",
          "Test": "Weapon or Boxing Skill",
          "Effect": "Disarm is a difficult action to pull off, but if successful its " +
          "results are spectacular. If successful, you knock your opponent's " +
          "weapon away. A successful Disarrn also grants you the advantage " +
          "for your weapon.",
          "Special Versus Test Rules": "ln order to Disarm someone in a versus test, " +
          "you must win by a margin of success equal to his weapon skill—" +
          "except in the case of Disarm vs Feint. Hence the + sign in the " +
          "interactions tables for Disarm."
        },
        {
          "id": 19,
          "name": "Feint",
          "category": "Special Actions",
          "Test": "Weapon or Boxing Skill",
          "Effect": "Feint is a special attack designed to defeat defenses. Feint does " +
          "damage like a Strike. See the Weapons chapter for the damage rules."
        },
        {
          "id": 20,
          "name": "Throw Person",
          "category": "Special Actions",
          "Test": "Boxing Skill",
          "Effect": "If you win the versus test by one or meet your obstacle in a " +
          "standard test, you successfully throw your opponent off his feet and " +
          "he suffers the appropriate penalties until he rights himself. You can " +
          "choose how to spend additional successes: One additional success " +
          "can be spent to do an Incidental bare—fisted hit or cause a Steel test. " +
          "Two additional successes can be spent to cause a Mark hit or an " +
          "Incidental and a Steel test. Four additional successes can be spent " +
          "to deliver a Superb hit.",
          "Restrictions": "You must have a hand free to perform this action. If you " +
          "do not, you drop your weapon as you go for the grab."
        },
        {
          "id": 21,
          "name": "Throw Object/Weapon",
          "category": "Shooting and Throwing Actions",
          "Action Cost": "It costs two actions to throw a weapon like a knife or stone",
          "Test": "Test Throwing skill. lt°s an Ob 2 test to hit plus disadvantages " +
          "from vying for position, weather and light.",
          "Restrictions": "Once you throw, you cede advantage to your target"
        },
        {
          "id": 22,
          "name": "Aim",
          "category": "Shooting and Throwing Actions",
          "Special": "A player may spend actions aiming a loaded and ready " +
          "weapon—a knife in the hand, nocked and drawn bow, a loaded " +
          "gun, etc. Each action spent gives a +1D advantage. Characters may " +
          "aim for as many actions as half their Perception exponent rounded " +
          "up. When aiming with a crossbow, gun or thrown weapon, script " +
          "your Aim actions first, then script your Throw or Fire actions. " +
          "When aiming a bow, put your Aim actions after your Nook and " +
          "Draw actions, before you script Release."
        },
        {
          "id": 23,
          "name": "Nock Arrow and Draw Bow",
          "category": "Shooting and Throwing Actions",
          "Effect": "This extended action readies your bow to shoot. Each type of " +
          "bow has a different load time: Hunting bow, 5 actions; Elven bow, 5 " +
          "actions; Great bow, 7 actions. To hit your target, script the Release " +
          "action after Nook and Draw.",
          "Special": "You can prep a bow and keep it ready by spending three " +
          "actions to nock the arrow. Then when you waitt to get down to " +
          "business, you can pay the remainder of the Nook and Draw action " +
          "to finish readying it. “Always keep an arrow nocked“ is a good \n" +
          "Instinct."
        },
        {
          "id": 24,
          "name": "Reload Crossbow or Gun",
          "category": "Shooting and Throwing Actions",
          "Special": "Crossbows and pistols require 16 actions to draw and load. " +
          "Heavy crossbows and muskets require 32 actions."
        },
        {
          "id": 25,
          "name": "Fire Gun or Crossbow",
          "category": "Shooting and Throwing Actions",
          "Action Cost": "It costs two actions to fire a gun or crossbow in combat.",
          "Test": "Firearms or Crossbow skill as appropriate. lt°s an Ob 2 test to " +
          "hit with a gun (plus disadvantages for vying for position, light and " +
          "weather).",
          "Restrictions": "Once you fire, you cede advantage to your target"
        },
        {
          "id": 26,
          "name": "Release Bow",
          "category": "Shooting and Throwing Actions",
          "Action Cost": "One action is required to release an arrow from your bow.",
          "Test": "Bow skill against Ob l plus disadvantages for vying for position " +
          "wounds and other appropriate conditions.",
          "Restrictions": "Once your arow is released, you cede advantage to your target"
        },
        {
          "id": 27,
          "name": "Snapshot",
          "category": "Shooting and Throwing Actions",
          "Description": "You can use a snapshot with a bow, crossbow, gun or thrown weap on.",
          "Effect": "For a crossbow, gun or thrown weapon, a snapshot costs one " +
          "action. For a bow of any type, a snapshot reduces your draw and " +
          "nock time by one action. It allows you to release one action sooner.",
          "Test": "Snapshot is an Ob 4 test for the Bow, Crossbow, Firearms, or " +
          "Throwing skill.",
          "Restriction": "You may not aim a Snapshot, and once you snap that shot " +
          "off, you cede advantage to your opponent."
        },
        {
          "id": 28,
          "name": "Cast Spell",
          "category": "Magic Actions",
          "Special": "Spells take a number of actions to perform. Spell actions must " +
          "be performed continuously and without interruption (otherwise " +
          "bad things happen). Spells have weapon lengths. See the Sorcery " +
          "chapter for details. Spell casting suffers from weapon length and " +
          "vying for position disadvantage penalties at the time of its release. " +
          "if you have the advantage, there's no worry. If you’ve lost (or never " +
          "gained) the advantage, apply the appropriate obstacle penalties.",
          "Test": "Sorcery or appropriate spell-casting skill after the sorcerer has " +
          "spent the prerequisite actions casting the spell.",
          "Effect": "Spells l1ave effects listed in their individual descriptions."
        },
        {
          "id": 29,
          "name": "Drop Spell",
          "category": "Magic Actions",
          "Special": "If a caster no longer wishes to concentrate on a spell being " +
          "sustained, it costs one action to drop it."
        },
        {
          "id": 30,
          "name": "Command Spirit",
          "category": "Magic Actions",
          "Description": "A summoner may command a spirit using Spirit Binding during a " +
          "fight. It only costs one action, but it’s very risky. See the Magic Burner."
        },
        {
          "id": 31,
          "name": "Command",
          "category": "Social Actions",
          "Action Cost": "Commanding another character to get back into the fight " +
          "costs two actions.",
          "Effect": "Command can help reduce hesitation. See the Command skill " +
          "description for the rules."
        },
        {
          "id": 32,
          "name": "Intimidate",
          "category": "Social Actions",
          "Action Cost": "Using the Intimidation skill on another character in a melee " +
          "costs two actions.",
          "Test": "Intimidation Ob = Will",
          "Effect": "If successful, target must test Steel. Your target hesitates for " +
          "one action per point of margin of failure."
        },
        {
          "id": 33,
          "name": "Stand and Drool",
          "category": "Hesitation Actions",
          "Description": "The character is stunned. He does nothing while hesitating."
        },
        {
          "id": 34,
          "name": "Fall Prone (and beg for mercy)",
          "category": "Hesitation Actions",
          "Description": "The character falls to his knees or stomach and pleads for his life in " +
          "the name of compassion, honor, mercy or the gods."
        },
        {
          "id": 35,
          "name": "Run Screaming",
          "category": "Hesitation Actions",
          "Description": "The character drops what he is holding, turns about and bolts for the " +
          "exit. If the hesitation crosses the top of the exchange, the player must " +
          "choose to disengage. He does not have access to weapon length dice."
        },
        {
          "id": 36,
          "name": "Swoon",
          "category": "Hesitation Actions",
          "Description": "The character passes out. He°s out of the fight. If appropriate, he " +
          "appears dead! He cannot be acted against unless another character " +
          "pays special attention to him——to finish him, slit his throat, check his " +
          "pulse or whatever."
        }
      ]

    });
  act.constant('INTERACTIONS',
    {
      "dow": {
        "Avoid the Topic": {
          "Avoid the Topic": "-",
          "Dismiss": "-",
          "Feint": "-",
          "Incite": "Versus",
          "Obfuscate": "Versus",
          "Point": "Versus",
          "Rebuttal": "-"
        },
        "Dismiss": {
          "Avoid the Topic": "Standard",
          "Dismiss": "Standard",
          "Feint": "Standard",
          "Incite": "Standard",
          "Obfuscate": "Versus",
          "Point": "Standard",
          "Rebuttal": "Versus"
        },
        "Feint": {
          "Avoid the Topic": "-",
          "Dismiss": "-",
          "Feint": "Versus",
          "Incite": "Versus",
          "Obfuscate": "Versus",
          "Point": "-",
          "Rebuttal": "Standard"
        },
        "Incite": {
          "Avoid the Topic": "Versus",
          "Dismiss": "Standard",
          "Feint": "Versus",
          "Incite": "Standard",
          "Obfuscate": "Versus",
          "Point": "Standard",
          "Rebuttal": "Standard"
        },
        "Obfuscate": {
          "Avoid the Topic": "Versus",
          "Dismiss": "Versus",
          "Feint": "Versus",
          "Incite": "Versus",
          "Obfuscate": "Versus",
          "Point": "Versus",
          "Rebuttal": "Versus"
        },
        "Point": {
          "Avoid the Topic": "Versus",
          "Dismiss": "Standard",
          "Feint": "Standard",
          "Incite": "Standard",
          "Obfuscate": "Versus",
          "Point": "Standard",
          "Rebuttal": "Versus"
        },
        "Rebuttal": {
          "Avoid the Topic": "-",
          "Dismiss": "Versus",
          "Feint": "-",
          "Incite": "-",
          "Obfuscate": "Versus",
          "Point": "Versus",
          "Rebuttal": "-"
        }
      },
      "fight": {
        "Strike": {
          "Strike": "Ob 1",
          "Great Strike": "Ob 1",
          "Block & Strike": "vs Skill",
          "Lock & Strike": "Ob 1",
          "Avoid": "vs Speed",
          "Block": "vs Skill",
          "Counterstrike": "vs Skill",
          "Assess": "Ob 1",
          "Change Stance": "Select Appropriate Action for Stance",
          "Charge/Tackle": "Natural Defense vs Power",
          "Draw Weapon": "Ob 1",
          "Physical Action": "Ob 1",
          "Push": "Ob 1",
          "Lock": "Ob 1",
          "Get Up": "Ob 1",
          "Beat": "Ob 1",
          "Disarm": "Ob 1",
          "Feint": "Ob 1",
          "Throw Person": "Ob 1",
          "Throw Object/Weapon": "Ob 1",
          "Aim": "Ob 1",
          "Nock Arrow and Draw Bow": "Ob 1",
          "Reload Crossbow or Gun": "Ob 1",
          "Fire Gun or Crossbow": "Ob 1",
          "Release Bow": "Ob 1",
          "Snapshot": "Ob 1",
          "Cast Spell": "Ob 1",
          "Drop Spell": "Ob 1",
          "Command Spirit": "Ob 1",
          "Command": "Ob 1",
          "Intimidate": "Ob 1",
          "Stand and Drool": "Ob 1",
          "Fall Prone (and beg for mercy)": "Ob 1",
          "Run Screaming": "vs 1/2 Speed",
          "Swoon": "He looks Dead!",
          "No Action": "Ob 1"
        },
        "Great Strike": {
          "Strike": "Ob 1",
          "Great Strike": "Ob 1",
          "Block & Strike": "vs Skill",
          "Lock & Strike": "Ob 1",
          "Avoid": "vs Speed",
          "Block": "vs Skill",
          "Counterstrike": "vs Skill",
          "Assess": "Ob 1",
          "Change Stance": "Select Appropriate Action for Stance",
          "Charge/Tackle": "Natural Defense vs Power",
          "Draw Weapon": "Ob 1",
          "Physical Action": "Ob 1",
          "Push": "Ob 1",
          "Lock": "Ob 1",
          "Get Up": "Ob 1",
          "Beat": "Ob 1",
          "Disarm": "Ob 1",
          "Feint": "Ob 1",
          "Throw Person": "Ob 1",
          "Throw Object/Weapon": "Ob 1",
          "Aim": "Ob 1",
          "Nock Arrow and Draw Bow": "Ob 1",
          "Reload Crossbow or Gun": "Ob 1",
          "Fire Gun or Crossbow": "Ob 1",
          "Release Bow": "Ob 1",
          "Snapshot": "Ob 1",
          "Cast Spell": "Ob 1",
          "Drop Spell": "Ob 1",
          "Command Spirit": "Ob 1",
          "Command": "Ob 1",
          "Intimidate": "Ob 1",
          "Stand and Drool": "Ob 1",
          "Fall Prone (and beg for mercy)": "Ob 1",
          "Run Screaming": "vs 1/2 Speed",
          "Swoon": "He looks Dead!",
          "No Action": "Ob 1"
        },
        "Block & Strike": {
          "Strike": "Select Block and Strike",
          "Great Strike": "Select Block and Strike",
          "Block & Strike": "Select Block and Strike",
          "Lock & Strike": "Select Block and Strike",
          "Avoid": "Select Block and Strike",
          "Block": "Select Block and Strike",
          "Counterstrike": "Select Block and Strike",
          "Assess": "Select Block and Strike",
          "Change Stance": "Select Block and Strike",
          "Charge/Tackle": "Select Block and Strike",
          "Draw Weapon": "Select Block and Strike",
          "Physical Action": "Select Block and Strike",
          "Push": "Select Block and Strike",
          "Lock": "Select Block and Strike",
          "Get Up": "Select Block and Strike",
          "Beat": "Select Block and Strike",
          "Disarm": "Select Block and Strike",
          "Feint": "Select Block and Strike",
          "Throw Person": "Select Block and Strike",
          "Throw Object/Weapon": "Select Block and Strike",
          "Aim": "Select Block and Strike",
          "Nock Arrow and Draw Bow": "Select Block and Strike",
          "Reload Crossbow or Gun": "Select Block and Strike",
          "Fire Gun or Crossbow": "Select Block and Strike",
          "Release Bow": "Select Block and Strike",
          "Snapshot": "Select Block and Strike",
          "Cast Spell": "Select Block and Strike",
          "Drop Spell": "Select Block and Strike",
          "Command Spirit": "Select Block and Strike",
          "Command": "Select Block and Strike",
          "Intimidate": "Select Block and Strike",
          "Stand and Drool": "Select Block and Strike",
          "Fall Prone (and beg for mercy)": "Select Block and Strike",
          "Run Screaming": "Select Block and Strike",
          "Swoon": "Select Block and Strike",
          "No Action": "Select Block and Strike"
        },
        "Lock & Strike": {
          "Strike": "Ob 1",
          "Great Strike": "Ob 1",
          "Block & Strike": "vs Skill",
          "Lock & Strike": "Ob 1",
          "Avoid": "vs Speed",
          "Block": "vs Skill",
          "Counterstrike": "vs Skill",
          "Assess": "Ob 1",
          "Change Stance": "Select Appropriate Action for Stance",
          "Charge/Tackle": "Natural Defense vs Power",
          "Draw Weapon": "Ob 1",
          "Physical Action": "Ob 1",
          "Push": "Ob 1",
          "Lock": "Ob 1",
          "Get Up": "Ob 1",
          "Beat": "Ob 1",
          "Disarm": "Ob 1",
          "Feint": "Ob 1",
          "Throw Person": "Ob 1",
          "Throw Object/Weapon": "Ob 1",
          "Aim": "Ob 1",
          "Nock Arrow and Draw Bow": "Ob 1",
          "Reload Crossbow or Gun": "Ob 1",
          "Fire Gun or Crossbow": "Ob 1",
          "Release Bow": "Ob 1",
          "Snapshot": "Ob 1",
          "Cast Spell": "Ob 1",
          "Drop Spell": "Ob 1",
          "Command Spirit": "Ob 1",
          "Command": "Ob 1",
          "Intimidate": "Ob 1",
          "Stand and Drool": "Ob 1",
          "Fall Prone (and beg for mercy)": "Ob 1",
          "Run Screaming": "vs 1/2 Speed",
          "Swoon": "He looks Dead!",
          "No Action": "Ob 1"
        },
        "Avoid": {
          "Strike": "vs Skill",
          "Great Strike": "vs Skill",
          "Block & Strike": "vs Skill",
          "Lock & Strike": "vs Skill",
          "Avoid": "-",
          "Block": "-",
          "Counterstrike": "-",
          "Assess": "-",
          "Change Stance": "See appropriate stance action",
          "Charge/Tackle": "vs Power",
          "Draw Weapon": "-",
          "Physical Action": "-",
          "Push": "vs Power",
          "Lock": "vs Power",
          "Get Up": "-",
          "Beat": "vs Skill",
          "Disarm": "+ vs Skill",
          "Feint": "-",
          "Throw Person": "vs Skill",
          "Throw Object/Weapon": "-",
          "Aim": "-",
          "Nock Arrow and Draw Bow": "-",
          "Reload Crossbow or Gun": "-",
          "Fire Gun or Crossbow": "-",
          "Release Bow": "-",
          "Snapshot": "-",
          "Cast Spell": "-",
          "Drop Spell": "-",
          "Command Spirit": "-",
          "Command": "-",
          "Intimidate": "-",
          "Stand and Drool": "-",
          "Fall Prone (and beg for mercy)": "-",
          "Run Screaming": "-",
          "Swoon": "-",
          "No Action": "-"
        },
        "Block": {
          "Strike": "vs Skill",
          "Great Strike": "-",
          "Block & Strike": "vs Skill",
          "Lock & Strike": "vs Skill",
          "Avoid": "-",
          "Block": "-",
          "Counterstrike": "-",
          "Assess": "-",
          "Change Stance": "See appropriate stance action",
          "Charge/Tackle": "-",
          "Draw Weapon": "-",
          "Physical Action": "",
          "Push": "vs Power",
          "Lock": "vs Power",
          "Get Up": "",
          "Beat": "-",
          "Disarm": "+ vs Skill",
          "Feint": "-",
          "Throw Person": "-",
          "Throw Object/Weapon": "-",
          "Aim": "-",
          "Nock Arrow and Draw Bow": "-",
          "Reload Crossbow or Gun": "-",
          "Fire Gun or Crossbow": "-",
          "Release Bow": "-",
          "Snapshot": "-",
          "Cast Spell": "-",
          "Drop Spell": "-",
          "Command Spirit": "-",
          "Command": "-",
          "Intimidate": "-",
          "Stand and Drool": "-",
          "Fall Prone (and beg for mercy)": "-",
          "Run Screaming": "-",
          "Swoon": "-",
          "No Action": "-"
        },
        "Counterstrike": {
          "Strike": "vs Skill",
          "Great Strike": "vs Skill",
          "Block & Strike": "vs Skill",
          "Lock & Strike": "vs Skill",
          "Avoid": "-",
          "Block": "-",
          "Counterstrike": "-",
          "Assess": "-",
          "Change Stance": "See appropriate stance action",
          "Charge/Tackle": "-",
          "Draw Weapon": "-",
          "Physical Action": "-",
          "Push": "vs Power",
          "Lock": "vs Power",
          "Get Up": "-",
          "Beat": "vs Skill",
          "Disarm": "+ vs Skill",
          "Feint": "-",
          "Throw Person": "-",
          "Throw Object/Weapon": "-",
          "Aim": "-",
          "Nock Arrow and Draw Bow": "-",
          "Reload Crossbow or Gun": "-",
          "Fire Gun or Crossbow": "-",
          "Release Bow": "-",
          "Snapshot": "-",
          "Cast Spell": "-",
          "Drop Spell": "-",
          "Command Spirit": "-",
          "Command": "-",
          "Intimidate": "-",
          "Stand and Drool": "-",
          "Fall Prone (and beg for mercy)": "-",
          "Run Screaming": "-",
          "Swoon": "-",
          "No Action": "-"
        },
        "Assess": blankActions,
        "Change Stance": blankActions,
        "Charge/Tackle": {
          "Strike": "1/2 Forte",
          "Great Strike": "1/2 Forte",
          "Block & Strike": "1/2 Speed",
          "Lock & Strike": "1/2 Forte",
          "Avoid": "vs Speed",
          "Block": "1/2 Speed",
          "Counterstrike": "1/2 Speed",
          "Assess": "1/2 Speed",
          "Change Stance": "See appropriate stance action",
          "Charge/Tackle": "vs Power",
          "Draw Weapon": "",
          "Physical Action": "",
          "Push": "vs Power",
          "Lock": "1/2 Forte",
          "Get Up": "1/2 Forte",
          "Beat": "1/2 Speed",
          "Disarm": "1/2 Forte",
          "Feint": "1/2 Forte",
          "Throw Person": "vs Skill",
          "Throw Object/Weapon": "1/2 Forte",
          "Aim": "1/2 Forte",
          "Nock Arrow and Draw Bow": "1/2 Forte",
          "Reload Crossbow or Gun": "1/2 Forte",
          "Fire Gun or Crossbow": "1/2 Forte",
          "Release Bow": "1/2 Forte",
          "Snapshot": "1/2 Forte",
          "Cast Spell": "1/2 Forte",
          "Drop Spell": "1/2 Forte",
          "Command Spirit": "1/2 Forte",
          "Command": "1/2 Forte",
          "Intimidate": "1/2 Forte",
          "Stand and Drool": "Ob 1",
          "Fall Prone (and beg for mercy)": "Ob 1",
          "Run Screaming": "vs Speed",
          "Swoon": "He looks Dead!",
          "No Action": "1/2 Forte"
        },
        "Draw Weapon": blankActions,
        "Physical Action": blankActions,
        "Push": {
          "Strike": "1/2 Speed",
          "Great Strike": "1/2 Speed",
          "Block & Strike": "1/2 Speed",
          "Lock & Strike": "1/2 Speed",
          "Avoid": "vs Speed",
          "Block": "vs Skill",
          "Counterstrike": "vs Skill",
          "Assess": "1/2 Power",
          "Change Stance": "See appropriate stance action",
          "Charge/Tackle": "vs Power",
          "Draw Weapon": "1/2 Speed",
          "Physical Action": "1/2 Speed",
          "Push": "vs Power",
          "Lock": "1/2 Speed",
          "Get Up": "1/2 Speed",
          "Beat": "1/2 Speed",
          "Disarm": "1/2 Power",
          "Feint": "1/2 Speed",
          "Throw Person": "vs Skill",
          "Throw Object/Weapon": "1/2 Speed",
          "Aim": "1/2 Speed",
          "Nock Arrow and Draw Bow": "1/2 Speed",
          "Reload Crossbow or Gun": "1/2 Speed",
          "Fire Gun or Crossbow": "1/2 Speed",
          "Release Bow": "1/2 Speed",
          "Snapshot": "1/2 Speed",
          "Cast Spell": "1/2 Speed",
          "Drop Spell": "1/2 Speed",
          "Command Spirit": "1/2 Speed",
          "Command": "1/2 Speed",
          "Intimidate": "1/2 Speed",
          "Stand and Drool": "Ob 1",
          "Fall Prone (and beg for mercy)": "Ob 1",
          "Run Screaming": "vs Speed",
          "Swoon": "He looks Dead!",
          "No Action": "1/2 Speed"
        },
        "Lock": {
          "Strike": "Ob: 1/2 Power",
          "Great Strike": "Ob: 1/2 Power",
          "Block & Strike": "vs Skill, Ob: 1/2 Power",
          "Lock & Strike": "Ob: 1/2 Power",
          "Avoid": "vs Speed",
          "Block": "vs Skill",
          "Counterstrike": "vs Skill",
          "Assess": "Ob: 1/2 Power",
          "Change Stance": "See appropriate stance action",
          "Charge/Tackle": "Ob: 1/2 Power",
          "Draw Weapon": "Ob: 1/2 Power",
          "Physical Action": "Ob: 1/2 Power",
          "Push": "Ob: 1/2 Power",
          "Lock": "vs Power",
          "Get Up": "Ob: 1/2 Power",
          "Beat": "Ob: 1/2 Power",
          "Disarm": "vs Skill",
          "Feint": "Ob: 1/2 Power",
          "Throw Person": "Ob: 1/2 Power",
          "Throw Object/Weapon": "Ob: 1/2 Power",
          "Aim": "Ob: 1/2 Power",
          "Nock Arrow and Draw Bow": "Ob: 1/2 Power",
          "Reload Crossbow or Gun": "Ob: 1/2 Power",
          "Fire Gun or Crossbow": "Ob: 1/2 Power",
          "Release Bow": "Ob: 1/2 Power",
          "Snapshot": "Ob: 1/2 Power",
          "Cast Spell": "Ob: 1/2 Power",
          "Drop Spell": "Ob: 1/2 Power",
          "Command Spirit": "Ob: 1/2 Power",
          "Command": "Ob: 1/2 Power",
          "Intimidate": "Ob: 1/2 Power",
          "Stand and Drool": "Ob 1",
          "Fall Prone (and beg for mercy)": "Ob 1",
          "Run Screaming": "vs Agility",
          "Swoon": "He looks Dead!",
          "No Action": "Ob: 1/2 Power"
        },
        "Get Up": blankActions,
        "Beat": {
          "Strike": "Ob: 1/2 Skill",
          "Great Strike": "Ob: 1/2 Skill",
          "Block & Strike": "vs Skill, Ob: 1/2 Skill",
          "Lock & Strike": "Ob: 1/2 Skill",
          "Avoid": "vs Speed",
          "Block": "vs Skill",
          "Counterstrike": "vs Skill",
          "Assess": "Ob: 1/2 Skill",
          "Change Stance": "See appropriate stance action",
          "Charge/Tackle": "Ob: 1/2 Skill",
          "Draw Weapon": "Ob: 1/2 Skill",
          "Physical Action": "Ob: 1/2 Skill",
          "Push": "Ob: 1/2 Skill",
          "Lock": "Ob: 1/2 Skill",
          "Get Up": "Ob: 1/2 Skill",
          "Beat": "Ob: 1/2 Skill",
          "Disarm": "vs Skill",
          "Feint": "vs Skill",
          "Throw Person": "Ob: 1/2 Skill",
          "Throw Object/Weapon": "Ob: 1/2 Skill",
          "Aim": "Ob: 1/2 Skill",
          "Nock Arrow and Draw Bow": "Ob: 1/2 Skill",
          "Reload Crossbow or Gun": "Ob: 1/2 Skill",
          "Fire Gun or Crossbow": "Ob: 1/2 Skill",
          "Release Bow": "Ob: 1/2 Skill",
          "Snapshot": "Ob: 1/2 Skill",
          "Cast Spell": "Ob: 1/2 Skill",
          "Drop Spell": "Ob: 1/2 Skill",
          "Command Spirit": "Ob: 1/2 Skill",
          "Command": "Ob: 1/2 Skill",
          "Intimidate": "Ob: 1/2 Skill",
          "Stand and Drool": "Ob 1",
          "Fall Prone (and beg for mercy)": "Ob 1",
          "Run Screaming": "Ob 1",
          "Swoon": "He looks Dead!",
          "No Action": "Ob: 1/2 Skill"
        },
        "Disarm": {
          "Strike": "Ob: Skill",
          "Great Strike": "Ob: Skill",
          "Block & Strike": "Ob: Skill",
          "Lock & Strike": "Ob: Skill",
          "Avoid": "vs Spd +(Ob: Skill)",
          "Block": "vs Skill + (Ob: Skill)",
          "Counterstrike": "vs Skill + (Ob: Skill)",
          "Assess": "Ob: Skill",
          "Change Stance": "See appropriate stance action",
          "Charge/Tackle": "Ob: Skill",
          "Draw Weapon": "Ob: Skill",
          "Physical Action": "Ob: Skill",
          "Push": "Ob: Skill",
          "Lock": "Ob: Skill",
          "Get Up": "Ob: Skill",
          "Beat": "vs Skill + (Ob: Skill)",
          "Disarm": "Ob: Skill",
          "Feint": "vs Skill",
          "Throw Person": "Ob: Skill",
          "Throw Object/Weapon": "Ob: Skill",
          "Aim": "Ob: Skill",
          "Nock Arrow and Draw Bow": "Ob: Skill",
          "Reload Crossbow or Gun": "Ob: Skill",
          "Fire Gun or Crossbow": "Ob: Skill",
          "Release Bow": "Ob: Skill",
          "Snapshot": "Ob: Skill",
          "Cast Spell": "Ob: Skill",
          "Drop Spell": "Ob: Skill",
          "Command Spirit": "Ob: Skill",
          "Command": "Ob: Skill",
          "Intimidate": "Ob: Skill",
          "Stand and Drool": "Ob: 1",
          "Fall Prone (and beg for mercy)": "Ob: 1",
          "Run Screaming": "Ob: 1/2 Skill",
          "Swoon": "He looks Dead!",
          "No Action": "Ob: Skill"
        },
        "Feint": {
          "Strike": "-",
          "Great Strike": "-",
          "Block & Strike": "Ob: 1, -",
          "Lock & Strike": "-",
          "Avoid": "-",
          "Block": "Ob: 1",
          "Counterstrike": "Ob: 1",
          "Assess": "-",
          "Change Stance": "-",
          "Charge/Tackle": "-",
          "Draw Weapon": "-",
          "Physical Action": "-",
          "Push": "-",
          "Lock": "-",
          "Get Up": "-",
          "Beat": "vs Skill",
          "Disarm": "vs Skill",
          "Feint": "vs Skill",
          "Throw Person": "-",
          "Throw Object/Weapon": "-",
          "Aim": "-",
          "Nock Arrow and Draw Bow": "-",
          "Reload Crossbow or Gun": "-",
          "Fire Gun or Crossbow": "-",
          "Release Bow": "-",
          "Snapshot": "-",
          "Cast Spell": "-",
          "Drop Spell": "-",
          "Command Spirit": "-",
          "Command": "-",
          "Intimidate": "-",
          "Stand and Drool": "-",
          "Fall Prone (and beg for mercy)": "-",
          "Run Screaming": "-",
          "Swoon": "He looks Dead!",
          "No Action": "-"
        },
        "Throw Person":
          {
            "Strike": "Ob: 1/2 Speed",
            "Great Strike": "Ob: 1/2 Speed",
            "Block & Strike": "Ob: 1/2 Speed",
            "Lock & Strike": "Ob: 1/2 Speed",
            "Avoid": "vs Speed",
            "Block": "vs Skill",
            "Counterstrike": "vs Skill",
            "Assess": "Ob: 1/2 Speed",
            "Change Stance": "See appropriate stance action",
            "Charge/Tackle": "vs Power",
            "Draw Weapon": "Ob: 1/2 Speed",
            "Physical Action": "Ob: 1/2 Speed",
            "Push": "vs Power",
            "Lock": "vs Power",
            "Get Up": "Ob: 1/2 Speed",
            "Beat": "Ob: 1/2 Agility",
            "Disarm": "Ob: 1/2 Agility",
            "Feint": "Ob: 1/2 Speed",
            "Throw Person": "vs Skill",
            "Throw Object/Weapon": "Ob: 1/2 Speed",
            "Aim": "Ob: 1/2 Speed",
            "Nock Arrow and Draw Bow": "Ob: 1/2 Speed",
            "Reload Crossbow or Gun": "Ob: 1/2 Speed",
            "Fire Gun or Crossbow": "Ob: 1/2 Speed",
            "Release Bow": "Ob: 1/2 Speed",
            "Snapshot": "Ob: 1/2 Speed",
            "Cast Spell": "Ob: 1/2 Speed",
            "Drop Spell": "Ob: 1/2 Speed",
            "Command Spirit": "Ob: 1/2 Speed",
            "Command": "Ob: 1/2 Speed",
            "Intimidate": "Ob: 1/2 Speed",
            "Stand and Drool": "Ob: 1",
            "Fall Prone (and beg for mercy)": "Ob: 1",
            "Run Screaming": "vs Speed",
            "Swoon": "He looks Dead!",
            "No Action": "Ob: 1/2 Speed"
          },
        "Throw Object/Weapon": blankActions,
        "Aim": blankActions,
        "Nock Arrow and Draw Bow": blankActions,
        "Reload Crossbow or Gun": blankActions,
        "Snapshot": blankActions,
        "Cast Spell": blankActions,
        "Drop Spell": blankActions,
        "Command Spirit": blankActions,
        "Command": blankActions,
        "Intimidate": blankActions,
        "Stand and Drool": blankActions,
        "Fall Prone (and beg for mercy)": blankActions,
        "Run Screaming": blankActions,
        "Swoon": blankActions,
        "No Action": blankActions
      }
    });

})();
