<!-- 
1.Problem Statement: Marks 40

Write a PHP program that takes an array of strings as input. Your program should iterate over each string in the array and perform the following operations:

Count the number of vowels (a, e, i, o, u) in each string. 
2. Reverse each string. 
3. Print the original string and the modified strings along with their vowel counts.

You must use this array of strings:
$strings = ["Hello", "World", "PHP", "Programming"];

Your Output must look like this:
Original String: Hello, Vowel Count: 2, Reversed String: olleH
Original String: World, Vowel Count: 1, Reversed String: dlroW
Original String: PHP, Vowel Count: 0, Reversed String: PHP
Original String: Programming, Vowel Count: 3, Reversed String: gnimmargorP
-->

<?php
// Given array of strings
$strings = ["Hello", "World", "PHP", "Programming"];

// Function to count vowels in a string
function countVowels($str) {
    $vowels = ['a', 'e', 'i', 'o', 'u'];
    $count = 0;
    foreach (str_split(strtolower($str)) as $char) {
        if (in_array($char, $vowels)) {
            $count++;
        }
    }
    return $count;
}

// Function to reverse a string
function reverseString($str) {
    return strrev($str);
}

// Iterate over each string
foreach ($strings as $string) {
    $originalString = $string;
    $vowelCount = countVowels($string);
    $reversedString = reverseString($string);

    // Print the results
    echo "<br/>Original String: $originalString, Vowel Count: $vowelCount, Reversed String: $reversedString";
}
?>