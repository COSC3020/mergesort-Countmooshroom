[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11730513&assignment_repo_type=AssignmentRepo)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyze the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## Answer

With this mergesort, no matter what case I have, it will go through about the same process and comparisons.  Each run-through of the middle while loop will merge together each set of two sets that are next to each other.  This is repeated until all the sets are merged together.  Since this is the same process as the original mergesort, the complexity here should also be $nlogn$.  At the beginning of the algorithm, there is a loop that takes n time, but we ignore that since it is a lower-order term.  Therefore, the time complexity is $\Theta(nlogn)$.

