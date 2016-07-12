//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Anagram(word) {
  this.word = word;
}

Anagram.prototype.matches = function (words) {
  // YOUR CODE GOES HERE

  var chadcar = this.string(this.word);   /* chadcar = chaîne de caractères*/
  var matches = [];

  if (typeof words === 'string') {
    words = arguments;
  }
  for (var i = 0; i < words.length; i++) {
    var mots = words[i];
    var strs = this.string(mots);
    if (strs === chadcar && mots.toLowerCase() != this.word.toLowerCase()) {
      matches.push(mots);   /* ajoute 1 ou plusieurs éléments à la fin d'1 tableau et retourne la nouvelle taille du tableau */
    }
  }
  return matches;
};

Anagram.prototype.string = function (wordd) {
  var chadcar = wordd.toLowerCase();    /*mets en minuscule */
  chadcar = chadcar.split("");  /*permet de diviser 1 chaîne de caractères à partir d'1 séparateur*/
  chadcar = chadcar.sort();     /*trie les éléments d'1 tableau dans l'ordre croissant */
  chadcar = chadcar.join("");   /*réuni tous les éléments d'1 tableau dans 1 chaine de caractères*/
  return chadcar;
};


///////////validation 100% des tests///////////

/*'use strict';
function Anagram(I) {
  this.I = I;
};

Anagram.prototype.matches = function (u) {
  if (typeof u == 'string') {
    u = arguments;
  } var y = [];
  var l = this.l(this.I);
  for (var i = 0; i < u.length; i++) {
    if (this.I.toLowerCase() !== u[i].toLowerCase() && this.T(l, this.l(u[i]))) {
      y.push(u[i]);
    }
  }
  return y;
};

Anagram.prototype.l = function (y) {
  var T = []; for (var i = 0; i < y.length; i++) {
    var u = y.charAt(i).toLowerCase(); T[u] = (T[u]) ? T[u] + 1 : 1;
  }
  return T;
};

Anagram.prototype.T = function (y, u) {
  for (var x in y) {
    if (!u[x] || y[x] !== u[x]) {
      return false;
    }
  }
  for (var x in u) {
    if (!y[x]) {
      return false;
    }
  }
  return true;
} */