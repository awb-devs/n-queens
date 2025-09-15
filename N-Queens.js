
let board = []

function init(n) {
  for (i = 0; i < n; i++) {
    board.push(i);
  }
}

function move() {
  a = Math.floor(Math.random() * board.length);
  b = Math.floor(Math.random() * board.length);
  swap(a, b);
  return { a, b };
}

function swap(a, b) {
  a_val = board[a];
  board[a] = board[b];
  board[b] = a_val;
}

function evaluate() {
  score = 0;
  for (a = 0; a < board.length; a++) {
    for (b = a + 1; b < board.length; b++) {
      if (Math.abs(a - b) == Math.abs(board[a] - board[b])) {
        score += 2;
      }
    }
  }
  return score;
}

function solve(x) {
  let score = evaluate();
  let count = 0;
  let steps = 0;
  while (score != 0 && steps != x) {
    const { a, b } = move();
    let newScore = evaluate();
    if (newScore >= score) {
      swap(a, b);
      count++;
      if (count > 100) {
        break;
      }
      continue;
    }
    score = newScore;
    count = 0;
    steps++;
  }
  return score;
}

