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

function initializeAll() {
    /* First read masterpasswords and clean input fields for security */
    var master1 = $('masterPassword').value;
    var master2 = $('masterPassword2').value;
    $('masterPassword').value = "";
    $('masterPassword2').value = "";

    /* Check if passwords match */
    if (master1 != master2) {
        alert("Sorry, the masterpasswords doesn't match");
        return;
    }

    /* Create aes object to encrypt data */
    var aes = new pidCrypt.AES.CTR();
    
    /* Create check value to verify the masterpassword later */
    var checkValue = aes.encryptText("masterpassword match", master1,
                                            {nBits: 256});
    
    /* Write checkValue into datapool */
    var inputElem = '<input id="checkValue" value="' + checkValue + '"/>';
    inputElem.value = checkValue;
    $('datapool').innerHTML = $('datapool').innerHTML + inputElem;
    masterPassword = master1;
    
    loadWebpage('webpages/app.html', 'theBody');
}

function initCreate() {
    $('initializeAll').onclick = initializeAll;
}
