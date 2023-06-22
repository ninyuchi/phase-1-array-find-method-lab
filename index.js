// code your solution here
function superbowlWin(superbowls) {
    const winningSuperbowl = superbowls.find(superbowl => superbowl.result === "W");
    return winningSuperbowl ? winningSuperbowl.year : undefined;
  }
