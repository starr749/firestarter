(function() {
  var act = angular.module('actions', []);

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
      }
    });

})();
