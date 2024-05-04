function gymnastics(input) {
    let country = input[0];
    let discipline = input[1];
    let grade = 0;
    let maxPoints = 20;

    switch (country) {
        case "Russia":
            if (discipline === "ribbon") {
                grade = 9.1 + 9.4;
            } else if (discipline === "hoop") {
                grade = 9.3 + 9.8;
            } else if (discipline === "rope") {
                grade = 9.6 + 9.0;
            }
            break;

        case "Bulgaria":
            if (discipline === "ribbon") {
                grade = 9.600 + 9.400;
            } else if (discipline === "hoop") {
                grade = 9.550 + 9.750;
            } else if (discipline === "rope") {
                grade = 9.500 + 9.400;
            }
            break;

        case "Italy":
            if (discipline === "ribbon") {
                grade = 9.200 + 9.500;
            } else if (discipline === "hoop") {
                grade = 9.450 + 9.350;
            } else if (discipline === "rope") {
                grade = 9.700 + 9.150;
            }
            break;

    }

    let pointsToMaxLeft = maxPoints - grade;
    let percentLeft = (pointsToMaxLeft / maxPoints) * 100;

    console.log(`The team of ${country} get ${grade.toFixed(3)} on ${discipline}.`);
    console.log(`${percentLeft.toFixed(2)}%`);
}


gymnastics(["Bulgaria", "ribbon"]);
gymnastics(["Russia", "rope"]);