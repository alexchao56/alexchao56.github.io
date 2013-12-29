var Topics = [
    "Introduction"  ,
    "RSA, Euclid's GCD, Modular Inverses, Modular Exponentiation" ,
    "Primality, Fast Multiplication (Karatsuba's Algorithm), Recurrence & the Master Theorem, Mergesort" ,
    "Lower Bound of Comparison Sorting, Hashing, Medians" ,
    "Matrix Multiplication, Polynomial Multiplication and Evaluation, Complex Numbers, Roots of Unity" ,
    "Polynomial Evaluation via Fast Fourier Transform (FFT), Polynomial Interpolation via Inverse FFT" ,
    "Graph Representations, DFS, Previsits and Postvisits",
    "Directed Graphs & Cycles, DAGs, Topological Sort, Strongly Connected Components (SCCs)" ,
    "BFS, Shortest Paths via Dijkstra's Algorithm, Binary Heaps" ,
    "Shortest Paths via Bellman-Ford Algorithm" , 
    "Minimum Spanning Trees, (Kruskal's) Greedy Algorithm, Union-Find (By Rank), Prim's Algorithm" ,
    "Boruvka's Algorithm, Huffman Encoding Trees" ,
    "Horn Satisfiability, Set Cover, Intro to Parallel Algorithms" ,
    "Parallel Algorithms, List Ranking, Parallel CCs" ,

    "Introduction to Dynamic Programming, DAG Distances, Longest Increasing Sequence, Edit Distance" ,
    "Dynamic Programming - Knapsack Problem, Chain Matrix Multiplication" ,
    "Shortest Paths Revisited" ,

    "Traveling Salesman, Introduction to Linear Programming" ,
    "Linear Programming Examples, Variants of LP" ,
    "Maximum Flow / Minimum Cut, Bipartite Matching, Duality" ,

    "Review of Duality, Zero Sum Games, Simplex" ,
    "Simplex" ,
    "NP Complete Problems, Reductions" ,
    "More on NP Completeness and Reductions" ,
    "Coping with NP Completeness" ,
    "Review"
];

var Readings = [
    "Chapter 0 (p.11-17)" ,
    "1.1, 1.2, 1.4 (p. 21-33, 39-43)" ,
    "1.3, 2.1, 2.2, 2.3 (p. 33-39, 55-62)" ,
    "1.5, 2.4 (p. 43-47, 63-66)" ,
    "2.5, 2.6.0 - 2.6.2 (p. 66-74)" ,
    "2.6 (p. 68-82)" ,
    "3.1, 3.2, 3.3.1 (p. 91-100)" ,
    "3.3.2, 3.4 (p. 100-105)" ,
    "4.1, 4.2, 4.3, 4.4, 4.5 (p. 115-128)" ,
    "4.6, 4.7 (p. 128-131)" ,
    "5.1 (p. 139-152)" ,
    "5.2 (p. 153-156) and <a href='./boruvkaparallel.pdf'>notes on Boruvka's algorithm</a>" ,
    "5.3, 5.4 (p. 157-160)" ,
    "<a href='./parallel_notes.pdf'>Notes on parallel algorithms</a>" ,

    "6.1, 6.2, 6.3 (p. 169-180)" ,
    "6.4, 6.5 (p. 181-185)" ,
    "6.6 (p. 186-188)" ,

    "6.6, 6.7, 7.1.1 (p. 188-191, 201-205)" ,
    "7.1.2, 7.1.3, 7.1.4 (p. 206-211)" ,
    "7.2, 7.3, 7.4 (p. 211-223)" ,

    "7.5, 7.6.0 (p. 224-227)" ,
    "7.6, 7.7 (p. 227-238)" ,
    "8.1, 8.2, 8.3 (p. 247-263)" ,
    "8.3 (p. 263-277)" ,
    "Chapter 9 (p. 283-306)" ,
    "Done with readings, peeps!"
];

var Fixed = {
   "2013-3-12": "<b>NO LECTURE</b>" ,
   "2013-3-26": "<b>Spring break</b>" ,
   "2013-3-28": "<b>Spring break</b>" ,
   "2013-4-11": "<b>NO LECTURE</b>"
};

var S = new Schedule(2013, 1, 22, Topics, Readings, Fixed) ;

S.setEventDay("Tue"); 
S.setEventDay("Thu"); 

var Events = S.getEvents() ;

while (Events.length > 0) {
    var e = Events.shift() ;
    document.write("<tr><td>"+e.date+"</td><td>"+e.topic+"</td><td>"+e.reading+"</td></tr>");
} 
