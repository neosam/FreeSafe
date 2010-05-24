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

function getWebservice() {
    var aes = new pidCrypt.AES.CTR();

    var index = $('webservices').selectedIndex;
    var savedServices = document.getElementsByName("serviceEntry");
    var encryptedUsername = savedServices[index].value.split(",")[1];
    var encryptedPassword = savedServices[index].value.split(",")[2];
    var username = aes.decryptText(encryptedUsername, masterPassword,
                                    {nBits: 256});
    var password = aes.decryptText(encryptedPassword, masterPassword,
                                    {nBits: 256});

    //$('result').innerHTML = "Username: " + username 
    //            + "<br/>Password: " + password;
    $('username').value = username;
    $('password').value = password;
}

function initGet() {
    var aes = new pidCrypt.AES.CTR();
    loadWebpage('webpages/get.html', 'main');

    var savedServices = document.getElementsByName("serviceEntry");
    for (var i = 0; i < savedServices.length; i++) {
        var service = savedServices[i];
        var serviceName = service.value.split(",")[0];
        var optn = document.createElement("OPTION");
        optn.text = aes.decryptText(serviceName, masterPassword, {nBits: 256});
        optn.value = aes.decryptText(serviceName, masterPassword, {nBits: 256});
        $('webservices').options.add(optn);
    }

    $('webservices').onchange = getWebservice;
}
