/*  This file is part of FreeSafe.

    FreeSafe is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    FreeSafe is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
*/

var bigLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var smlLetter = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";

function appendArray(arr1, arr2) {
    return arr1 + arr2;
}

function pickRandomAlpha(alpha) {
    return alpha[Math.floor(Math.random() * alpha.length)];
}

function generatePassword(alpha, size) {
    var res = "";
    for (var i = 0; i < size; i++)
        res = res + pickRandomAlpha(alpha);
    return res;
}
