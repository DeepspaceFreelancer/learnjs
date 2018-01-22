var formattedProblems = [];

learnjs.problems.forEach(function(problem) {
    formattedProblems.push({
        code: learnjs.formatCode(problem.code),
        name: problem.name
    });
});

return formattedProblems;

/* This code could be replaced by one line:
    return learnjs.problems.map(learnjs.formatCode);
*/