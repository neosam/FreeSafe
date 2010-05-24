#! /bin/bash

printf "Generate FreeSafeInit.html... "

perl mktools/bigpage.pl < main.html > FreeSafeInit.html

echo done
