#!/usr/bin/perl

$debug = 1;

while ($line = <>) {
    chomp $line;
    next if $line !~ /([a-z])[a-z]\1/;
    next if $line !~ /([a-z][a-z]).*\1/;
    print "$line\n" if $debug;
    $nice++;
}
print "Nice strings: $nice\n";