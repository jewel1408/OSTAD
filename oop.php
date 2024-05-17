<!--
2. Problem Statement: Marks: 60

You are required to create a simple Library System in PHP using Object-Oriented Programming (OOP) principles. The system should have the following functionalities:

1) Create a Book class with private properties for title and availableCopies. 
2) Create a Member class with a private property for name. 
3) Implement methods in the Book class to borrow and return books. This borrowBook method should decrease the available copies and returnBook method should increase the available copies. 
4) Implement methods in the Member class to borrow and return books. Here the borrowBook method should take book as an argument and returnBook method should also take book as an argument. 
5) Write a PHP program to demonstrate the usage of the library system, including adding books to the library, adding members, borrowing books, returning books, and displaying the available books. 
6) You have to create 2 books and 2 members. Member One has to borrow book 1 and Member Two has to borrow book 2. 
7) For your reference we have provided a template.

You must have to use this template: 

Output must look like this:
Available Copies of 'The Great Gatsby': 4
Available Copies of 'To Kill a Mockingbird': 2
-->

<?php
class Book {
// TODO: Add properties as Private    
    private $title;
    private $availableCopies;

    public function __construct($title, $availableCopies) {
        // TODO: Initialize properties
        $this->title = $title;
        $this->availableCopies = $availableCopies;
    }

    // TODO: Add getTitle method
    public function getTitle() {
        return $this->title;
    }

    // TODO: Add getAvailableCopies method
    public function getAvailableCopies() {
        return $this->availableCopies;
    }

    // TODO: Add borrowBook method
    public function borrowBook() {
        if ($this->availableCopies > 0) {
            $this->availableCopies--;
        } else {
            echo "No available copies of '{$this->title}' to borrow.";
        }
    }

    // TODO: Add returnBook method
    public function returnBook() {
        $this->availableCopies++;
    }
}

class Member {
     // TODO: Add properties as Private
    private $name;

    public function __construct($name) {
        // TODO: Initialize properties
        $this->name = $name;
    }

    // TODO: Add getName method
    public function getName() {
        return $this->name;
    }

    // TODO: Add borrowBook method
    public function borrowBook(Book $book) {
        $book->borrowBook();
    }

    // TODO: Add returnBook method
    public function returnBook(Book $book) {
        $book->returnBook();
    }
}

// Usage

// You have to create 2 books and 2 members.
//Members One should borrow book 1 and Member Two should borrow book 2.

// TODO: Create 2 books with the following properties
// Book 1 - Name: The Great Gatsby, Available Copies: 5.
// Book 2 - Name: To Kill a Mockingbird, Available Copies: 3.
$book1 = new Book("The Great Gatsby", 5);
$book2 = new Book("To Kill a Mockingbird", 3);

// TODO: Create 2 members with the following properties
// Member 1 - Name: John Doe
// Member 2 - Name: Jane Smith
$member1 = new Member("John Doe");
$member2 = new Member("Jane Smith");

// TODO: Apply Borrow book method to each member
$member1->borrowBook($book1);
$member2->borrowBook($book2);

// TODO: Print Available Copies with their names:
echo "Available Copies of '{$book1->getTitle()}': {$book1->getAvailableCopies()}";
echo "<br/>Available Copies of '{$book2->getTitle()}': {$book2->getAvailableCopies()}";
?>
