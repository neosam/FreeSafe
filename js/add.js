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


function generatePasswordAndPrint() {
    var size = parseInt($('passsize').value);
    var alpha = "";
    if ($('bigLetters').checked)
        alpha = alpha + bigLetter;
    if ($('smallLetters').checked)
        alpha = alpha + smlLetter;
    if ($('numbers').checked)
        alpha = alpha + numbers;
    alpha = alpha + $('addLetters').value;
    $('password').value = generatePassword(alpha, size);
}

function addWebservice() {
    var aes = new pidCrypt.AES.CTR();
    var webservice = $('webservice').value;
    var username = $('username').value;
    var password = $('password').value;
    var result = aes.encryptText(webservice, masterPassword, {nBits: 256})
                + ","
                + aes.encryptText(username, masterPassword, {nBits: 256})
                + ","
                + aes.encryptText(password, masterPassword, {nBits: 256});
    var poolEntry = '<input name="serviceEntry" value="' + result + '"/>';
    $('datapool').innerHTML = $('datapool').innerHTML + poolEntry;
    $('webservice').value = "";
    $('username').value = "";
    $('password').value = "";
}

function initAdd() {
    loadWebpage('webpages/add.html', 'main');
    $('addButton').onclick = addWebservice;
    $('generatePasswordButton').onclick = generatePasswordAndPrint;
}
