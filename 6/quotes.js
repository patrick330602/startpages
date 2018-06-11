var quotes = [
    "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies and the other way is to make it so complicated that there are no obvious deficiencies. — C.A.R. Hoare, The 1980 ACM Turing Award Lecture",
    "The computing scientist’s main challenge is not to get confused by the complexities of his own making. — E. W. Dijkstra",
    "The cheapest, fastest, and most reliable components are those that aren’t there. — Gordon Bell",
    "One of my most productive days was throwing away 1000 lines of code. — Ken Thompson",
    "When in doubt, use brute force. — Ken Thompson",
    "Deleted code is debugged code. — Jeff Sickel",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. — Brian W. Kernighan and P. J. Plauger in The Elements of Programming Style.",
    "The most effective debugging tool is still careful thought, coupled with judiciously placed print statements. — Brian W. Kernighan, in the paper Unix for Beginners (1979)",
    "Controlling complexity is the essence of computer programming. — Brian Kernighan",
    "Beauty is more important in computing than anywhere else in technology because software is so complicated. Beauty is the ultimate defence against complexity. — David Gelernter",
    "UNIX was not designed to stop its users from doing stupid things, as that would also stop them from doing clever things. — Doug Gwyn",
    "If you’re willing to restrict the flexibility of your approach, you can almost always do something better. — John Carmack",
    "A data structure is just a stupid programming language. — R. Wm. Gosper",
    "The essence of XML is this: the problem it solves is not hard, and it does not solve the problem well. — Phil Wadler, POPL 2003",
    "The central enemy of reliability is complexity. — Geer et al.",
    "Simplicity is prerequisite for reliability. — Edsger W. Dijkstra",
    "Forward thinking was just the thing that made Multics what it is today. — Erik Quanstrom",
    "This ‘users are idiots, and are confused by functionality’ mentality of Gnome is a disease. If you think your users are idiots, only idiots will use it. — Linus",
    "The only places for icons is in a church, a burning church at that. — mhat",
    "Just because the standard provides a cliff in front of you, you are not necessarily required to jump off it. — Norman Diamond",
    "Measuring programming progress by lines of code is like measuring aircraft building progress by weight. — Bill Gates",
    "First, solve the problem. Then, write the code. — John Johnson",
    "Correctness is clearly the prime quality. If a system does not do what it is supposed to do, then everything else about it matters little. — Bertrand Meyer",
    "Complexity kills. It sucks the life out of developers, it makes products difficult to plan, build and test, it introduces security challenges and it causes end-user and administrator frustration. — Ray Ozzie",
    "You can’t trust code that you did not totally create yourself. — Ken Thompson",
    "Object-oriented design is the roman numerals of computing. — Rob Pike",
    "Debugging time increases as a square of the program’s size. — Chris Wenham",
    "Code never lies, comments sometimes do. — Ron Jeffries",
    "What I cannot build, I do not understand. — Richard Feynman",
    "The unavoidable price of reliability is simplicity. — C.A.R. Hoare",
    "Software sucks because users demand it to. — Nathan Myhrvold",
    "Good code is short, simple, and symmetrical - the challenge is figuring out how to get there. — Sean Parent",
    "Complexity has nothing to do with intelligence, simplicity does. — Larry Bossidy",
    "When in doubt, leave it out. — Joshua Bloch",
    "The trick is to fix the problem you have, rather than the problem you want. — Bram Cohen"
]

function quote_of_the_day()
{
    var ranNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[ranNum];
}