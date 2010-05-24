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

function login() {
    /* Verify password */
    var aes = new pidCrypt.AES.CTR();
    var master = $('masterPassword').value;
    var decryptMsg = aes.decryptText($('checkValue').value, master, {nBits: 256});
    if (decryptMsg != "masterpassword match") {
        alert("Sorry, wrong masterpassword");
        return;
    }

    /* Set masterpassword so we can it use while this session is running */
    masterPassword = master;
    
    loadWebpage('webpages/app.html', 'theBody');
}

function initLogin() {
    $('loginButton').onclick = login;
}
