/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({n:n});  //undefined; //fixme
  var rows = solution.rows();
  // console.log(rows, solution);
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      solution.togglePiece(i, j);
      if (solution.hasAnyRooksConflicts()) {
        solution.togglePiece(i, j);
      }
    }
  }
  //iterate through board of arrays
    //iterate each array
        //toggle rook 
  //using recursive function
  console.log(rows)
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return rows; //solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var rookBoard = new Board({n:n});
  var rows = rookBoard.rows();
  var amountOfRooks = 0;
  if (n === 1) {
      return 1
    }
//generate a board
//create a variable for solutions counter

//create check rook
var checkRook = function (row) {
//create base case when rooks === n
  if (amountOfRooks === n) {
    solutionCount++;
    return; 
  //add to solution
  //return     
  };
  //iterate thru row
  for (var i = 0; i < n; i++) { 
    //toggle piece
    rookBoard.togglePiece(row, i);    // row ?
    //if no conflicts
      
    if (rookBoard.hasAnyRooksConflicts()) { 
      //increment rooks
  // debugger
      //invoke recursive check rook function for next row
      rookBoard.togglePiece(row, i);    // row ?
      
      // return
      //untoggle
    //if conflicts
    } else {
      //untoggle
      amountOfRooks++;
      checkRook(row + 1);    // ?
      rookBoard.togglePiece(row, i);
      amountOfRooks--;
      //decrement rooks
// debugger
      //return
    } 
  }
};
//invoke check rook for first row
// console.log(rows[0]);
checkRook(0);
// console.log(solutionCount);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // if n equals 2 or 3 
  var queenBoard = new Board({n:n});
  var rows = queenBoard.rows();
  var amountOfQueens = 0;
  debugger;
  //if n equals 2 or 3
  if (n === 2 || n === 3) {
  // return rows
    return new Board({n:n}).rows()        
  }   
//generate a board
//create a variable for solutions counter

//create check rook
var checkQueen = function (row) {
//create base case when rooks === n
  if (amountOfQueens === n) {
    return queenBoard;
  //add to solution
  //return     
  };
  //iterate thru row
  for (var i = 0; i < n; i++) { 
    //toggle piece
    queenBoard.togglePiece(row, i);    // row ?
    //if no conflicts
      
    if (queenBoard.hasAnyQueensConflicts()) { 
      //increment rooks
  // debugger
      //invoke recursive check rook function for next row
      queenBoard.togglePiece(row, i);    // row ?
      
      // return
      //untoggle
    //if conflicts
    } else {
      //untoggle
      amountOfQueens++;
      checkQueen(row + 1);    // ?
      if (n !== amountOfQueens) {
        queenBoard.togglePiece(row, i);
        amountOfQueens--;
      }

      //decrement rooks
// debugger
      //return
    } 
  }
};
//invoke check rook for first row
// console.log(rows[0]);
  checkQueen(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(queenBoard));
  return queenBoard.rows(); //solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var queenBoard = new Board({n:n});
  var rows = queenBoard.rows();
  var amountOfQueens = 0;
  if (n === 1) {
      return 1
    }
//generate a board
//create a variable for solutions counter

//create check rook
var checkQueen = function (row) {
//create base case when rooks === n
  if (amountOfQueens === n) {
    solutionCount++;
    return; 
  //add to solution
  //return     
  };
  //iterate thru row
  for (var i = 0; i < n; i++) { 
    //toggle piece
    queenBoard.togglePiece(row, i);    // row ?
    //if no conflicts
      
    if (queenBoard.hasAnyQueensConflicts()) { 
      //increment rooks
  // debugger
      //invoke recursive check rook function for next row
      queenBoard.togglePiece(row, i);    // row ?
      
      // return
      //untoggle
    //if conflicts
    } else {
      //untoggle
      amountOfQueens++;
      checkQueen(row + 1);    // ?
      queenBoard.togglePiece(row, i);
      amountOfQueens--;
      //decrement rooks
// debugger
      //return
    } 
  }
};
//invoke check rook for first row
// console.log(rows[0]);
checkQueen(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
