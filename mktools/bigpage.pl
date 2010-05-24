#!/usr/bin/perl

# This file is part of FreeSafe.
# 
# FreeSafe is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
# 
# FreeSafe is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
# 
# You should have received a copy of the GNU General Public License
# along with Foobar.  If not, see <http://www.gnu.org/licenses/>.


while ($line = <>) {
	if ($line =~ m/<script\ssrc="([^"]+)/i) {
		$include = $1;
		print "<!-- Javascript file: $include -->\n";
		print "<script language=\"javascript\"><!--\n";
		open (INFILE, "$include");
		while (defined($input = <INFILE>)) {
			print "$input";
		}
		print "//--></script>\n";
	}
	elsif ($line =~ m/<div[^>]+name="include"/i) {
		$line =~ m/<div[^>]+id="([^"]+)/i;
		$include = $1;
		print "<!-- Subfile: $include -->\n";
		print "<div class=\"include\" id=\"$include\">\n";
		open (INFILE, "$include");
		while (defined($input = <INFILE>)) {
			print "$input";
		}
		print "</div>\n";
	}
    elsif ($line =~ m/var bigone = false/) {
        print "var bigone = true;\n";
    }
	else {
		print "$line";
	}
}
